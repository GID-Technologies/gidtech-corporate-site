import type { LucideIcon } from "lucide-react";
import {
  AppWindow,
  ArrowRight,
  BriefcaseBusiness,
  Globe2,
  LifeBuoy,
  MonitorCog,
  Workflow,
} from "lucide-react";

type HelpRoute = {
  need: string;
  solution: string;
  result: string;
  icon: LucideIcon;
};

const helpRoutes: HelpRoute[] = [
  {
    need: "People cannot find or understand the business.",
    solution: "Visibility System",
    result: "Stronger presence and clearer enquiry routes",
    icon: Globe2,
  },
  {
    need: "Operations are scattered and difficult to monitor.",
    solution: "Business System",
    result: "Customers, orders, records and workflows organised",
    icon: MonitorCog,
  },
  {
    need: "The organisation needs a specialised digital product.",
    solution: "Custom Platform",
    result: "A portal, dashboard, internal tool or MVP",
    icon: AppWindow,
  },
  {
    need: "Staff repeat the same manual work every day.",
    solution: "Workflow Automation",
    result: "Faster routing, updates, follow-up and communication",
    icon: Workflow,
  },
  {
    need: "An existing digital system needs continued attention.",
    solution: "Digital Care",
    result: "Maintenance, improvements, monitoring and support",
    icon: LifeBuoy,
  },
];

const engagementFlow = [
  "Understand the problem",
  "Define the right scope",
  "Build the useful solution",
  "Launch and support",
];

export default function CommercialHelpScene() {
  return (
    <section className="w-full max-w-[1420px]">
      <div className="grid gap-8 lg:grid-cols-[0.58fr_1.42fr] lg:items-center xl:gap-12">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-200/15 bg-cyan-200/[0.045]">
              <BriefcaseBusiness className="h-5 w-5 text-cyan-100/70" />
            </span>

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/60">
              Hire GID
            </p>
          </div>

          <h1 className="mt-6 max-w-[10ch] text-balance text-[clamp(2.7rem,4.9vw,5.45rem)] font-semibold leading-[0.94] tracking-[-0.065em] text-white">
            Tell us what is blocking growth.
          </h1>

          <p className="mt-6 max-w-xl text-[clamp(0.95rem,1.08vw,1.15rem)] leading-8 text-neutral-400">
            GID studies the problem, identifies the affected workflow and
            recommends the right level of digital solution.
          </p>

          <div className="mt-7 rounded-2xl border border-cyan-200/15 bg-cyan-200/[0.035] p-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-cyan-100/45">
              Commercial principle
            </p>

            <p className="mt-3 text-sm font-semibold leading-6 text-cyan-50">
              Start with the problem creating the strongest operational or
              financial impact.
            </p>
          </div>
        </div>

        <SolutionRouteMap />
      </div>
    </section>
  );
}

function SolutionRouteMap() {
  return (
    <div className="rounded-[2rem] border border-white/15 bg-[#05080b] p-6 shadow-[0_35px_120px_rgba(0,0,0,0.82)]">
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-600">
            Problem-to-solution map
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
            Different problems require different systems.
          </h2>
        </div>

        <span className="shrink-0 rounded-full border border-cyan-200/15 bg-cyan-200/[0.045] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.13em] text-cyan-100/55">
          Available Now
        </span>
      </div>

      <div className="mt-6 grid gap-2">
        {helpRoutes.map((route, index) => (
          <SolutionRoute
            key={route.solution}
            route={route}
            number={index + 1}
          />
        ))}
      </div>

      <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.025] p-4">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {engagementFlow.map((step, index) => (
            <div key={step} className="flex items-center gap-2">
              <span className="rounded-full border border-white/10 bg-black/35 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.09em] text-neutral-400">
                {step}
              </span>

              {index < engagementFlow.length - 1 ? (
                <ArrowRight className="h-3 w-3 text-neutral-700" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SolutionRoute({
  route,
  number,
}: {
  route: HelpRoute;
  number: number;
}) {
  const Icon = route.icon;

  return (
    <article className="grid items-center gap-3 rounded-[1.25rem] border border-white/10 bg-black/50 p-3 md:grid-cols-[1fr_auto_1.12fr]">
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-[9px] font-semibold text-neutral-600">
          0{number}
        </span>

        <p className="text-xs font-semibold leading-5 text-neutral-400">
          {route.need}
        </p>
      </div>

      <ArrowRight className="mx-auto hidden h-4 w-4 text-neutral-700 md:block" />

      <div className="flex items-center gap-4 rounded-xl border border-cyan-200/10 bg-cyan-200/[0.025] px-4 py-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-200/15 bg-cyan-200/[0.04]">
          <Icon className="h-4 w-4 text-cyan-100/70" />
        </span>

        <div className="min-w-0">
          <h3 className="text-sm font-semibold text-white">{route.solution}</h3>

          <p className="mt-1 text-[10px] leading-4 text-neutral-600">
            {route.result}
          </p>
        </div>
      </div>
    </article>
  );
}
