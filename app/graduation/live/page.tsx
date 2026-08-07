import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Accessibility,
  ArrowRight,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  ExternalLink,
  Layers3,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Follow the GID Live Presentation",
  description:
    "Explore GID Technologies, StatBet, GID Platform, GID Business AI and PaperTalk while following the live presentation.",
};

type LiveCard = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  external?: boolean;
  icon: LucideIcon;
};

const liveCards: LiveCard[] = [
  {
    eyebrow: "The company",
    title: "GID Technologies",
    description:
      "Practical business solutions, reusable infrastructure and products built around real problems.",
    href: "/",
    cta: "Explore GID Technologies",
    icon: Building2,
  },
  {
    eyebrow: "Live public product",
    title: "StatBet",
    description:
      "Football intelligence built around analysis, context and transparent outcome review.",
    href: "https://statbet.gidtechnologies.com",
    cta: "Open Live StatBet",
    external: true,
    icon: BarChart3,
  },
  {
    eyebrow: "Active product development",
    title: "GID Platform",
    description:
      "A configurable business operations system for organising customers, orders, inventory, invoices, communication and daily workflows.",
    href: "/products#gid-platform-core",
    cta: "Explore GID Platform",
    icon: Layers3,
  },
  {
    eyebrow: "Active AI development",
    title: "GID Business AI",
    description:
      "Executive intelligence designed to identify risks, explain performance and recommend useful business action.",
    href: "/products/gid-business-ai",
    cta: "Explore GID Business AI",
    icon: BrainCircuit,
  },
  {
    eyebrow: "Working software prototype",
    title: "PaperTalk",
    description:
      "An accessibility solution that turns printed and digital documents into readable and audible information.",
    href: "#papertalk",
    cta: "Understand PaperTalk",
    icon: Accessibility,
  },
  {
    eyebrow: "Commercial conversation",
    title: "Work With GID",
    description:
      "Discuss a business system, visibility solution, workflow audit, custom platform, introduction or partnership.",
    href: "/graduation#connection-paths",
    cta: "Start a Conversation",
    icon: BriefcaseBusiness,
  },
];

export default function GraduationLivePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-5 pb-24 pt-28 md:px-8 md:pb-32 md:pt-36">
        <div className="rounded-[2.2rem] border border-cyan-200/15 bg-cyan-200/[0.025] p-7 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200/60">
            Aptech Graduation 2026
          </p>

          <h1 className="mt-6 max-w-5xl text-balance text-4xl font-semibold tracking-[-0.055em] text-white md:text-7xl">
            Follow the GID live presentation.
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-neutral-400 md:text-xl">
            Keep this page open while the presentation continues. Explore the
            company, products and opportunities that interest you most.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#live-products"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              Explore the Presentation
              <ArrowRight className="h-4 w-4" />
            </a>

            <Link
              href="/graduation#connection-paths"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.035] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
            >
              Discuss a Solution
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <section id="live-products" className="mt-16 scroll-mt-28">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {liveCards.map((card) => {
              const Icon = card.icon;

              return (
                <article
                  key={card.title}
                  className="flex min-h-[330px] flex-col rounded-[1.8rem] border border-white/10 bg-white/[0.025] p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                      <Icon className="h-5 w-5 text-white" />
                    </span>

                    <span className="rounded-full border border-white/10 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-neutral-500">
                      Live Presentation
                    </span>
                  </div>

                  <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-100/45">
                    {card.eyebrow}
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
                    {card.title}
                  </h2>

                  <p className="mt-4 flex-1 text-sm leading-7 text-neutral-400">
                    {card.description}
                  </p>

                  {card.external ? (
                    <a
                      href={card.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-7 inline-flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
                    >
                      {card.cta}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : (
                    <Link
                      href={card.href}
                      className="mt-7 inline-flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
                    >
                      {card.cta}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        <section
          id="gid-business-ai"
          className="mt-20 scroll-mt-28 rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 md:p-10"
        >
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-200/15 bg-cyan-200/[0.045]">
                <BrainCircuit className="h-6 w-6 text-cyan-100/75" />
              </div>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/55">
                GID Business AI
              </p>

              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.045em] text-white md:text-5xl">
                From business records to recommended action.
              </h2>

              <p className="mt-6 text-lg leading-8 text-neutral-400">
                GID Business AI is being developed to help owners understand
                performance, identify risks, find opportunities and decide what
                requires attention next.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Inventory may finish in six days.",
                "Four invoices are overdue.",
                "Five delayed shipments need attention.",
                "Campaign B is spending without conversions.",
                "Returning customers are increasing.",
                "Recommended actions are prioritised.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/50 p-5 text-sm font-semibold leading-6 text-neutral-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="papertalk"
          className="mt-8 scroll-mt-28 rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 md:p-10"
        >
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                <Accessibility className="h-6 w-6 text-white" />
              </div>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
                PaperTalk
              </p>

              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.045em] text-white md:text-5xl">
                Documents should not become barriers.
              </h2>

              <p className="mt-6 text-lg leading-8 text-neutral-400">
                PaperTalk explores how printed and digital documents can become
                readable and audible through one accessibility-focused software
                workflow.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-4">
              {[
                "Document",
                "Text Extraction",
                "Readable Output",
                "Spoken Audio",
              ].map((step, index) => (
                <div
                  key={step}
                  className="rounded-2xl border border-white/10 bg-black/50 p-5 text-center"
                >
                  <span className="mx-auto flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[10px] font-semibold text-neutral-500">
                    0{index + 1}
                  </span>

                  <p className="mt-4 text-sm font-semibold text-white">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] border border-cyan-200/15 bg-cyan-200/[0.03] p-8 text-center md:p-12">
          <Sparkles className="mx-auto h-6 w-6 text-cyan-100/70" />

          <h2 className="mx-auto mt-5 max-w-4xl text-balance text-3xl font-semibold tracking-[-0.045em] text-white md:text-5xl">
            See a problem GID should help solve?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
            Choose the conversation that matches your organisation and give us a
            clear route for follow-up.
          </p>

          <Link
            href="/graduation#connection-paths"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
          >
            Start a GID Conversation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </section>
    </main>
  );
}
