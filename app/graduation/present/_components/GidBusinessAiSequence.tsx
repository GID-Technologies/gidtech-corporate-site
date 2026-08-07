import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  ArrowDown,
  BarChart3,
  BrainCircuit,
  CircleDollarSign,
  Clock3,
  PackageSearch,
  ShoppingCart,
  Sparkles,
  Target,
  Truck,
  TrendingUp,
} from "lucide-react";
import type { PresentationMode } from "../presentation-data";

type GidBusinessAiSequenceProps = {
  activeStep: number;
  mode: PresentationMode;
};

type IntelligenceCard = {
  label: string;
  value: string;
  action: string;
  icon: LucideIcon;
};

const intelligenceCards: IntelligenceCard[] = [
  {
    label: "Inventory",
    value: "Product A may finish in six days.",
    action: "Recommended: Reorder now",
    icon: PackageSearch,
  },
  {
    label: "Finance",
    value: "Four invoices are overdue.",
    action: "Cash-flow risk: Medium",
    icon: CircleDollarSign,
  },
  {
    label: "Operations",
    value: "Five shipments require attention.",
    action: "Three customers may be affected",
    icon: Truck,
  },
  {
    label: "Marketing",
    value: "Campaign B produced no conversions.",
    action: "Recommended: Pause campaign",
    icon: Target,
  },
  {
    label: "Sales",
    value: "Returning customers are increasing.",
    action: "Opportunity: Retention campaign",
    icon: TrendingUp,
  },
];

const stepLabels = [
  "The Business Problem",
  "From Reports to Decisions",
  "Executive Morning Briefing",
  "Business Impact",
];

