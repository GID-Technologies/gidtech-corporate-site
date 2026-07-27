import Link from "next/link";
import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Code2,
  Handshake,
  Lightbulb,
  Megaphone,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Build With GID",
  description:
    "Explore opportunities to build, partner, support, test products, refer businesses, and grow with GID Technologies.",
};

type OpportunityPath = {
  title: string;
  label: string;
  description: string;
  whoItIsFor: string[];
  href: string;
  cta: string;
  icon: LucideIcon;
};

const opportunityPaths: OpportunityPath[] = [
  {
    title: "Build Products With Us",
    label: "Builders & Creators",
    description:
      "Contribute to practical digital products, platforms, business systems, and future GID Technologies projects.",
    whoItIsFor: [
      "Software developers",
      "UI/UX designers",
      "Product thinkers",
      "Data and AI builders",
      "Technical students and graduates",
    ],
    href: "/contact?service=build-with-gid&path=builder",
    cta: "Introduce Yourself",
    icon: Code2,
  },
  {
    title: "Become a Business Partner",
    label: "Business & Sales",
    description:
      "Help create business opportunities, introduce potential clients, support outreach, or contribute to commercial growth.",
    whoItIsFor: [
      "Business developers",
      "Sales and marketing people",
      "Community connectors",
      "Referral partners",
      "Industry professionals",
    ],
    href: "/contact?service=build-with-gid&path=business-partner",
    cta: "Discuss Partnership",
    icon: Handshake,
  },
  {
    title: "Explore Strategic Support",
    label: "Partners & Sponsors",
    description:
      "Support GID Technologies through strategic guidance, sponsorship, investment conversations, institutional access, or valuable resources.",
    whoItIsFor: [
      "Potential sponsors",
      "Investors and advisors",
      "Companies and institutions",
      "Technology partners",
      "Strategic supporters",
    ],
    href: "/contact?service=build-with-gid&path=strategic-support",
    cta: "Start a Strategic Conversation",
    icon: Network,
  },
  {
    title: "Become an Early User",
    label: "Testers & Pilot Businesses",
    description:
      "Test products, join pilot programmes, provide practical feedback, and help shape solutions before wider release.",
    whoItIsFor: [
      "Business owners",
      "Product testers",
      "Football intelligence users",
      "Schools and organizations",
      "Early adopters",
    ],
    href: "/contact?service=build-with-gid&path=early-user",
    cta: "Join as an Early User",
    icon: Rocket,
  },
];

const currentOpportunities = [
  {
    title: "StatBet Growth",
    description:
      "Football users, content contributors, visibility partners, testers, and strategic opportunities around the live StatBet platform.",
    status: "Live product",
    icon: Rocket,
  },
  {
    title: "Business Visibility Projects",
    description:
      "Business introductions, visibility reviews, local market discovery, campaign support, digital presentation, and client-acquisition opportunities.",
    status: "Active solution area",
    icon: Megaphone,
  },
  {
    title: "GIDTech Client Solutions",
    description:
      "Websites, custom platforms, automation workflows, business tools, maintenance, and practical technology projects.",
    status: "Active",
    icon: BriefcaseBusiness,
  },
  {
    title: "Future Product Ecosystem",
    description:
      "Early thinking, research, validation, and future execution around GidConnect, CleanConnect, and additional GID products.",
    status: "Planned",
    icon: Lightbulb,
  },
];

const engagementPrinciples = [
  {
    title: "Real contribution",
    text: "We value people who can contribute time, skills, access, ideas, feedback, opportunities, or resources in a practical way.",
    icon: CheckCircle2,
  },
  {
    title: "Clear expectations",
    text: "Every serious collaboration should define the role, responsibilities, scope, timelines, ownership, and expected outcome.",
    icon: ShieldCheck,
  },
  {
    title: "Honest positioning",
    text: "This page is not a promise of employment, funding, payment, partnership, or acceptance. It is an entry point for serious conversations.",
    icon: Building2,
  },
  {
    title: "Long-term thinking",
    text: "The goal is not to collect random names. It is to build a useful network around products, business execution, and shared opportunities.",
    icon: Sparkles,
  },
];

const engagementSteps = [
  {
    number: "01",
    title: "Choose your path",
    text: "Identify whether you want to build, create business opportunities, provide strategic support, or become an early user.",
  },
  {
    number: "02",
    title: "Introduce yourself clearly",
    text: "Share who you are, what you do, what you can contribute, and the specific GID direction that interests you.",
  },
  {
    number: "03",
    title: "Review the fit",
    text: "GID Technologies reviews the opportunity, current priorities, available capacity, risks, and possible value for both sides.",
  },
  {
    number: "04",
    title: "Define the next step",
    text: "Where there is a real fit, the next conversation should define responsibilities, scope, timeline, and expectations.",
  },
];

