import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  CircleDot,
  Layers3,
  Megaphone,
  Network,
  Sparkles,
} from "lucide-react";

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
    icon: BadgeCheck,
  },
  {
    name: "GidAds",
    status: "Current Focus",
    role: "Business visibility systems",
    description:
      "The business visibility arm of GID Technologies, helping businesses become easier to find, trust, and contact.",
    href: "/gidads",
    cta: "Explore GidAds",
    icon: Megaphone,
  },
  {
    name: "GidConnect",
    status: "Planned",
    role: "Property and opportunity connection concept",
    description:
      "A planned connection ecosystem for property discovery, opportunity matching, business discovery, and service access.",
    href: "/contact",
    cta: "Discuss Future Direction",
    icon: Network,
  },
  {
    name: "CleanConnect",
    status: "Planned",
    role: "Service connection concept",
    description:
      "A planned service connection concept linking cleaners and service providers to individuals, homes, and businesses.",
    href: "/contact",
    cta: "Discuss Future Direction",
    icon: Sparkles,
  },
];

const ecosystemNotes = [
  {
    title: "Live proof first",
    text: "GIDTech uses StatBet as public proof that the company can build, launch, monitor, and position a real digital product.",
    icon: CheckCircle2,
  },
  {
    title: "Commercial focus next",
    text: "GidAds represents the current business development direction: visibility systems for companies that need stronger public presence.",
    icon: Megaphone,
  },
  {
    title: "Roadmap with discipline",
    text: "GidConnect and CleanConnect remain planned ecosystem products until their scope, prototype, and launch direction are ready.",
    icon: Layers3,
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="section-shell mx-auto max-w-7xl px-5 pb-24 pt-32 md:px-8 md:pb-32 md:pt-40">
        <Link
          href="/"
          className="mb-8 inline-flex rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-neutral-300 transition hover:bg-white/[0.08] hover:text-white"
        >
          ← Back to Home
        </Link>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500">
              Products & Platforms
            </p>

            <h1 className="text-balance text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
              A connected ecosystem built with proof, focus, and controlled
              expansion.
            </h1>

            <p className="mt-8 text-lg leading-8 text-neutral-400 md:text-xl">
              GID Technologies is building a practical technology ecosystem
              across digital products, business visibility systems, property
              connection, and service connection. The public roadmap is
              intentionally disciplined: live products are shown as live, active
              business arms are shown as current focus, and future concepts are
              shown as planned.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                <Building2 className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-neutral-500">Ecosystem status</p>
                <p className="mt-1 text-2xl font-semibold text-white">
                  1 live · 1 current · 2 planned
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              {["Proof-led", "Commercially focused", "Roadmap controlled"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-neutral-300"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {products.map((product) => {
            const Icon = product.icon;

            return (
              <div
                key={product.name}
                className="glass rounded-[1.75rem] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/25"
              >
                <div className="flex flex-wrap items-start justify-between gap-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                      <Icon className="h-5 w-5 text-white" />
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-white">
                        {product.name}
                      </h2>

                      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-600">
                        {product.role}
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full border border-white/10 bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-black">
                    {product.status}
                  </span>
                </div>

                <p className="mt-6 leading-7 text-neutral-400">
                  {product.description}
                </p>

                <Link
                  href={product.href}
                  className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
                >
                  {product.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mt-20 rounded-[2rem] border border-white/10 bg-white/[0.035] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Ecosystem logic
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
            The roadmap is ambitious, but the public message stays honest.
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {ecosystemNotes.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-black/50 p-5"
                >
                  <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-7 text-neutral-400">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 overflow-hidden rounded-[2rem] border border-white/10 bg-black p-8 text-center md:p-12">
          <div className="mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
            <CircleDot className="h-6 w-6 text-white" />
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Current priority
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl text-balance text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
            Build credibility with StatBet. Convert execution into business
            visibility through GidAds. Expand the ecosystem with discipline.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-neutral-400">
            GIDTech’s product direction is not about listing many ideas. It is
            about building proof, creating commercial value, and expanding into
            useful connection platforms when the timing and structure are right.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/statbet"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              View StatBet Case Study
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/gidads"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
            >
              Explore GidAds
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
