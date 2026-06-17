import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "StatBet Case Study",
  description:
    "StatBet is GID Technologies’ live proof product, demonstrating practical digital product execution, public positioning, and visibility monitoring.",
};

const proofPoints = [
  "Live public website",
  "Custom domain",
  "Football intelligence pages",
  "Outcome Review system",
  "Performance Tracker",
  "Analytics and visibility monitoring",
];

const sections = [
  {
    title: "The product",
    text: "StatBet is a football intelligence platform focused on match analysis, confidence tiers, outcome review, and performance tracking. It is designed to present football insights with structure, transparency, and clear public positioning.",
  },
  {
    title: "The execution proof",
    text: "For GID Technologies, StatBet proves that the company can move from idea to launch: building a public product, positioning it clearly, connecting it to a custom domain, monitoring visibility, and improving the experience over time.",
  },
  {
    title: "The business lesson",
    text: "Before helping other businesses improve their digital presence, GIDTech built and positioned its own live platform. That proof-led approach now supports the company’s business visibility and digital product direction.",
  },
];

const platformAreas = [
  "World Cup content and football intelligence pages",
  "Analysis Hub for structured match insights",
  "Outcome Review for reviewing result direction",
  "Performance Tracker for public transparency",
  "Social traffic flow from public promotion",
  "Search and analytics setup for visibility monitoring",
];

export default function StatBetPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Link
          href="/"
          className="mb-10 inline-flex rounded-full border border-cyan-300/20 px-4 py-2 text-sm text-cyan-100 transition hover:bg-cyan-300/10"
        >
          ← Back to Home
        </Link>

        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
              Proof of execution
            </p>

            <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
              StatBet proves that GIDTech can build, launch, and position real
              digital products.
            </h1>

            <p className="mt-8 text-lg leading-8 text-slate-300 md:text-xl">
              StatBet is a live football intelligence platform built under GID
              Technologies. It demonstrates execution, product thinking, public
              positioning, and visibility monitoring.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://statbet.gidtechnologies.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-cyan-300 px-5 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
              >
                Visit StatBet
              </a>
              <Link
                href="/gidads"
                className="rounded-full border border-white/15 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-white/10"
              >
                Explore Business Visibility
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/[0.06] p-6 shadow-2xl shadow-cyan-950/40">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Live product
              </p>
              <h2 className="mt-4 text-3xl font-semibold">StatBet</h2>
              <p className="mt-4 leading-7 text-slate-300">
                Football intelligence, match analysis, confidence levels,
                outcome review, and performance tracking.
              </p>

              <div className="mt-6 grid gap-3">
                {proofPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-200"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {sections.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <h2 className="text-xl font-semibold text-white">{item.title}</h2>
              <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-3xl border border-white/10 bg-slate-900/60 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            What the platform currently shows
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
            A real product experience, not just a landing page.
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {platformAreas.map((area) => (
              <div
                key={area}
                className="rounded-2xl border border-white/10 bg-slate-950/60 px-5 py-4 text-slate-200"
              >
                {area}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-3xl border border-cyan-300/20 bg-cyan-300/[0.06] p-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Why this matters
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
            GIDTech does not only talk about digital visibility. We have already
            built and publicly positioned a live product.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-slate-300">
            That execution discipline is the foundation behind GIDTech’s digital
            product work, business visibility systems, and future connection
            platforms.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/products"
              className="rounded-full bg-cyan-300 px-5 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
            >
              View Ecosystem Roadmap
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/15 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-white/10"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
