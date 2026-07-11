"use client";

import { useEffect, useState } from "react";

type Props = {
  src: string;
  label?: string;
  size?: "sm" | "lg";
};

export default function VideoLightbox({ src, label = "Watch the film", size = "lg" }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isYouTube = /youtube\.com|youtu\.be/.test(src);
  const embed = isYouTube
    ? src.replace("watch?v=", "embed/").replace("youtu.be/", "www.youtube.com/embed/")
    : src;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group inline-flex items-center gap-4"
        aria-label={label}
      >
        <span
          className={`relative flex items-center justify-center rounded-full border border-cream/40 text-cream transition-all duration-300 group-hover:scale-105 group-hover:border-cream ${
            size === "lg" ? "h-20 w-20" : "h-12 w-12"
          }`}
        >
          <span className="absolute inset-0 rounded-full bg-cream/10" />
          <svg
            viewBox="0 0 24 24"
            className={size === "lg" ? "h-7 w-7" : "h-4 w-4"}
            fill="currentColor"
            aria-hidden
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
        {label ? (
          <span className="label text-cream">{label}</span>
        ) : null}
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 text-cream transition-colors hover:bg-cream hover:text-ink"
            aria-label="Close"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <div
            className="aspect-video w-full max-w-5xl overflow-hidden rounded-xl bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {isYouTube ? (
              <iframe
                src={`${embed}?autoplay=1`}
                className="h-full w-full"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
              />
            ) : (
              <video src={embed} className="h-full w-full" controls autoPlay playsInline />
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
