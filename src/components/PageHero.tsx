import Reveal from "./Reveal";

type Props = {
  kicker?: string;
  title: string;
  intro?: string;
};

export default function PageHero({ kicker, title, intro }: Props) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[560px] w-[900px] -translate-x-1/2 [background:radial-gradient(closest-side,rgba(244,242,236,0.07),transparent)]" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] [background-size:26px_26px]" />
      </div>
      <div className="mx-auto max-w-4xl px-6 text-center">
        {kicker ? (
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              {kicker}
            </p>
          </Reveal>
        ) : null}
        <Reveal delay={80}>
          <h1 className="font-display text-4xl font-semibold leading-[1.05] text-balance sm:text-6xl">
            {title}
          </h1>
        </Reveal>
        {intro ? (
          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              {intro}
            </p>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
