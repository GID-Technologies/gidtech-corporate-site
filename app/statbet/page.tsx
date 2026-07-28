import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Eye,
  FileText,
  Globe2,
  Network,
  ShieldCheck,
} from "lucide-react";
import ProductScreenshot from "../_components/ProductScreenshot";

export const metadata: Metadata = {
  title: "StatBet Case Study",
  description:
    "StatBet is GID Technologies’ live proof product, demonstrating practical digital product execution, public positioning, and visibility monitoring.",
};

const proofPoints = [
  {
    label: "Live public website",
    icon: Globe2,
  },
  {
    label: "Custom domain",
    icon: Network,
  },
  {
    label: "Football intelligence pages",
    icon: FileText,
  },
  {
    label: "Outcome Review system",
    icon: CheckCircle2,
  },
  {
    label: "Performance Tracker",
    icon: BarChart3,
  },
  {
    label: "Analytics and visibility monitoring",
    icon: Eye,
  },
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

const screenshots = [
  {
    title: "Homepage",
    label: "Football intelligence platform",
    src: "/work/image.png",
  },
  {
    title: "Performance Tracker",
    label: "Public outcome review and tracking",
    src: "/work/statbet-performance-tracker.png",
  },
  {
    title: "World Cup Board",
    label: "Tournament intelligence experience",
    src: "/work/statbet-worldcup-page.png",
  },
];

export default function StatBetPage() {
  return (
    <main className="statbet-safe min-h-screen bg-black text-white">
      <section className="section-shell mx-auto max-w-7xl px-5 pb-24 pt-32 md:px-8 md:pb-32 md:pt-40">
        <Link
          href="/"
          className="mb-8 inline-flex rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-neutral-300 transition hover:bg-white/[0.08] hover:text-white"
        >
          ← Back to Home
        </Link>

        <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500">
              Proof of execution
            </p>

            <h1 className="text-balance text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
              StatBet proves that GIDTech can build, launch, and position real
              digital products.
            </h1>

            <p className="mt-8 text-lg leading-8 text-neutral-400 md:text-xl">
              StatBet is a live football intelligence platform built under GID
              Technologies. It demonstrates execution, product thinking, public
              positioning, and visibility monitoring.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://statbet.gidtechnologies.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
              >
                Visit StatBet
                <ArrowRight className="h-4 w-4" />
              </a>

              <Link
                href="/solutions#visibility-systems"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
              >
                Explore Business Visibility
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="premium-border overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-5">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black shadow-premium">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div>
                  <p className="text-sm font-semibold text-white">StatBet</p>
                  <p className="text-xs text-neutral-500">Live proof product</p>
                </div>

                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-black">
                  Live
                </span>
              </div>

              <div className="relative aspect-[16/9]">
                <Image
                  src="/work/image.png"
                  alt="StatBet homepage screenshot"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 650px"
                  priority
                />
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {proofPoints.slice(0, 4).map((point) => {
                const Icon = point.icon;

                return (
                  <div
                    key={point.label}
                    className="rounded-2xl border border-white/10 bg-black/55 px-4 py-4 text-sm text-neutral-300"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-4 w-4 text-neutral-500" />
                      <span>{point.label}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {sections.map((item) => (
            <div
              key={item.title}
              className="glass rounded-[1.75rem] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/25"
            >
              <h2 className="text-xl font-semibold text-white">{item.title}</h2>
              <p className="mt-4 leading-7 text-neutral-400">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-[2rem] border border-white/10 bg-white/[0.035] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Product evidence
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
            A real product experience, not just a landing page.
          </h2>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {screenshots.map((shot) => (
              <div
                key={shot.title}
                className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/60 shadow-premium"
              >
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {shot.title}
                    </p>
                    <p className="text-xs text-neutral-500">{shot.label}</p>
                  </div>

                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  </div>
                </div>

                <div className="relative aspect-[16/9]">
                  <Image
                    src={shot.src}
                    alt={`StatBet ${shot.title} screenshot`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 420px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-[2rem] border border-white/10 bg-white/[0.035] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            What the platform currently shows
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
            Structured football intelligence with public transparency.
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {platformAreas.map((area) => (
              <div
                key={area}
                className="rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-neutral-300"
              >
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-4 w-4 text-neutral-500" />
                  <span>{area}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 overflow-hidden rounded-[2rem] border border-white/10 bg-black p-8 text-center md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Why this matters
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl text-balance text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
            GIDTech does not only talk about digital visibility. We have already
            built and publicly positioned a live product.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-neutral-400">
            That execution discipline is the foundation behind GIDTech’s digital
            product work, business visibility systems, and future connection
            platforms.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              View Ecosystem Roadmap
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
