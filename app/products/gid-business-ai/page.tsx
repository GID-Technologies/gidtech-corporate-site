import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  PackageSearch,
  SearchCheck,
  Sparkles,
  Target,
  TrendingUp,
  Truck,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "GID Business AI",
  description:
    "GID Business AI is an executive business-intelligence system being developed to identify risks, explain performance, find opportunities, and recommend useful action.",
};

type IntelligenceArea = {
  title: string;
  example: string;
  action: string;
  icon: LucideIcon;
};

const intelligenceAreas: IntelligenceArea[] = [
  {
    title: "Inventory",
    example: "Product A may run out within six days.",
    action: "Recommended action: Reorder now.",
    icon: PackageSearch,
  },
  {
    title: "Finance",
    example: "Four invoices are overdue.",
    action: "Recommended action: Prioritise collection.",
    icon: CircleDollarSign,
  },
  {
    title: "Operations",
    example: "Five shipments require attention.",
    action: "Recommended action: Review affected customers.",
    icon: Truck,
  },
  {
    title: "Marketing",
    example: "Campaign B has spent money without producing conversions.",
    action: "Recommended action: Pause and review.",
    icon: Target,
  },
  {
    title: "Sales",
    example: "Three valuable customers have not purchased recently.",
    action: "Recommended action: Begin a retention campaign.",
    icon: TrendingUp,
  },
  {
    title: "Customer Success",
    example: "Repeated complaints are appearing around one service point.",
    action: "Recommended action: Investigate the recurring issue.",
    icon: Users,
  },
];

const businessOutcomes = [
  {
    title: "See risks earlier",
    description:
      "Identify low inventory, overdue payments, delayed operations, and falling performance before they become larger losses.",
    icon: AlertTriangle,
  },
  {
    title: "Find opportunities",
    description:
      "Recognise valuable customers, stronger products, revenue gaps, and areas where the business can grow.",
    icon: SearchCheck,
  },
  {
    title: "Know what matters today",
    description:
      "Turn large amounts of operational information into a short list of useful executive priorities.",
    icon: Clock3,
  },
  {
    title: "Make decisions faster",
    description:
      "Reduce the time spent moving between reports, dashboards, spreadsheets, and disconnected systems.",
    icon: BrainCircuit,
  },
];

