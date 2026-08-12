import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Eye,
  FileSearch,
  Globe2,
  Layers3,
  Trophy,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { PresentationMode } from "../presentation-data";

type StatBetProofSequenceProps = {
  activeStep: number;
  mode: PresentationMode;
};

type ProofStep = {
  label: string;
  title: string;
  description: string;
  evidence: string;
  context?: string;
  src?: string;
  alt?: string;
  imageClassName?: string;
  compact?: boolean;
  icon: LucideIcon;
};

const proofSteps: ProofStep[] = [
  {
    label: "Live Public Product",
    title: "GID has already taken a product beyond the idea stage.",
    description:
      "StatBet is a publicly deployed football-intelligence platform with its own product experience, domain, structured pages and continuing operation.",
    evidence: "Idea → Product → Public Launch",
    context: "A real product operating under the GID Technologies ecosystem",
    src: "/work/image.png",
    alt: "StatBet live football intelligence platform",
    imageClassName: "object-cover object-top",
    icon: Globe2,
  },
  {
    label: "Structured Intelligence",
    title: "The product publishes its thinking before the outcome is known.",
    description:
      "StatBet was designed around structured football analysis, context and recorded reasoning rather than presenting outcomes without the thinking that came before them.",
    evidence: "Analysis first · Outcome later",
    context:
      "The important proof here is the product workflow, not one individual result",
    src: "/presentation/statbet/historical/Analysis.png",
    alt: "Example of structured StatBet pre-match analysis",
    imageClassName: "object-contain scale-[1.04]",
    icon: FileSearch,
  },
  {
    label: "Outcome Review",
    title: "Completed outcomes return into the product for review.",
    description:
      "Once an analysed event is completed, StatBet can connect the original analysis with what actually happened and preserve that review as part of the product record.",
    evidence: "Publish → Complete → Review",
    context:
      "The product is designed around accountability and continued learning",
    src: "/presentation/statbet/historical/outcomereview.png",
    alt: "Example of a StatBet outcome review",
    imageClassName: "object-contain scale-[1.06]",
    compact: true,
    icon: CheckCircle2,
  },
  {
    label: "Execution Proof",
    title: "For GID, the biggest proof is the complete operating cycle.",
    description:
      "StatBet demonstrates that GID Technologies can identify a problem, design a product, build it, launch publicly, operate it and continue improving after launch.",
    evidence: "Identify → Build → Launch → Operate → Learn → Improve",
    context: "One public product demonstrating repeatable company execution",
    icon: Layers3,
  },
];

const lifecycleStages = [
  {
    label: "Build",
    text: "Turn product direction into a functioning public platform.",
    icon: Layers3,
  },
  {
    label: "Analyse",
    text: "Publish structured intelligence before the outcome is known.",
    icon: FileSearch,
  },
  {
    label: "Review",
    text: "Compare the original signal with the completed result.",
    icon: CheckCircle2,
  },
  {
    label: "Improve",
    text: "Use transparent records to guide continued development.",
    icon: Eye,
  },
];

