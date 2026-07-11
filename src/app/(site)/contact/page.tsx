import type { Metadata } from "next";

import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { getContact, getSettings } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach the YardConnect team for tickets, partnerships, or to perform on our stage. We would love to hear from you.",
};

export default async function ContactPage() {
  const [contact, settings] = await Promise.all([getContact(), getSettings()]);

  const details = [
    {
      label: "Email",
      value: contact.email || settings.email,
      href: contact.email ? `mailto:${contact.email}` : undefined,
      icon: "✉️",
    },
    {
      label: "Phone",
      value: contact.phone || settings.phone,
      href: contact.phone ? `tel:${contact.phone.replace(/\s+/g, "")}` : undefined,
      icon: "📞",
    },
    {
      label: "Find the yard",
      value: contact.address || settings.address,
      icon: "📍",
    },
  ].filter((d) => d.value);

  return (
    <>
      <PageHero
        kicker="Get in touch"
        title={contact.heading}
        intro={contact.intro}
      />

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            {details.map((detail, i) => (
              <Reveal
                key={detail.label}
                delay={i * 90}
                className="flex items-start gap-4 rounded-3xl border border-line/60 bg-surface/60 p-6 transition-colors hover:border-cream/40"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-surface-2 text-xl">
                  {detail.icon}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                    {detail.label}
                  </p>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="mt-1 block text-cream transition-colors hover:text-cream"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-cream">{detail.value}</p>
                  )}
                </div>
              </Reveal>
            ))}

            {contact.hours ? (
              <Reveal
                delay={details.length * 90}
                className="rounded-3xl border border-line bg-gradient-to-br from-surface-2 to-ink-soft p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  Response time
                </p>
                <p className="mt-2 text-cream">{contact.hours}</p>
              </Reveal>
            ) : null}

            {settings.socials && settings.socials.length > 0 ? (
              <Reveal delay={(details.length + 1) * 90}>
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted">
                  Follow the yard
                </p>
                <div className="flex flex-wrap gap-3">
                  {settings.socials.map((s) => (
                    <a
                      key={s.platform}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-line px-5 py-2 text-sm font-medium text-cream transition-colors hover:border-cream hover:text-accent"
                    >
                      {s.platform}
                    </a>
                  ))}
                </div>
              </Reveal>
            ) : null}
          </div>

          <Reveal delay={120}>
            {contact.formNote ? (
              <p className="mb-5 text-sm leading-relaxed text-muted">
                {contact.formNote}
              </p>
            ) : null}
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
