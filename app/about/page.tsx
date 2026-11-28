import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Layers3,
  Megaphone,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About GID Technologies",
  description:
    "GID Technologies is a Lagos-based technology company building business websites, digital solutions and live digital products.",
  alternates: {
    canonical: "/about",
  },
};

const expertise = [
  {
    number: "01",
    title: "Business Websites",
    description:
      "Professional online spaces that help businesses present their services and connect with customers.",
    icon: Globe2,
    href: "/solutions#business-websites",
  },
  {
    number: "02",
    title: "Custom Software",
    description:
      "Web platforms, dashboards and digital tools built around specific business needs.",
    icon: Layers3,
    href: "/solutions#custom-platforms",
  },
  {
    number: "03",
    title: "Business Visibility",
    description:
      "Digital presence, positioning and communication support for growing organisations.",
    icon: Megaphone,
    href: "/solutions#visibility-systems",
  },
];

const workingPrinciples = [
  "Understand the actual business need",
  "Agree on a clear scope",
  "Build, test and deliver",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* COMPANY INTRODUCTION */}
      <section
        aria-labelledby="about-title"
        className="section-shell relative overflow-hidden px-5 pb-12 pt-32 md:px-8 md:pb-16 md:pt-40"
      >
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[480px] w-[680px] -translate-x-1/2 rounded-full bg-white/[0.035] blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
              About GID Technologies
            </p>

            <h1
              id="about-title"
              className="max-w-3xl text-balance text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl"
            >
              Building technology that works beyond the idea.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-neutral-400 md:text-lg">
              GID Technologies is a technology company based in Lagos, Nigeria.
              We build digital products, business websites and practical
              software solutions for businesses and organisations.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-300 md:text-base">
              Our focus is straightforward: understand the need, build useful
              solutions and deliver work that can be put to use.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
              >
                Explore Our Services
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <Link
                href="/contact?service=consultation#contact-form"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
              >
                Contact GIDTech
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* OFFICIAL BRAND IDENTITY */}
          <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-4 md:p-5">
            <div className="flex aspect-[5/4] items-center justify-center overflow-hidden rounded-2xl bg-white p-8">
              <Image
                src="/brand/GID black.png"
                alt="GID Technologies official logo"
                width={720}
                height={720}
                priority
                sizes="(max-width: 1024px) 90vw, 500px"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 px-2 pb-1 pt-5">
              <div>
                <p className="text-sm font-semibold text-white">
                  GID Technologies
                </p>
                <p className="mt-1 text-xs text-neutral-500">Lagos, Nigeria</p>
              </div>

              <span className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-neutral-300">
                RC 9595315
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* AREAS OF WORK */}
      <section
        aria-labelledby="expertise-title"
        className="section-shell px-5 py-12 md:px-8 md:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
              What we do
            </p>

            <h2
              id="expertise-title"
              className="max-w-2xl text-balance text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl"
            >
              From business presence to working software.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {expertise.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="glass flex flex-col rounded-[1.75rem] p-6 md:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]">
                      <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                    </span>

                    <span className="text-xs font-medium text-neutral-600">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-neutral-400">
                    {item.description}
                  </p>

                  <Link
                    href={item.href}
                    className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-white transition hover:text-neutral-300"
                  >
                    Explore Service
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* REAL PRODUCT EVIDENCE */}
      <section
        aria-labelledby="proof-title"
        className="section-shell px-5 py-12 md:px-8 md:py-16"
      >
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col justify-center p-7 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
              Our work
            </p>

            <h2
              id="proof-title"
              className="mt-4 text-balance text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl"
            >
              Meet StatBet.
            </h2>

            <p className="mt-4 text-sm leading-7 text-neutral-400 md:text-base">
              StatBet is a live football intelligence platform developed by GID
              Technologies. It brings match analysis, player intelligence,
              outcome review and performance tracking into a public digital
              experience.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://statbet.gidtechnologies.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
              >
                Visit StatBet
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <Link
                href="/statbet"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
              >
                View Case Study
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="border-t border-white/10 bg-black/40 p-4 md:p-6 lg:border-l lg:border-t-0">
            <div className="mb-4 flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-white">
                StatBet · Football Intelligence
              </p>

              <span className="rounded-full border border-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-neutral-300">
                Live
              </span>
            </div>

            <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-white/10 bg-black">
              <Image
                src="/work/StatBet Homepage.png"
                alt="Screenshot of the live StatBet platform"
                fill
                sizes="(max-width: 1024px) 100vw, 650px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY OPERATING APPROACH */}
      <section
        aria-labelledby="approach-title"
        className="section-shell px-5 py-12 md:px-8 md:py-14"
      >
        <div className="mx-auto grid max-w-7xl gap-8 border-t border-white/10 pt-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
              How we work
            </p>

            <h2
              id="approach-title"
              className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl"
            >
              Clear scope. Responsible execution.
            </h2>

            <p className="mt-3 max-w-md text-sm leading-7 text-neutral-400">
              Every engagement begins with understanding what needs to be
              achieved.
            </p>
          </div>

          <div className="grid gap-3">
            {workingPrinciples.map((principle, index) => (
              <div
                key={principle}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.025] p-4"
              >
                <span className="text-xs font-semibold text-neutral-500">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <CheckCircle2
                  className="h-4 w-4 shrink-0 text-neutral-300"
                  aria-hidden="true"
                />

                <p className="text-sm font-medium text-neutral-200">
                  {principle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY DETAILS & CUSTOMER ACTION */}
      <section
        aria-labelledby="about-contact-title"
        className="section-shell px-5 pb-24 pt-8 md:px-8 md:pb-28"
      >
        <div className="mx-auto max-w-7xl rounded-[1.75rem] border border-white/15 bg-white/[0.045] p-7 md:p-10">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 text-xs font-medium text-neutral-400">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                GID Technologies · RC 9595315
              </p>

              <h2
                id="about-contact-title"
                className="text-balance text-2xl font-semibold tracking-[-0.035em] text-white md:text-3xl"
              >
                Let's discuss what your business needs.
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-neutral-400">
                Tell us about your project, the problem you want to solve or the
                digital presence you want to improve.
              </p>
            </div>

            <Link
              href="/contact?service=consultation#contact-form"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              Contact GID Technologies
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