export default function BuildWithGidPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="section-shell mx-auto max-w-7xl px-5 pb-24 pt-32 md:px-8 md:pb-32 md:pt-40">
        <Link
          href="/"
          className="mb-8 inline-flex rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-neutral-300 transition hover:bg-white/[0.08] hover:text-white"
        >
          ← Back to Home
        </Link>

        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500">
              Build With GID
            </p>

            <h1 className="text-balance text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
              Build products, create opportunities, and grow with GID
              Technologies.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-400 md:text-xl">
              GID Technologies is building practical digital products, business
              solutions, visibility systems, and future connection platforms. We
              are open to serious conversations with people who can contribute
              skills, opportunities, access, feedback, support, or strategic
              value.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#opportunity-paths"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
              >
                Find Your Path
                <ArrowRight className="h-4 w-4" />
              </a>

              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
              >
                Explore the Ecosystem
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="premium-border rounded-[2rem] border border-white/10 bg-white/[0.025] p-6 md:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
              <Users className="h-6 w-6 text-white" />
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              More than recruitment
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
              There are different ways to contribute to the journey.
            </h2>

            <p className="mt-5 leading-8 text-neutral-400">
              GIDTech may need builders, but it also needs users, businesses,
              market access, partnerships, ideas, distribution, referrals,
              sponsorship, and strategic relationships.
            </p>

            <div className="mt-6 grid gap-3">
              {[
                "Build and improve products",
                "Introduce business opportunities",
                "Join pilots and test solutions",
                "Provide strategic support or access",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-sm text-neutral-300"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-white" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section id="opportunity-paths" className="mt-24 scroll-mt-28">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">
              Opportunity paths
            </p>

            <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
              Choose the path that best describes how you can create value.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-neutral-400 md:text-lg">
              A clear introduction gives us a better chance of understanding the
              opportunity and responding properly.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {opportunityPaths.map((path) => {
              const Icon = path.icon;

              return (
                <article
                  key={path.title}
                  className="glass rounded-[1.75rem] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/25"
                >
                  <div className="flex items-start justify-between gap-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                      <Icon className="h-5 w-5 text-white" />
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                      {path.label}
                    </span>
                  </div>

                  <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-white">
                    {path.title}
                  </h3>

                  <p className="mt-4 leading-7 text-neutral-400">
                    {path.description}
                  </p>

                  <div className="mt-7 rounded-2xl border border-white/10 bg-black/50 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-600">
                      Who this may suit
                    </p>

                    <div className="mt-4 space-y-3">
                      {path.whoItIsFor.map((person) => (
                        <div
                          key={person}
                          className="flex items-start gap-3 text-sm leading-6 text-neutral-300"
                        >
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-neutral-500" />
                          <span>{person}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={path.href}
                    className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
                  >
                    {path.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-24 rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Current opportunity areas
          </p>

          <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
            The strongest conversations should connect to what GIDTech is
            actually working on.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {currentOpportunities.map((opportunity) => {
              const Icon = opportunity.icon;

              return (
                <article
                  key={opportunity.title}
                  className="rounded-[1.5rem] border border-white/10 bg-black/50 p-6"
                >
                  <div className="flex items-start justify-between gap-5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                      <Icon className="h-5 w-5 text-white" />
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-neutral-400">
                      {opportunity.status}
                    </span>
                  </div>

                  <h3 className="mt-8 text-xl font-semibold text-white">
                    {opportunity.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-neutral-400">
                    {opportunity.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-24">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">
              Collaboration standards
            </p>

            <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
              Opportunity without structure becomes confusion.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {engagementPrinciples.map((principle) => {
              const Icon = principle.icon;

              return (
                <article
                  key={principle.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                    <Icon className="h-5 w-5 text-white" />
                  </span>

                  <h3 className="mt-7 text-xl font-semibold text-white">
                    {principle.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-neutral-400">
                    {principle.text}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-24 rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            How the process works
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
            Start with a clear introduction.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {engagementSteps.map((step) => (
              <article
                key={step.number}
                className="rounded-[1.5rem] border border-white/10 bg-black/50 p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-600">
                  {step.number}
                </p>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-neutral-400">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-24 overflow-hidden rounded-[2rem] border border-white/10 bg-white p-8 text-center text-black md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Enter the GID journey
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl text-balance text-3xl font-semibold tracking-[-0.05em] md:text-5xl">
            Tell us who you are, what you can contribute, and what you want to
            build.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-neutral-600">
            A specific introduction is more useful than a general request to
            join. Explain the opportunity, the value you bring, and the GID
            direction that interests you.
          </p>

          <Link
            href="/contact?service=build-with-gid"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Introduce Yourself
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </section>
    </main>
  );
}
