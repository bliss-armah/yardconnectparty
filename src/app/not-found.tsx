import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-7xl font-bold sm:text-9xl">404</p>
      <h1 className="mt-4 font-display text-2xl font-semibold sm:text-3xl">
        This page left the party
      </h1>
      <p className="mt-3 max-w-md text-muted">
        The page you are looking for is not here. Let us get you back to the yard.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-cream px-8 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-105"
      >
        Back home
      </Link>
    </div>
  );
}