export default function StatBetProofSequence({
  activeStep,
  mode,
}: StatBetProofSequenceProps) {
  const stepOrder = mode === "core" ? [0, 3] : [0, 1, 2, 3];

  const safeActiveStep = Math.min(activeStep, stepOrder.length - 1);

  const actualStepIndex = stepOrder[safeActiveStep];
  const step = proofSteps[actualStepIndex];
  const StepIcon = step.icon;
  const compact = Boolean(step.compact);

  return (
    <section className="w-full max-w-7xl">
      <div
        className={`grid lg:grid-cols-[0.58fr_1.42fr] lg:items-center ${
          compact ? "gap-6 xl:gap-9" : "gap-8 xl:gap-12"
        }`}
      >
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-200/15 bg-cyan-200/[0.04]">
              <StepIcon className="h-4 w-4 text-cyan-100/70" />
            </span>

            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-200/60">
              Proof 001 — StatBet
            </p>
          </div>

          <p
            className={`text-xs font-semibold uppercase tracking-[0.24em] text-neutral-600 ${
              compact ? "mt-5" : "mt-8"
            }`}
          >
            {step.label}
          </p>

          <h1
            className={`text-balance font-semibold leading-[0.96] tracking-[-0.06em] text-white ${
              compact
                ? "text-[clamp(2.15rem,7vw,5.25rem)]"
                : "mt-5 text-[clamp(2.4rem,4.4vw,5.25rem)]"
            }`}
          >
            {step.title}
          </h1>

          <p
            className={`max-w-2xl text-neutral-400 ${
              compact
                ? "mt-4 text-[clamp(0.88rem,1vw,1.08rem)] leading-7"
                : "mt-6 text-[clamp(0.95rem,1.15vw,1.2rem)] leading-8"
            }`}
          >
            {step.description}
          </p>

          <div
            className={`rounded-2xl border border-cyan-200/15 bg-cyan-200/[0.035] ${
              compact ? "mt-5 p-4" : "mt-7 p-5"
            }`}
          >
            <div className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-200" />

              <div>
                <p className="text-sm font-semibold leading-6 text-cyan-50">
                  {step.evidence}
                </p>

                {step.context ? (
                  <p className="mt-2 text-xs leading-5 text-cyan-100/40">
                    {step.context}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          {step.src ? (
            <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-[#05080b] shadow-[0_35px_120px_rgba(0,0,0,0.82)]">
              <div className="flex items-center justify-between gap-5 border-b border-white/10 px-5 py-4">
                <div>
                  <p className="text-sm font-semibold text-white">
                    Portugal vs Croatia
                  </p>

                  <p className="mt-1 text-xs text-neutral-600">{step.label}</p>
                </div>

                <span className="shrink-0 rounded-full border border-cyan-200/15 bg-cyan-200/[0.06] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-cyan-100/70">
                  Verified Evidence
                </span>
              </div>

              <div className="relative aspect-[16/9] overflow-hidden bg-[#070b16]">
                <Image
                  src={step.src}
                  alt={step.alt ?? ""}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className={`transition-transform duration-700 ${
                    step.imageClassName ?? "object-contain"
                  }`}
                />
              </div>
            </div>
          ) : (
            <div className="rounded-[2rem] border border-white/15 bg-[#05080b] p-7 shadow-[0_35px_120px_rgba(0,0,0,0.82)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-600">
                    Product execution lifecycle
                  </p>

                  <p className="mt-3 text-lg font-semibold text-white">
                    What StatBet proves about GID Technologies
                  </p>
                </div>

                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-neutral-500">
                  Live Product
                </span>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {lifecycleStages.map((stage, index) => {
                  const Icon = stage.icon;

                  return (
                    <article
                      key={stage.label}
                      className="rounded-[1.5rem] border border-white/10 bg-black/55 p-5"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                          <Icon className="h-5 w-5 text-white" />
                        </span>

                        <span className="text-xs font-semibold text-neutral-700">
                          0{index + 1}
                        </span>
                      </div>

                      <h2 className="mt-7 text-2xl font-semibold tracking-[-0.03em] text-white">
                        {stage.label}
                      </h2>

                      <p className="mt-3 text-sm leading-6 text-neutral-500">
                        {stage.text}
                      </p>
                    </article>
                  );
                })}
              </div>

              <div className="mt-5 flex flex-col justify-between gap-4 rounded-2xl border border-cyan-200/15 bg-cyan-200/[0.035] px-5 py-4 sm:flex-row sm:items-center">
                <p className="text-sm font-semibold text-neutral-200">
                  Analysis made. Result completed. Outcome reviewed.
                </p>

                <div className="flex items-center gap-2 text-sm font-semibold text-cyan-100/70">
                  Operate
                  <ArrowRight className="h-4 w-4" />
                  Improve
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div
        className={`${compact ? "mt-5" : "mt-8"} grid gap-2 ${
          stepOrder.length === 2
            ? "sm:grid-cols-2"
            : "sm:grid-cols-2 xl:grid-cols-4"
        }`}
      >
        {stepOrder.map((stepIndex, sequenceIndex) => {
          const sequenceStep = proofSteps[stepIndex];
          const active = sequenceIndex === safeActiveStep;
          const passed = sequenceIndex < safeActiveStep;

          return (
            <div
              key={sequenceStep.label}
              className={`rounded-2xl border px-3 py-3 transition ${
                active
                  ? "border-cyan-200/30 bg-cyan-200/[0.07]"
                  : passed
                    ? "border-white/10 bg-white/[0.04]"
                    : "border-white/[0.06] bg-black/20"
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[10px] font-semibold ${
                    active
                      ? "border-cyan-200/30 text-cyan-100"
                      : "border-white/10 text-neutral-600"
                  }`}
                >
                  {String(sequenceIndex + 1).padStart(2, "0")}
                </span>

                <p
                  className={`text-[11px] font-semibold ${
                    active ? "text-white" : "text-neutral-600"
                  }`}
                >
                  {sequenceStep.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <p
        className={`text-center text-[9px] font-semibold uppercase tracking-[0.2em] text-neutral-700 ${
          compact ? "mt-2" : "mt-4"
        }`}
      >
        Advance to move through the product lifecycle
      </p>
    </section>
  );
}
