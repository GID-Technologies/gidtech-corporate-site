import {
  Accessibility,
  CheckCircle2,
  FileText,
  ScanText,
  Upload,
  Volume2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { PresentationMode } from "../presentation-data";

type PaperTalkProofSequenceProps = {
  activeStep: number;
  mode: PresentationMode;
};

type PaperTalkStep = {
  label: string;
  title: string;
  description: string;
  evidence: string;
  icon: LucideIcon;
};

const proofSteps: PaperTalkStep[] = [
  {
    label: "The Accessibility Problem",
    title: "Printed information is not equally accessible to everyone.",
    description:
      "Important information still arrives through printed pages, notices, letters, forms and documents. PaperTalk explores how that information can be converted into an audible experience.",
    evidence: "Printed document → accessible audio",
    icon: Accessibility,
  },
  {
    label: "Prototype Workflow",
    title: "A physical document enters a software reading system.",
    description:
      "The intended prototype workflow is controlled and understandable: provide the document, recognise its text, display the extracted content and make it available through speech.",
    evidence: "Input → Extract → Display → Read Aloud",
    icon: ScanText,
  },
  {
    label: "Current Product Status",
    title:
      "PaperTalk has moved beyond an idea—but it is not a finished product.",
    description:
      "The project is being positioned honestly as a working software prototype in active development. The current goal is to prove the useful task before presenting it as a complete public product.",
    evidence: "Working Software Prototype · Active Development",
    icon: CheckCircle2,
  },
];

const workflow = [
  {
    number: "01",
    label: "Document Input",
    text: "Upload or capture a clear prepared document.",
    icon: Upload,
  },
  {
    number: "02",
    label: "Text Recognition",
    text: "Interpret and extract the printed content.",
    icon: ScanText,
  },
  {
    number: "03",
    label: "Readable Output",
    text: "Display the recognised text clearly.",
    icon: FileText,
  },
  {
    number: "04",
    label: "Read Aloud",
    text: "Convert the extracted content into speech.",
    icon: Volume2,
  },
];

// const fallbackLayers = [
//   // {
//   //   label: "Live Prototype",
//   //   text: "The intended demonstration running locally.",
//   //   icon: Monitor,
//   // },
//   // {
//   //   label: "Recorded Demo",
//   //   text: "A controlled walkthrough stored on the laptop.",
//   //   icon: Play,
//   // },
//   // {
//   //   label: "Static Steps",
//   //   text: "Screenshots showing every important stage.",
//   //   icon: FileText,
//   // },
//   // {
//   //   label: "Saved Output",
//   //   text: "Extracted text and audio available locally.",
//   //   icon: Volume2,
//   // },
// ];

export default function PaperTalkProofSequence({
  activeStep,
  mode,
}: PaperTalkProofSequenceProps) {
  const stepOrder = [0, 1, 2];

  const safeActiveStep = Math.min(activeStep, stepOrder.length - 1);

  const actualStepIndex = stepOrder[safeActiveStep];
  const step = proofSteps[actualStepIndex];
  const StepIcon = step.icon;

  return (
    <section className="w-full max-w-7xl">
      <div className="grid gap-8 lg:grid-cols-[0.62fr_1.38fr] lg:items-center xl:gap-12">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-200/15 bg-cyan-200/[0.04]">
              <StepIcon className="h-4 w-4 text-cyan-100/70" />
            </span>

            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-200/60">
              Proof 003 — PaperTalk
            </p>
          </div>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-neutral-600">
            {step.label}
          </p>

          <h1 className="mt-5 text-balance text-[clamp(2.4rem,4.5vw,5.35rem)] font-semibold leading-[0.96] tracking-[-0.06em] text-white">
            {step.title}
          </h1>

          <p className="mt-6 max-w-2xl text-[clamp(0.95rem,1.15vw,1.2rem)] leading-8 text-neutral-400">
            {step.description}
          </p>

          <div className="mt-7 rounded-2xl border border-cyan-200/15 bg-cyan-200/[0.035] p-5">
            <div className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-200" />

              <p className="text-sm font-semibold leading-6 text-cyan-50">
                {step.evidence}
              </p>
            </div>
          </div>
        </div>

        <div>
          {actualStepIndex === 0 ? <ProblemVisual /> : null}

          {actualStepIndex === 1 ? <WorkflowVisual /> : null}

          {actualStepIndex === 2 ? <StatusVisual /> : null}
        </div>
      </div>

      <div className="mt-8 grid gap-2 sm:grid-cols-3">
        {stepOrder.map((stepIndex, sequenceIndex) => {
          const sequenceStep = proofSteps[stepIndex];
          const active = sequenceIndex === safeActiveStep;
          const passed = sequenceIndex < safeActiveStep;

          return (
            <div
              key={sequenceStep.label}
              className={`rounded-2xl border px-4 py-3 transition ${
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

      <p className="mt-4 text-center text-[9px] font-semibold uppercase tracking-[0.2em] text-neutral-700">
        Space or right arrow advances the prototype story
      </p>
    </section>
  );
}

function ProblemVisual() {
  return (
    <div className="grid gap-5 rounded-[2rem] border border-white/15 bg-[#05080b] p-7 shadow-[0_35px_120px_rgba(0,0,0,0.82)] md:grid-cols-[0.9fr_1.1fr]">
      <div className="relative min-h-[350px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#f1eee5] p-8 text-[#242424]">
        <div className="absolute right-6 top-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-black/35">
          Printed document
        </div>

        <div className="mt-12 h-5 w-3/4 rounded-full bg-black/75" />

        <div className="mt-8 space-y-4">
          {["w-full", "w-11/12", "w-full", "w-4/5", "w-full", "w-10/12"].map(
            (width, index) => (
              <div
                key={index}
                className={`h-2.5 rounded-full bg-black/20 ${width}`}
              />
            ),
          )}
        </div>

        <div className="mt-10 rounded-xl border border-black/10 bg-black/[0.04] p-4">
          <div className="h-2.5 w-full rounded-full bg-black/15" />
          <div className="mt-3 h-2.5 w-3/4 rounded-full bg-black/15" />
        </div>
      </div>

      <div className="flex flex-col justify-center rounded-[1.5rem] border border-cyan-200/15 bg-cyan-200/[0.035] p-7">
        <Accessibility className="h-9 w-9 text-cyan-100/70" />

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-600">
          The product question
        </p>

        <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] text-white">
          Can printed information become easier to access through sound?
        </h2>

        <p className="mt-5 leading-7 text-neutral-500">
          PaperTalk begins with that practical task—not with a promise of a
          finished device.
        </p>
      </div>
    </div>
  );
}

function WorkflowVisual() {
  return (
    <div className="rounded-[2rem] border border-white/15 bg-[#05080b] p-7 shadow-[0_35px_120px_rgba(0,0,0,0.82)]">
      <div className="flex items-center justify-between gap-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-600">
            Prototype workflow
          </p>

          <p className="mt-3 text-lg font-semibold text-white">
            One controlled document. One clear result.
          </p>
        </div>

        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-neutral-500">
          Software Prototype
        </span>
      </div>

      <div className="mt-7 grid gap-3 sm:grid-cols-2">
        {workflow.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.label}
              className="rounded-[1.5rem] border border-white/10 bg-black/55 p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                  <Icon className="h-5 w-5 text-white" />
                </span>

                <span className="text-xs font-semibold text-neutral-700">
                  {item.number}
                </span>
              </div>

              <h2 className="mt-7 text-xl font-semibold text-white">
                {item.label}
              </h2>

              <p className="mt-3 text-sm leading-6 text-neutral-500">
                {item.text}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function StatusVisual() {
  return (
    <div className="rounded-[2rem] border border-white/15 bg-[#05080b] p-7 shadow-[0_35px_120px_rgba(0,0,0,0.82)]">
      <div className="rounded-[1.75rem] border border-cyan-200/20 bg-cyan-200/[0.04] p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/50">
          Current product status
        </p>

        <h2 className="mt-5 text-[clamp(2.2rem,4vw,4.5rem)] font-semibold leading-none tracking-[-0.055em] text-white">
          Working Software Prototype
        </h2>

        <p className="mt-5 text-xl font-medium text-neutral-400">
          Active Development
        </p>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {[
          ["Proven", "A useful software task can be demonstrated."],
          [
            "Developing",
            "The workflow and product experience are still being refined.",
          ],
          [
            "Not Claimed",
            "PaperTalk is not being presented as launched or finished.",
          ],
        ].map(([label, text]) => (
          <article
            key={label}
            className="rounded-2xl border border-white/10 bg-black/50 p-5"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-600">
              {label}
            </p>

            <p className="mt-4 text-sm leading-6 text-neutral-400">{text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

// function FallbackVisual() {
//   return (
//     <div className="rounded-[2rem] border border-white/15 bg-[#05080b] p-7 shadow-[0_35px_120px_rgba(0,0,0,0.82)]">
//       <div>
//         <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-600">
//           Stage reliability system
//         </p>

//         <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
//           The product story survives a technical failure.
//         </h2>
//       </div>

//       <div className="mt-7 grid gap-3 sm:grid-cols-2">
//         {fallbackLayers.map((layer, index) => {
//           const Icon = layer.icon;

//           return (
//             <article
//               key={layer.label}
//               className="rounded-[1.5rem] border border-white/10 bg-black/55 p-5"
//             >
//               <div className="flex items-start justify-between gap-4">
//                 <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
//                   <Icon className="h-5 w-5 text-white" />
//                 </span>

//                 <span className="text-xs font-semibold text-neutral-700">
//                   Layer {index + 1}
//                 </span>
//               </div>

//               <h3 className="mt-6 text-xl font-semibold text-white">
//                 {layer.label}
//               </h3>

//               <p className="mt-3 text-sm leading-6 text-neutral-500">
//                 {layer.text}
//               </p>
//             </article>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
