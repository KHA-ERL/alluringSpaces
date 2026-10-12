"use client";

import { useState } from "react";

const defaultMessage =
  "Tell us about your timeline, location, and goals.";

export default function ContactForm({ whatsappNumber }) {
  const [status, setStatus] = useState("idle");

  function handleSubmit(event) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = form.get("name")?.toString().trim();
    const email = form.get("email")?.toString().trim();
    const projectType = form.get("project-type")?.toString().trim();
    const message = form.get("message")?.toString().trim();
    const phone = sanitizePhone(whatsappNumber);

    if (!phone) {
      setStatus("missing-number");
      return;
    }

    const text = [
      "New interior design inquiry",
      "",
      `Name: ${name || "Not provided"}`,
      `Email: ${email || "Not provided"}`,
      `Project type: ${projectType || "Not provided"}`,
      "",
      `Message: ${message || "Not provided"}`,
    ].join("\n");

    setStatus("sent");
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="grid w-full gap-4 border-t border-black/15 bg-[#f4efe7] p-7 text-ink" onSubmit={handleSubmit}>
      <label className="grid gap-2 font-mono text-[0.72rem] font-bold uppercase text-[#6e4630]">
        Name
        <input type="text" name="name" placeholder="Your name" required />
      </label>
      <label className="grid gap-2 font-mono text-[0.72rem] font-bold uppercase text-[#6e4630]">
        Email
        <input type="email" name="email" placeholder="you@example.com" required />
      </label>
      <label className="grid gap-2 font-mono text-[0.72rem] font-bold uppercase text-[#6e4630]">
        Project type
        <select name="project-type">
          <option>Full home design</option>
          <option>Single room refresh</option>
          <option>Styling and sourcing</option>
          <option>Commercial interior</option>
        </select>
      </label>
      <label className="grid gap-2 font-mono text-[0.72rem] font-bold uppercase text-[#6e4630]">
        Message
        <textarea name="message" rows="4" placeholder={defaultMessage} required />
      </label>
      <button className="button border-ink bg-ink text-paper" type="submit">
        Send inquiry
      </button>
      {status === "missing-number" && (
        <p className="mb-0 text-sm font-semibold normal-case text-clay">
          WhatsApp number is not configured in Sanity Environment.
        </p>
      )}
      {status === "sent" && (
        <p className="mb-0 text-sm font-semibold normal-case text-[#6e4630]">
          Opening WhatsApp with your inquiry.
        </p>
      )}
    </form>
  );
}

function sanitizePhone(value) {
  return value?.toString().replace(/\D/g, "");
}
