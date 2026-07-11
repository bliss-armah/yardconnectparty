import type { Metadata } from "next";
import { PortableText } from "next-sanity";

import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { getAbout } from "@/lib/content";
import type { PortableTextBlock } from "@portabletext/types";

export const metadata: Metadata = {
  title: "About",
  description:
    "YardConnect is a community built around music, culture, and real connection. Learn what drives the party the city waits for all year.",
};

export default async function AboutPage() {
  const about = await getAbout();

  return (
    <>
      <PageHero kicker="Who we are" title={about.heading} intro={about.intro} />

      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <Photo
              image={about.image}
              src={about.src}
              seed={2}
              className="aspect-[4/5] rounded-[2rem]"
              sizes="(max-width: 1024px) 90vw, 45vw"
            />
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-5 text-base leading-relaxed text-muted">
              {about.body && about.body.length > 0 ? (
                <div className="prose-invert space-y-5">
                  <PortableText value={about.body as PortableTextBlock[]} />
                </div>
              ) : (
                <>
                  <p>
                    YardConnect started with a simple idea. Turn an ordinary
                    evening into a night the whole city would remember. We opened
                    the gate, turned up the sound, and welcomed anyone who wanted
                    to be part of something warm.
                  </p>
                  <p>
                    Year after year the yard has grown, yet the heart of it has
                    never changed. We put people first, we celebrate the culture
                    that raised us, and we craft every detail so the night feels
                    effortless from the first song to the last.
                  </p>
                  <p>
                    Today YardConnect is a homecoming. It is the one night when
                    friends reunite, strangers become family, and the city
                    remembers how good it feels to simply be together.
                  </p>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {about.values && about.values.length > 0 ? (
        <section className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeading
            kicker="What we stand for"
            title="The values that shape the yard"
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {about.values.map((value, i) => (
              <Reveal
                key={i}
                delay={i * 90}
                className="flex gap-5 rounded-3xl border border-line/60 bg-surface/60 p-7 transition-colors hover:border-cream/40"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream font-display text-lg font-bold text-ink">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}
