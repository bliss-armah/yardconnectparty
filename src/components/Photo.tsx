import Image from "next/image";

import type { SanityImage } from "@/lib/content";
import { urlForImage } from "@/sanity/image";

/* Local party imagery used until the CMS is populated. Uploading photos in the
   Studio replaces these automatically. */
export const localPhotos = [
  "/media/confetti.jpg",
  "/media/band.jpg",
  "/media/golden-lights.jpg",
  "/media/crowd-smoke.jpg",
  "/media/dj-deck.jpg",
  "/media/crowd-phone.jpg",
  "/media/stage-lights.jpg",
  "/media/confetti-stage.jpg",
  "/media/crowd-white.jpg",
  "/media/hero-crowd.jpg",
  "/media/dj-set.jpg",
  "/media/toast.jpg",
];

type PhotoProps = {
  image?: SanityImage;
  src?: string;
  caption?: string;
  seed?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fillParent?: boolean;
};

export default function Photo({
  image,
  src,
  caption,
  seed = 0,
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  fillParent = false,
}: PhotoProps) {
  const cmsUrl = urlForImage(image)?.width(1600).height(2000).url();
  const url = cmsUrl || src || localPhotos[seed % localPhotos.length];
  const position = fillParent ? "absolute inset-0" : "relative";

  return (
    <div className={`group ${position} overflow-hidden bg-surface ${className}`}>
      <Image
        src={url}
        alt={caption || "YardConnect party moment"}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      {caption ? (
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 translate-y-3 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="label text-accent">Yard moment</span>
          <p className="mt-1 text-sm text-cream">{caption}</p>
        </div>
      ) : null}
    </div>
  );
}
