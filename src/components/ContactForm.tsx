"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-cream/40 bg-surface/60 p-10 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cream text-2xl text-ink">
          ✓
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold">
          Message received
        </h3>
        <p className="mt-3 text-muted">
          Thank you for reaching out. Our team will be in touch very soon.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-accent hover:text-cream"
        >
          Send another message
        </button>
      </div>
    );
  }

  const fieldClass =
    "w-full rounded-xl border border-line bg-ink-soft px-4 py-3 text-sm text-cream placeholder:text-muted/70 outline-none transition-colors focus:border-cream";

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5 rounded-3xl border border-line/60 bg-surface/60 p-7 sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted">
            Full name
          </label>
          <input id="name" name="name" required placeholder="Your name" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted">
            Email
          </label>
          <input id="email" name="email" type="email" required placeholder="you@email.com" className={fieldClass} />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted">
          Subject
        </label>
        <input id="subject" name="subject" placeholder="Tickets, partnership, performing, or a hello" className={fieldClass} />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted">
          Message
        </label>
        <textarea id="message" name="message" required rows={5} placeholder="Tell us how we can help" className={fieldClass} />
      </div>

      {status === "error" ? (
        <p className="text-sm text-red-400">
          Something went wrong. Please try again or email us directly.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-cream px-8 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.02] disabled:opacity-60"
      >
        {status === "sending" ? "Sending" : "Send message"}
      </button>
    </form>
  );
}