export default function GidBusinessAiSequence({
  activeStep,
  mode,
}: GidBusinessAiSequenceProps) {
  const stepOrder = mode === "core" ? [0, 1, 2] : [0, 1, 2, 3];

  const safeStep = Math.min(activeStep, stepOrder.length - 1);
  const actualStep = stepOrder[safeStep];

  return (
    <section className="w-full max-w-[1450px]">
      <div className="grid gap-8 lg:grid-cols-[0.42fr_1.58fr] lg:items-center xl:gap-12">
        <div>
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-200/15 bg-cyan-200/[0.045]">
            <BrainCircuit className="h-6 w-6 text-cyan-100/75" />
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/60">
            GID Business AI
          </p>

          <h1 className="mt-5 max-w-[10ch] text-balance text-[clamp(2.8rem,4.8vw,5.6rem)] font-semibold leading-[0.94] tracking-[-0.065em] text-white">
            An AI that understands how a business works.
          </h1>

          <p className="mt-6 max-w-lg text-[clamp(0.9rem,1.05vw,1.12rem)] leading-7 text-neutral-400">
            Not another chatbot. An executive-intelligence system designed to
            identify risks, explain performance and recommend useful action.
          </p>

          <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.025] p-4">
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-neutral-600">
              Current section
            </p>

            <p className="mt-2 text-sm font-semibold text-white">
              {stepLabels[actualStep]}
            </p>
          </div>
        </div>

        <div>
          {actualStep === 0 ? <BusinessProblemVisual /> : null}
          {actualStep === 1 ? <DecisionIntelligenceVisual /> : null}
          {actualStep === 2 ? <ExecutiveBriefingVisual /> : null}
          {actualStep === 3 ? <BusinessImpactVisual /> : null}

          <div className="mt-5 grid grid-cols-4 gap-2">
            {stepOrder.map((step, index) => (
              <div
                key={stepLabels[step]}
                className={`rounded-xl border px-3 py-2 text-center text-[8px] font-semibold uppercase tracking-[0.11em] transition ${
                  index === safeStep
                    ? "border-cyan-200/25 bg-cyan-200/[0.07] text-cyan-100"
                    : "border-white/10 bg-white/[0.02] text-neutral-600"
                }`}
              >
                {stepLabels[step]}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BusinessProblemVisual() {
  const records = [
    {
      label: "Orders",
      value: "25",
      icon: ShoppingCart,
    },
    {
      label: "Invoices",
      value: "17",
      icon: CircleDollarSign,
    },
    {
      label: "Shipments",
      value: "5 delayed",
      icon: Truck,
    },
    {
      label: "Inventory",
      value: "Low stock",
      icon: PackageSearch,
    },
  ];

  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-6">
      <div className="text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-600">
          The hidden operational problem
        </p>

        <h2 className="mx-auto mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-[-0.045em] text-white xl:text-4xl">
          A business can have information everywhere and still not know what to
          do next.
        </h2>
      </div>

      <div className="mt-7 grid gap-3 sm:grid-cols-4">
        {records.map((record) => {
          const Icon = record.icon;

          return (
            <div
              key={record.label}
              className="rounded-2xl border border-white/10 bg-black/50 p-5"
            >
              <Icon className="h-5 w-5 text-neutral-500" />

              <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.17em] text-neutral-600">
                {record.label}
              </p>

              <p className="mt-2 text-xl font-semibold text-white">
                {record.value}
              </p>
            </div>
          );
        })}
      </div>

      <ArrowDown className="mx-auto my-4 h-6 w-6 text-neutral-700" />

      <div className="rounded-2xl border border-amber-200/15 bg-amber-200/[0.035] p-5 text-center">
        <AlertTriangle className="mx-auto h-5 w-5 text-amber-100/60" />

        <p className="mt-3 text-lg font-semibold text-white">
          The numbers exist. Decision clarity does not.
        </p>

        <p className="mt-2 text-sm text-neutral-500">
          What matters? Why did it happen? What should the owner do now?
        </p>
      </div>
    </div>
  );
}

function DecisionIntelligenceVisual() {
  return (
    <div className="rounded-[2rem] border border-cyan-200/15 bg-cyan-200/[0.025] p-6">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-200/55">
            Illustrative executive output
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-white xl:text-4xl">
            From business activity to recommended action.
          </h2>
        </div>

        <Sparkles className="hidden h-7 w-7 text-cyan-100/65 sm:block" />
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {intelligenceCards.map((card, index) => {
          const Icon = card.icon;

          return (
            <article
              key={card.label}
              className={`rounded-2xl border border-white/10 bg-black/55 p-5 ${
                index === intelligenceCards.length - 1 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035]">
                  <Icon className="h-4 w-4 text-white" />
                </span>

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-neutral-600">
                    {card.label}
                  </p>

                  <p className="mt-2 text-base font-semibold text-white">
                    {card.value}
                  </p>

                  <p className="mt-2 text-xs font-semibold text-cyan-100/60">
                    {card.action}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function ExecutiveBriefingVisual() {
  const actions = [
    "Contact overdue customers",
    "Approve inventory purchase",
    "Review delayed shipments",
  ];

  return (
    <div className="rounded-[2rem] border border-cyan-200/20 bg-[#061014] p-6 shadow-[0_35px_120px_rgba(0,0,0,0.72)]">
      <div className="flex items-start justify-between gap-6 border-b border-white/10 pb-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-100/45">
            Daily executive briefing
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
          "Three shipments require attention.",
          "One invoice is overdue.",
          "Product X inventory is becoming low.",
          "Marketing performance improved.",
        ].map((insight) => (
          <div
            key={insight}
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/35 px-4 py-3"
          >
            <BarChart3 className="h-4 w-4 shrink-0 text-cyan-100/50" />

            <p className="text-sm font-medium text-neutral-300">{insight}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-2xl border border-white/10 bg-black/45 p-5">
        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-neutral-600">
          Recommended focus today
        </p>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {actions.map((action, index) => (
            <div
              key={action}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-3"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cyan-200/15 text-[9px] font-semibold text-cyan-100/60">
                0{index + 1}
              </span>

              <p className="text-xs font-semibold leading-5 text-white">
                {action}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BusinessImpactVisual() {
  return (
    <div className="rounded-[2rem] border border-cyan-200/15 bg-cyan-200/[0.025] p-6">
      <div className="text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-200/55">
          The commercial value
        </p>

        <h2 className="mx-auto mt-4 max-w-4xl text-balance text-3xl font-semibold tracking-[-0.045em] text-white xl:text-4xl">
          A business should not discover problems after they become losses.
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-neutral-400">
          GID Business AI is being built to help owners see what is changing,
          understand why it matters and decide what to do next.
        </p>
      </div>

      <div className="mt-7 grid gap-3 sm:grid-cols-2">
        {businessImpact.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.label}
              className="rounded-2xl border border-white/10 bg-black/50 p-5"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035]">
                  <Icon className="h-4 w-4 text-cyan-100/65" />
                </span>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    {item.label}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-neutral-500">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-5 rounded-2xl border border-cyan-200/20 bg-cyan-200/[0.045] px-5 py-4 text-center">
        <p className="text-sm font-semibold text-white">
          Bring GID the business information you already have—and the decisions
          you are struggling to make from it.
        </p>
      </div>
    </div>
  );
}

//added this instead
const businessImpact = [
  {
    label: "See risks earlier",
    description:
      "Identify overdue payments, delayed operations and low inventory before they become larger losses.",
    icon: AlertTriangle,
  },
  {
    label: "Find revenue opportunities",
    description:
      "Recognise returning customers, inactive buyers and products with stronger sales potential.",
    icon: TrendingUp,
  },
  {
    label: "Know what matters today",
    description:
      "Turn hundreds of business records into a short list of clear executive priorities.",
    icon: Target,
  },
  {
    label: "Make decisions faster",
    description:
      "Reduce the time spent searching through dashboards, reports and disconnected information.",
    icon: Clock3,
  },
];

// function DevelopmentRoadmapVisual() {
//   return (
//     <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-6">
//       <div className="flex items-end justify-between gap-6">
//         <div>
//           <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-600">
//             Product development direction
//           </p>

//           <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-white xl:text-4xl">
//             From foundation AI to a business operating partner.
//           </h2>
//         </div>

//         <Rocket className="hidden h-7 w-7 text-cyan-100/60 sm:block" />
//       </div>

//       <div className="mt-6 grid gap-2">
//         {roadmap.map((item, index) => {
//           const completed = item.status === "Completed";
//           const inProgress = item.status === "In Progress";

//           return (
//             <div
//               key={item.phase}
//               className={`grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-xl border px-4 py-3 ${
//                 completed
//                   ? "border-emerald-200/20 bg-emerald-200/[0.045]"
//                   : inProgress
//                     ? "border-cyan-200/20 bg-cyan-200/[0.045]"
//                     : "border-white/10 bg-black/35"
//               }`}
//             >
//               <span
//                 className={`flex h-8 w-8 items-center justify-center rounded-full border ${
//                   completed
//                     ? "border-emerald-200/20 text-emerald-100/70"
//                     : inProgress
//                       ? "border-cyan-200/20 text-cyan-100/70"
//                       : "border-white/10 text-neutral-700"
//                 }`}
//               >
//                 {completed ? (
//                   <Check className="h-4 w-4" />
//                 ) : inProgress ? (
//                   <Clock3 className="h-4 w-4" />
//                 ) : (
//                   <span className="text-[9px] font-semibold">
//                     {String(index + 1).padStart(2, "0")}
//                   </span>
//                 )}
//               </span>

//               <div>
//                 <p className="text-[8px] font-semibold uppercase tracking-[0.15em] text-neutral-600">
//                   {item.phase}
//                 </p>

//                 <p className="mt-1 text-sm font-semibold text-white">
//                   {item.label}
//                 </p>
//               </div>

//               <span
//                 className={`rounded-full border px-3 py-1 text-[8px] font-semibold uppercase tracking-[0.12em] ${
//                   completed
//                     ? "border-emerald-200/20 text-emerald-100/65"
//                     : inProgress
//                       ? "border-cyan-200/20 text-cyan-100/65"
//                       : "border-white/10 text-neutral-600"
//                 }`}
//               >
//                 {item.status}
//               </span>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
