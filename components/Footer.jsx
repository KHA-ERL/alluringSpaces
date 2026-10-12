import Link from "next/link";
import { fallbackSocials } from "@/data/fallback";
import { sanityFetch } from "@/sanity/lib/client";
import { socialsQuery } from "@/sanity/lib/queries";

const iconClass = "h-4 w-4";

export default async function Footer() {
  const socials = await sanityFetch({ query: socialsQuery, fallback: fallbackSocials });
  const socialLinks = [
    ["TikTok", socials?.tiktokUrl, <TikTokIcon className={iconClass} key="tiktok-icon" />],
    ["Instagram", socials?.instagramUrl, <InstagramIcon className={iconClass} key="instagram-icon" />],
    ["Facebook", socials?.facebookUrl, <FacebookIcon className={iconClass} key="facebook-icon" />],
  ].filter(([, href]) => Boolean(href));

  return (
    <footer className="flex flex-col gap-5 border-t border-black/15 bg-paper px-4 py-7 font-mono text-[0.78rem] uppercase text-[#4f392d] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
      <p>Alluring Spaces by Charlotte Studio</p>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          {socialLinks.map(([label, href, icon]) => (
            <a
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-black/15 text-ink transition hover:-translate-y-0.5 hover:border-clay hover:text-clay"
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              key={label}
            >
              {icon}
            </a>
          ))}
        </div>
        <Link className="transition hover:text-clay" href="/">
          Back home
        </Link>
      </div>
    </footer>
  );
}

function TikTokIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M16.7 3c.4 2.7 1.9 4.4 4.3 4.6v3.1a7.7 7.7 0 0 1-4.2-1.3v6.1c0 3.3-2.2 5.5-5.6 5.5-3 0-5.2-2-5.2-4.8 0-3 2.3-5 5.6-5 .4 0 .7 0 1 .1v3.2a3.5 3.5 0 0 0-1.1-.2c-1.4 0-2.3.7-2.3 1.8s.8 1.8 2 1.8c1.4 0 2.2-.8 2.2-2.5V3h3.3Z" />
    </svg>
  );
}

function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect width="16" height="16" x="4" y="4" rx="4" />
      <circle cx="12" cy="12" r="3.4" />
      <path d="M17.4 6.8h.01" strokeLinecap="round" />
    </svg>
  );
}

function FacebookIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M13.7 21v-7.8h2.6l.4-3h-3V8.3c0-.9.3-1.5 1.6-1.5h1.6V4.1c-.8-.1-1.6-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.3H7.8v3h2.7V21h3.2Z" />
    </svg>
  );
}