export default function GidBusinessAiPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-5 pb-24 pt-32 md:px-8 md:pb-32 md:pt-40">
        <Link
          href="/products"
          className="mb-8 inline-flex rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-neutral-300 transition hover:bg-white/[0.08] hover:text-white"
        >
          ← Back to Products
        </Link>

        <div className="grid gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
          <div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-cyan-200/20 bg-cyan-200/[0.045] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-cyan-100/70">
                Active AI Development
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-400">
                Foundation AI Completed
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-400">
                Executive Intelligence In Progress
              </span>
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200/60">
              GID Business AI
            </p>

            <h1 className="mt-5 max-w-5xl text-balance text-4xl font-semibold tracking-[-0.06em] text-white md:text-7xl">
              Your business may already have the data. The missing part is
              knowing what to do next.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-400 md:text-xl">
              GID Business AI is being developed as an executive intelligence
              system that understands business activity, identifies risks,
              explains performance, finds opportunities, and recommends useful
              action.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact?service=business-ai#contact-form"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
              >
                Discuss Business AI
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/products#active-development"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.035] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
              >
                Explore GID Products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <ExecutiveBriefing />
        </div>

        <section className="mt-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              The business problem
            </p>

            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.045em] text-white md:text-6xl">
              Reports tell you what exists. Intelligence helps you decide what
              to do.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-400">
              Many businesses already have orders, invoices, customer records,
              inventory information, campaign results, and operational reports.
              The difficulty is understanding what matters and acting before the
              problem becomes expensive.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {intelligenceAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
                  className="rounded-[1.7rem] border border-white/10 bg-white/[0.025] p-6"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                    <Icon className="h-5 w-5 text-white" />
                  </span>

                  <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-600">
                    {area.title}
                  </p>

                  <h3 className="mt-3 text-lg font-semibold leading-7 text-white">
                    {area.example}
                  </h3>

                  <p className="mt-4 text-sm font-semibold leading-6 text-cyan-100/60">
                    {area.action}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-24 rounded-[2.2rem] border border-cyan-200/15 bg-cyan-200/[0.025] p-7 md:p-10">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
            <div>
              <Sparkles className="h-7 w-7 text-cyan-100/70" />

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/55">
                Commercial value
              </p>

              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.045em] text-white md:text-5xl">
                A business should not discover problems after they become
                losses.
              </h2>

              <p className="mt-6 text-lg leading-8 text-neutral-400">
                The objective is to help owners see what is changing, understand
                why it matters, and know which action deserves attention first.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {businessOutcomes.map((outcome) => {
                const Icon = outcome.icon;

                return (
                  <article
                    key={outcome.title}
                    className="rounded-2xl border border-white/10 bg-black/45 p-5"
                  >
                    <Icon className="h-5 w-5 text-cyan-100/65" />

                    <h3 className="mt-5 text-lg font-semibold text-white">
                      {outcome.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-neutral-500">
                      {outcome.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mt-24 rounded-[2.2rem] border border-white/10 bg-white/[0.025] p-7 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <BriefcaseBusiness className="h-7 w-7 text-white" />

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
                Current development status
              </p>

              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.045em] text-white md:text-5xl">
                An active product build—not a finished autonomous operating
                system.
              </h2>

              <p className="mt-6 text-lg leading-8 text-neutral-400">
                Foundation AI has been completed, while Executive Intelligence
                is currently in progress. Predictive, growth, and autonomous
                capabilities remain future product directions.
              </p>
            </div>

            <div className="grid gap-3">
              {[
                {
                  label: "Foundation AI",
                  status: "Completed",
                  active: true,
                },
                {
                  label: "Executive Intelligence",
                  status: "In Progress",
                  active: true,
                },
                {
                  label: "Predictive and Growth Intelligence",
                  status: "Future Direction",
                  active: false,
                },
                {
                  label: "AI Business Operating System",
                  status: "Long-Term Vision",
                  active: false,
                },
              ].map((phase) => (
                <div
                  key={phase.label}
                  className={`flex items-center justify-between gap-5 rounded-2xl border p-5 ${
                    phase.active
                      ? "border-cyan-200/15 bg-cyan-200/[0.035]"
                      : "border-white/10 bg-black/45"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <CheckCircle2
                      className={`h-5 w-5 ${
                        phase.active ? "text-cyan-100/65" : "text-neutral-700"
                      }`}
                    />

                    <p className="text-sm font-semibold text-white">
                      {phase.label}
                    </p>
                  </div>

                  <span className="text-[9px] font-semibold uppercase tracking-[0.13em] text-neutral-500">
                    {phase.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-24 rounded-[2.2rem] border border-cyan-200/20 bg-cyan-200/[0.035] p-8 text-center md:p-14">
          <BrainCircuit className="mx-auto h-8 w-8 text-cyan-100/70" />

          <h2 className="mx-auto mt-6 max-w-4xl text-balance text-3xl font-semibold tracking-[-0.045em] text-white md:text-6xl">
            What business decision is taking too long because the information is
            unclear?
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-neutral-400">
            Bring GID the business information you already have and the
            decisions you are struggling to make from it.
          </p>

          <Link
            href="/contact?service=business-ai#contact-form"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-neutral-200"
          >
            Start a Business AI Conversation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </section>
    </main>
  );
}

function ExecutiveBriefing() {
  return (
    <div className="rounded-[2rem] border border-cyan-200/20 bg-[#061014] p-6 shadow-[0_35px_120px_rgba(0,0,0,0.8)]">
      <div className="flex items-start justify-between gap-6 border-b border-white/10 pb-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-100/45">
            Illustrative executive briefing
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-white">
            Good morning, CEO.
          </h2>
        </div>

        <div className="rounded-2xl border border-cyan-200/20 bg-cyan-200/[0.055] px-5 py-4 text-center">
          <p className="text-[9px] uppercase tracking-[0.17em] text-cyan-100/50">
            Business health
          </p>

          <p className="mt-2 text-3xl font-semibold text-white">
            82
            <span className="text-base text-neutral-600">/100</span>
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {[
          "Revenue is improving.",
          "Customer retention increased.",
          "Three shipments need attention.",
          "One invoice is overdue.",
          "Product X inventory is becoming low.",
          "Marketing performance improved.",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/35 px-4 py-3"
          >
            <BarChart3 className="h-4 w-4 shrink-0 text-cyan-100/50" />

            <p className="text-sm font-medium text-neutral-300">{item}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-2xl border border-white/10 bg-black/45 p-5">
        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-neutral-600">
          Recommended focus today
        </p>

        <div className="mt-4 grid gap-3">
          {[
            "Contact overdue customers",
            "Approve inventory purchase",
            "Review delayed shipments",
          ].map((action, index) => (
            <div
              key={action}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-3"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cyan-200/15 text-[9px] font-semibold text-cyan-100/60">
                0{index + 1}
              </span>

              <p className="text-xs font-semibold text-white">{action}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
