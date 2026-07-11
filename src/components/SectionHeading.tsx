import Reveal from "./Reveal";

type Props = {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "left",
  className = "",
}: Props) {
  return (
    <Reveal
      className={`${align === "center" ? "mx-auto text-center" : ""} max-w-2xl ${className}`}
    >
      {kicker ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          {kicker}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-semibold leading-tight text-balance sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
