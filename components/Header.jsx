"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  ["Projects", "/projects"],
  ["About", "/about"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-black/10 bg-paper/95 px-4 py-3 text-ink backdrop-blur-md sm:px-6 lg:px-10">
      <div className="grid min-h-[56px] grid-cols-[auto_1fr_auto] items-center gap-3">
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-black/20 font-mono text-ink lg:hidden"
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="grid gap-1.5">
            <span className={`block h-px w-4 bg-current transition ${isOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-px w-4 bg-current transition ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px w-4 bg-current transition ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </button>

        <Link className="justify-self-center text-center uppercase leading-none lg:justify-self-start" href="/" aria-label="Alluring Spaces by Charlotte" onClick={() => setIsOpen(false)}>
          <span className="block font-sans text-[1rem] font-black tracking-normal sm:text-[1.35rem]">Alluring Spaces</span>
          <small className="block font-mono text-[0.58rem] text-[#6e4630]">by Charlotte</small>
        </Link>

        <nav className="hidden justify-center gap-12 font-mono text-[0.78rem] uppercase text-ink lg:flex" aria-label="Primary pages">
          {navItems.map(([label, href]) => (
            <Link className="transition hover:text-clay" href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>

        <Link className="inline-flex min-h-10 items-center justify-center rounded-sm bg-[#f7f0ac] px-3 font-mono text-[0.68rem] font-bold uppercase text-ink transition hover:bg-clay hover:text-paper sm:px-4 sm:text-[0.78rem]" href="/contact" onClick={() => setIsOpen(false)}>
          Consult
        </Link>
      </div>

      {isOpen && (
        <nav className="grid gap-1 border-t border-black/10 py-3 font-mono text-sm uppercase text-ink lg:hidden" aria-label="Mobile navigation">
          {navItems.map(([label, href]) => (
            <Link className="rounded-sm px-2 py-3 transition hover:bg-black/5 hover:text-clay" href={href} key={href} onClick={() => setIsOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
