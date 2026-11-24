import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  BarChart3,
  Globe2,
  Layers3,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "StatBet | Our Work",
  description:
    "Explore StatBet, a live football intelligence platform built by GID Technologies, demonstrating product development, public deployment and ongoing improvement.",
  alternates: {
    canonical: "/statbet",
  },
};

const capabilities = [
  {
    title: "Product Development",
    description: "A working platform with connected digital experiences.",
    icon: Layers3,
  },
  {
    title: "Public Deployment",
    description: "A live website accessible through its own domain.",
    icon: Globe2,
  },
  {
    title: "Intelligence & Review",
    description: "Match analysis, outcome review and performance reporting.",
    icon: BarChart3,
  },
];

const screenshots = [
  {
    title: "Football Intelligence",
    description: "The StatBet homepage.",
    src: "/work/StatBet Homepage.png",
  },
  {
    title: "Performance",
    description: "Public performance review and accountability.",
    src: "/work/StatBet Performance.png",
  },
  {
    title: "League Intelligence",
    description: "Competition context, standings and match intelligence.",
    src: "/work/StatBet EFL.png",
  },
];

export default function StatBetPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="section-shell mx-auto max-w-7xl px-5 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40">
        <Link
          href="/"
          className="mb-10 inline-flex items-center rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-neutral-300 transition hover:bg-white/[0.08] hover:text-white"
        >
          Back to Home
        </Link>

        {/* PRODUCT INTRODUCTION */}
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
              Built by GID Technologies
            </p>

            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
              StatBet.
              <span className="mt-2 block text-neutral-400">
                Football intelligence in action.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-neutral-400 md:text-lg">
              StatBet is our live football intelligence platform, bringing match
              analysis, league intelligence, outcome review and performance
              tracking into one digital experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://statbet.gidtechnologies.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
              >
                Explore Live Product
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
              >
                Our Services
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm text-neutral-400">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />A live
              product by GID Technologies.
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-4 md:p-5">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-white">StatBet</p>
                <p className="mt-1 text-xs text-neutral-500">
                  Public product experience
                </p>
              </div>

              <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-neutral-300">
                Live
              </span>
            </div>

            <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-white/10">
              <Image
                src="/work/image.png"
                alt="Current StatBet homepage"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 650px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* EXECUTION EVIDENCE */}
        <section aria-labelledby="execution-heading" className="mt-16 md:mt-20">
          <h2
            id="execution-heading"
            className="text-2xl font-semibold tracking-tight text-white md:text-3xl"
          >
            What this product demonstrates
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <article
                  key={capability.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-6"
                >
                  <Icon
                    className="h-6 w-6 text-neutral-300"
                    aria-hidden="true"
                  />

                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {capability.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-neutral-400">
                    {capability.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* ACTUAL PRODUCT SCREENSHOTS */}
        <section
          aria-labelledby="screenshots-heading"
          className="mt-16 md:mt-20"
        >
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
                Product showcase
              </p>

              <h2
                id="screenshots-heading"
                className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl"
              >
                Explore the platform
              </h2>
            </div>

            <a
              href="https://statbet.gidtechnologies.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-neutral-300"
            >
              Open StatBet
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {screenshots.map((shot) => (
              <article
                key={shot.title}
                className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.025]"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-black">
                  <Image
                    src={shot.src}
                    alt={`StatBet ${shot.title} interface`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover object-top"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-base font-semibold text-white">
                    {shot.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-neutral-400">
                    {shot.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* COMMERCIAL CONCLUSION */}
        <section
          aria-labelledby="statbet-contact-heading"
          className="mt-16 flex flex-col items-start justify-between gap-6 rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-7 md:mt-20 md:p-10 lg:flex-row lg:items-center"
        >
          <div>
            <h2
              id="statbet-contact-heading"
              className="text-2xl font-semibold tracking-tight text-white md:text-3xl"
            >
              Have a digital project of your own?
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-neutral-400">
              GID Technologies designs business websites and custom digital
              solutions. Tell us what you want to build or improve.
            </p>
          </div>

          <Link
            href="/contact?service=consultation#contact-form"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-neutral-200"
          >
            Discuss Your Project
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </section>
      </section>
    </main>
  );
}
