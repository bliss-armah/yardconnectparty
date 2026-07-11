import Link from "next/link";

import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import Countdown from "@/components/Countdown";
import VideoLightbox from "@/components/VideoLightbox";
import { getHome, getSettings } from "@/lib/content";

export default async function HomePage() {
  const [home, settings] = await Promise.all([getHome(), getSettings()]);

  const gallery = home.gallery || [];
  const ticker = ["YardConnect", "Music", "Culture", "Connection", "Community", "One night"];

  return (
    <>
      {/* Hero with background video */}
      <section className="relative h-[100svh] min-h-[620px] w-full overflow-hidden grain">
        <div className="absolute inset-0">
          {home.heroVideoUrl ? (
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/media/crowd-white.jpg"
              src={home.heroVideoUrl}
            />
          ) : (
            <Photo
              image={home.heroImages?.[0]}
              src="/media/crowd-white.jpg"
              seed={8}
              priority
              className="h-full w-full animate-kenburns"
              sizes="100vw"
            />
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />

        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6">
          <Reveal>
            <span className="label text-accent">
              {home.heroKicker || "One night. One yard."}
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-5 font-display text-[18vw] font-semibold leading-[0.9] tracking-tight sm:text-[13vw] lg:text-[10rem]">
              {home.heroHeading}
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-md text-lg text-cream/80">
              {home.heroSubheading}
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-9 flex flex-wrap items-center gap-8">
              <a
                href={settings.ticketUrl || "/contact"}
                className="rounded-full bg-cream px-8 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-105"
              >
                Join the party
              </a>
              {home.aftermovieUrl ? (
                <VideoLightbox src={home.aftermovieUrl} label="Watch the film" size="sm" />
              ) : null}
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/50">
          <div className="flex flex-col items-center gap-2">
            <span className="label text-[0.6rem]">Scroll</span>
            <svg className="h-5 w-5 animate-scrollcue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 5v14M6 13l6 6 6-6" />
            </svg>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="border-y border-line bg-ink py-4">
        <div className="flex overflow-hidden">
          {[0, 1].map((row) => (
            <div
              key={row}
              className="flex shrink-0 animate-marquee items-center gap-6 pr-6"
              aria-hidden={row === 1}
            >
              {[...ticker, ...ticker].map((word, i) => (
                <span key={i} className="flex items-center gap-6">
                  <span className="font-display text-lg italic text-cream/70">{word}</span>
                  <span className="text-accent">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Gallery mosaic, the centerpiece */}
      <section className="px-3 py-14 sm:px-4 sm:py-20">
        <div className="mx-auto mb-8 flex max-w-7xl items-end justify-between px-3">
          <div>
            <span className="label text-accent">The scene</span>
            <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
              Straight from the yard
            </h2>
          </div>
          <Link
            href="/history"
            className="hidden text-sm text-muted transition-colors hover:text-cream sm:inline"
          >
            See every year
          </Link>
        </div>

        <div className="grid auto-rows-[42vw] grid-cols-2 gap-3 sm:auto-rows-[26vw] md:auto-rows-[15vw] md:grid-cols-4">
          {gallery.slice(0, 8).map((item, i) => {
            const spans = [
              "col-span-2 row-span-2",
              "",
              "",
              "row-span-2",
              "",
              "col-span-2",
              "",
              "",
            ];
            return (
              <Reveal key={i} delay={(i % 4) * 60} className={spans[i] || ""}>
                <Photo
                  image={item.image}
                  src={item.src}
                  caption={item.caption}
                  seed={i}
                  className="h-full w-full"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Aftermovie */}
      {home.aftermovieUrl ? (
        <section className="relative h-[70vh] min-h-[440px] w-full overflow-hidden grain">
          <Photo src="/media/stage-lights.jpg" seed={6} fillParent sizes="100vw" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative flex h-full flex-col items-center justify-center gap-6 px-6 text-center">
            <span className="label text-accent">The 2025 aftermovie</span>
            <h2 className="max-w-2xl font-display text-4xl font-semibold text-balance sm:text-6xl">
              Relive the night
            </h2>
            <VideoLightbox src={home.aftermovieUrl} label="Play the film" size="lg" />
          </div>
        </section>
      ) : null}

      {/* Highlights, minimal */}
      {home.highlights && home.highlights.length > 0 ? (
        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            {home.highlights.map((item, i) => (
              <Reveal key={i} delay={i * 90} className="bg-ink p-8">
                <span className="font-display text-3xl text-accent">{item.icon}</span>
                <h3 className="mt-4 font-display text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}

      {/* Next edition band */}
      <section className="relative overflow-hidden">
        <Photo src="/media/crowd-smoke.jpg" seed={3} fillParent sizes="100vw" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center">
          <Reveal>
            <span className="label text-accent">The next edition</span>
          </Reveal>
          <Reveal delay={80}>
            <p className="mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold text-balance sm:text-5xl">
              {settings.nextEventLocation
                ? settings.nextEventLocation
                : "Save the date"}
            </p>
          </Reveal>
          {home.stats && home.stats.length > 0 ? (
            <Reveal delay={140}>
              <div className="mt-10 flex flex-wrap justify-center gap-x-14 gap-y-6">
                {home.stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="font-display text-4xl font-semibold sm:text-5xl">
                      {stat.value}
                    </p>
                    <p className="label mt-1 text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          ) : null}
          {settings.nextEventDate ? (
            <Reveal delay={200}>
              <div className="mt-12 flex justify-center">
                <Countdown date={settings.nextEventDate} />
              </div>
            </Reveal>
          ) : null}
          <Reveal delay={260}>
            <a
              href={settings.ticketUrl || "/contact"}
              className="mt-12 inline-block rounded-full bg-cream px-8 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-105"
            >
              Reserve your place
            </a>
          </Reveal>
        </div>
      </section>

      {/* Closing */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-semibold text-balance sm:text-6xl">
            {home.ctaHeading || "Your place at the yard is waiting"}
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-5 max-w-xl text-muted">{home.ctaBody}</p>
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href={settings.ticketUrl || "/contact"}
              className="rounded-full bg-cream px-8 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-105"
            >
              Join the party
            </a>
            <Link
              href="/about"
              className="rounded-full border border-line px-8 py-3.5 text-sm font-semibold text-cream transition-colors hover:border-cream"
            >
              Our story
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
