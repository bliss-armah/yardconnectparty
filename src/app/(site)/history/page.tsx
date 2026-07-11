import type { Metadata } from "next";

import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import { getHistory } from "@/lib/content";

export const metadata: Metadata = {
  title: "History",
  description:
    "From a backyard gathering to the celebration the whole city waits for. Trace the story of YardConnect through the years.",
};

export default async function HistoryPage() {
  const history = await getHistory();
  const timeline = history.timeline || [];

  return (
    <>
      <PageHero
        kicker="The journey"
        title={history.heading}
        intro={history.intro}
      />

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-cream/50 via-line to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-4">
            {timeline.map((item, i) => {
              const left = i % 2 === 0;
              return (
                <Reveal
                  key={i}
                  delay={i * 60}
                  className="relative md:grid md:grid-cols-2 md:gap-10"
                >
                  {/* Node */}
                  <span className="absolute left-4 top-2 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full bg-accent ring-4 ring-ink md:left-1/2" />

                  <div
                    className={`pl-12 md:pl-0 ${
                      left ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"
                    }`}
                  >
                    <div className="overflow-hidden rounded-3xl border border-line/60 bg-surface/60 transition-colors hover:border-cream/40">
                      <Photo
                        image={item.image}
                        src={item.src}
                        seed={i}
                        className="aspect-[16/10] w-full"
                        sizes="(max-width: 768px) 90vw, 40vw"
                      />
                      <div className="p-6">
                        <span className="inline-block rounded-full bg-surface-2 px-3 py-1 font-display text-sm font-semibold text-accent">
                          {item.year}
                        </span>
                        <h3 className="mt-3 font-display text-2xl font-semibold">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal className="mt-20 rounded-[2rem] border border-line bg-gradient-to-br from-surface-2 to-ink-soft p-10 text-center sm:p-14">
          <h2 className="font-display text-3xl font-semibold text-balance sm:text-4xl">
            The next chapter has your name on it
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Every year the story grows because people like you show up and make
            it unforgettable. Come write the next page with us.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-block rounded-full bg-cream px-8 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-105"
          >
            Be part of it
          </a>
        </Reveal>
      </section>
    </>
  );
}
