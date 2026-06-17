import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products & Platforms",
  description:
    "Explore the GID Technologies ecosystem: StatBet, GidAds, GidConnect, and CleanConnect.",
};

const products = [
  {
    name: "StatBet",
    status: "Live",
    role: "Football intelligence platform",
    description:
      "A live football intelligence platform focused on match analysis, confidence tiers, outcome review, and performance tracking.",
    href: "/statbet",
    cta: "View Case Study",
  },
  {
    name: "GidAds",
    status: "Current Focus",
    role: "Business visibility systems",
    description:
      "The business visibility arm of GID Technologies, helping businesses become easier to find, trust, and contact.",
    href: "/gidads",
    cta: "Explore GidAds",
  },
  {
    name: "GidConnect",
    status: "Planned",
    role: "Property and opportunity connection concept",
    description:
      "A planned connection ecosystem for property discovery, opportunity matching, business discovery, and service access.",
    href: "/contact",
    cta: "Discuss Future Direction",
  },
  {
    name: "CleanConnect",
    status: "Planned",
    role: "Service connection concept",
    description:
      "A planned service connection concept linking cleaners and service providers to individuals, homes, and businesses.",
    href: "/contact",
    cta: "Discuss Future Direction",
  },
];

const ecosystemNotes = [
  {
    title: "Live proof first",
    text: "GIDTech uses StatBet as public proof that the company can build, launch, monitor, and position a real digital product.",
  },
  {
    title: "Commercial focus next",
    text: "GidAds represents the current business development direction: visibility systems for companies that need stronger public presence.",
  },
  {
    title: "Roadmap with discipline",
    text: "GidConnect and CleanConnect remain planned ecosystem products until their scope, prototype, and launch direction are ready.",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Link
          href="/"
          className="mb-10 inline-flex rounded-full border border-cyan-300/20 px-4 py-2 text-sm text-cyan-100 transition hover:bg-cyan-300/10"
        >
          ← Back to Home
        </Link>

        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Products & Platforms
          </p>

          <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
            A connected ecosystem built with proof, focus, and controlled
            expansion.
          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-300 md:text-xl">
            GID Technologies is building a practical technology ecosystem across
            digital products, business visibility systems, property connection,
            and service connection. The public roadmap is intentionally
            disciplined: live products are shown as live, active business arms
            are shown as current focus, and future concepts are shown as
            planned.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {products.map((product) => (
            <div
              key={product.name}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-2xl shadow-cyan-950/20"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-2xl font-semibold text-white">
                  {product.name}
                </h2>

                <span className="rounded-full border border-cyan-300/20 bg-cyan-300/[0.08] px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
                  {product.status}
                </span>
              </div>

              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                {product.role}
              </p>

              <p className="mt-5 leading-7 text-slate-300">
                {product.description}
              </p>

              <Link
                href={product.href}
                className="mt-7 inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                {product.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-3xl border border-white/10 bg-slate-900/60 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Ecosystem logic
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
            The roadmap is ambitious, but the public message stays honest.
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {ecosystemNotes.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-3xl border border-cyan-300/20 bg-cyan-300/[0.06] p-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Current priority
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
            Build credibility with StatBet. Convert execution into business
            visibility through GidAds. Expand the ecosystem with discipline.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-slate-300">
            GIDTech’s product direction is not about listing many ideas. It is
            about building proof, creating commercial value, and expanding into
            useful connection platforms when the timing and structure are right.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/statbet"
              className="rounded-full bg-cyan-300 px-5 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
            >
              View StatBet Case Study
            </Link>
            <Link
              href="/gidads"
              className="rounded-full border border-white/15 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-white/10"
            >
              Explore GidAds
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
