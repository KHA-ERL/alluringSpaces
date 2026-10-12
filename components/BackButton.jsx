"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      className="mb-8 inline-flex h-11 w-11 items-center justify-center rounded-sm border border-current/25 bg-transparent font-mono text-xl leading-none transition hover:-translate-x-0.5 hover:text-clay"
      type="button"
      aria-label="Go to previous page"
      onClick={() => router.back()}
    >
      &larr;
    </button>
  );
}
