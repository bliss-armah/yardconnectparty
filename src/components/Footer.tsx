import Link from "next/link";

import type { SiteSettings } from "@/lib/content";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/history", label: "History" },
  { href: "/contact", label: "Contact" },
];

export default function Footer({ settings }: { settings: SiteSettings }) {
  const year = 2026;
  return (
    <footer className="relative mt-24 border-t border-line/60 bg-ink-soft">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/40 font-display text-base font-bold text-cream">
              Y
            </span>
            <span className="font-display text-lg font-semibold">YardConnect</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            {settings.tagline ||
              "One night of music, culture, and connection under the open sky."}
          </p>
          {settings.nextEventLocation ? (
            <p className="mt-6 text-sm text-muted">
              Next gathering at{" "}
              <span className="text-cream">{settings.nextEventLocation}</span>
            </p>
          ) : null}
          <p className="mt-6 text-xs text-muted">
            Copyright &copy; <span className="text-sm text-cream">{year}</span> YardConnect. Built for the people who make the yard.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-accent">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted transition-colors hover:text-cream"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-accent">
            Connect
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {settings.email ? (
              <li>
                <a
                  href={`mailto:${settings.email}`}
                  className="text-muted transition-colors hover:text-cream"
                >
                  {settings.email}
                </a>
              </li>
            ) : null}
            {settings.phone ? (
              <li className="text-muted">{settings.phone}</li>
            ) : null}
            {(settings.socials || []).map((s) => (
              <li key={s.platform}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted transition-colors hover:text-cream"
                >
                  {s.platform}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
