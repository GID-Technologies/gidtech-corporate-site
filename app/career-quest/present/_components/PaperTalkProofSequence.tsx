import type { LucideIcon } from "lucide-react";
import {
  Accessibility,
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  FileText,
  GraduationCap,
  Headphones,
  Landmark,
  ScanText,
  Sparkles,
  Volume2,
} from "lucide-react";
import type { PresentationMode } from "../presentation-data";

type PaperTalkProofSequenceProps = {
  activeStep: number;
  mode: PresentationMode;
};

type PaperTalkStep = {
  label: string;
  title: string;
  description: string;
  takeaway: string;
  icon: LucideIcon;
};

const paperTalkSteps: PaperTalkStep[] = [
  {
    label: "The Accessibility Gap",
    title: "Information only creates value when people can access it.",
    description:
      "Not every printed notice, letter, form, learning material or digital document is easy for every person to read and understand.",
    takeaway:
      "The document exists—but the information may still be inaccessible.",
    icon: Accessibility,
  },
  {
    label: "The PaperTalk Solution",
    title: "PaperTalk turns documents into readable and audible information.",
    description:
      "The software receives a printed or digital document, extracts its content, presents the text clearly and makes it available through spoken audio.",
    takeaway: "Document → Extracted text → Readable output → Spoken audio",
    icon: ScanText,
  },
  {
    label: "Where It Can Matter",
    title: "One accessibility layer can support many real environments.",
    description:
      "PaperTalk can create value wherever people need important written information to become easier to read, hear and understand.",
    takeaway:
      "Schools, workplaces, institutions and accessibility programmes can begin with one practical use case.",
    icon: Sparkles,
  },
];

const workflow = [
  {
    number: "01",
    label: "Document",
    description: "Upload, capture or provide the printed or digital material.",
    icon: FileText,
  },
  {
    number: "02",
    label: "Extract",
    description: "Recognise and interpret the written content.",
    icon: ScanText,
  },
  {
    number: "03",
    label: "Read",
    description: "Present the extracted information in a clearer format.",
    icon: BookOpen,
  },
  {
    number: "04",
    label: "Listen",
    description: "Make the same information available through spoken audio.",
    icon: Volume2,
  },
];

const useCases = [
  {
    title: "Schools & Learning",
    description:
      "Make notices, assignments, handouts and educational materials easier to access.",
    icon: GraduationCap,
  },
  {
    title: "Workplaces",
    description:
      "Support staff who need written documents presented through a clearer or audible format.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Public Institutions",
    description:
      "Improve access to forms, notices, instructions and public information.",
    icon: Landmark,
  },
  {
    title: "Churches & Organisations",
    description:
      "Make programmes, announcements and important documents easier to hear and understand.",
    icon: Building2,
  },
  {
    title: "Personal Documents",
    description:
      "Help people access letters, statements and everyday printed information.",
    icon: Headphones,
  },
  {
    title: "Accessibility Programmes",
    description:
      "Add document-reading support to wider inclusion and accessibility initiatives.",
    icon: Accessibility,
  },
];

export default function PaperTalkProofSequence({
  activeStep,
}: PaperTalkProofSequenceProps) {
  const safeStep = Math.min(activeStep, paperTalkSteps.length - 1);
  const step = paperTalkSteps[safeStep];
  const StepIcon = step.icon;

  return (
    <section className="w-full max-w-[1450px]">
      <div className="grid gap-8 lg:grid-cols-[0.48fr_1.52fr] lg:items-center xl:gap-12">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-200/15 bg-cyan-200/[0.045]">
              <StepIcon className="h-5 w-5 text-cyan-100/70" />
            </span>

            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-200/60">
              PaperTalk
            </p>
          </div>

          <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-600">
            {step.label}
          </p>

          <h1 className="mt-4 max-w-[11ch] text-balance text-[clamp(2.6rem,4.5vw,5.4rem)] font-semibold leading-[0.94] tracking-[-0.065em] text-white">
            {step.title}
          </h1>

          <p className="mt-6 max-w-xl text-[clamp(0.92rem,1.05vw,1.12rem)] leading-7 text-neutral-400">
            {step.description}
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-200/15 bg-cyan-200/[0.035] p-4">
            <p className="text-xs font-semibold leading-6 text-cyan-50">
              {step.takeaway}
            </p>
          </div>
        </div>

        <div>
          {safeStep === 0 ? <AccessibilityProblemVisual /> : null}
          {safeStep === 1 ? <PaperTalkWorkflowVisual /> : null}
          {safeStep === 2 ? <PaperTalkUseCasesVisual /> : null}

          <div className="mt-5 grid grid-cols-3 gap-2">
            {paperTalkSteps.map((sequenceStep, index) => (
              <div
                key={sequenceStep.label}
                className={`rounded-xl border px-3 py-2 text-center text-[8px] font-semibold uppercase tracking-[0.11em] transition ${
                  index === safeStep
                    ? "border-cyan-200/25 bg-cyan-200/[0.07] text-cyan-100"
                    : "border-white/10 bg-white/[0.02] text-neutral-600"
                }`}
              >
                {sequenceStep.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AccessibilityProblemVisual() {
  const documents = [
    "School notice",
    "Medical instruction",
    "Workplace document",
    "Public form",
  ];

  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-6 shadow-[0_35px_120px_rgba(0,0,0,0.75)]">
      <div className="text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-600">
          The information-access problem
        </p>

        <h2 className="mx-auto mt-4 max-w-4xl text-balance text-3xl font-semibold tracking-[-0.045em] text-white xl:text-4xl">
          A document can contain important information and still remain out of
          reach.
        </h2>
      </div>

      <div className="mt-7 grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
          {documents.map((document) => (
            <div
              key={document}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/50 p-4"
            >
              <FileText className="h-4 w-4 shrink-0 text-neutral-500" />

              <p className="text-sm font-semibold text-neutral-300">
                {document}
              </p>
            </div>
          ))}
        </div>

        <div className="hidden flex-col items-center gap-3 md:flex">
          <ArrowRight className="h-6 w-6 text-neutral-700" />

          <span className="rounded-full border border-red-300/15 bg-red-300/[0.035] px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.13em] text-red-100/55">
            Access barrier
          </span>
        </div>

        <div className="rounded-[1.6rem] border border-cyan-200/15 bg-cyan-200/[0.035] p-7">
          <Accessibility className="h-8 w-8 text-cyan-100/70" />

          <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-600">
            The person still needs
          </p>

          <div className="mt-4 grid gap-3">
            {[
              "Clearer readable information",
              "Spoken access to the document",
              "A simpler way to understand the content",
            ].map((need) => (
              <div
                key={need}
                className="rounded-xl border border-white/10 bg-black/35 px-4 py-3 text-sm font-semibold text-white"
              >
                {need}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PaperTalkWorkflowVisual() {
  return (
    <div className="rounded-[2rem] border border-cyan-200/15 bg-cyan-200/[0.025] p-6 shadow-[0_35px_120px_rgba(0,0,0,0.75)]">
      <div className="flex items-end justify-between gap-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-200/55">
            The PaperTalk workflow
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-white xl:text-4xl">
            One document. Two ways to access its information.
          </h2>
        </div>

        <Headphones className="hidden h-8 w-8 text-cyan-100/60 sm:block" />
      </div>

      <div className="mt-7 grid gap-3 md:grid-cols-4">
        {workflow.map((item, index) => {
          const Icon = item.icon;

          return (
            <article
              key={item.label}
              className="relative rounded-[1.5rem] border border-white/10 bg-black/50 p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035]">
                  <Icon className="h-5 w-5 text-white" />
                </span>

                <span className="text-[10px] font-semibold text-neutral-700">
                  {item.number}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-semibold text-white">
                {item.label}
              </h3>

              <p className="mt-3 text-xs leading-6 text-neutral-500">
                {item.description}
              </p>

              {index < workflow.length - 1 ? (
                <ArrowRight className="absolute -right-5 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 text-neutral-700 md:block" />
              ) : null}
            </article>
          );
        })}
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
          <BookOpen className="h-5 w-5 text-cyan-100/60" />

          <h3 className="mt-4 text-lg font-semibold text-white">
            Read the information
          </h3>

          <p className="mt-2 text-sm leading-6 text-neutral-500">
            The extracted content becomes available through a clearer written
            output.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
          <Volume2 className="h-5 w-5 text-cyan-100/60" />

          <h3 className="mt-4 text-lg font-semibold text-white">
            Hear the information
          </h3>

          <p className="mt-2 text-sm leading-6 text-neutral-500">
            The same document can be delivered through spoken audio.
          </p>
        </div>
      </div>
    </div>
  );
}

function PaperTalkUseCasesVisual() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-6 shadow-[0_35px_120px_rgba(0,0,0,0.75)]">
      <div className="text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-200/55">
          Practical market opportunities
        </p>

        <h2 className="mx-auto mt-4 max-w-4xl text-balance text-3xl font-semibold tracking-[-0.045em] text-white xl:text-4xl">
          Where written information matters, accessibility matters too.
        </h2>
      </div>

      <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {useCases.map((useCase) => {
          const Icon = useCase.icon;

          return (
            <article
              key={useCase.title}
              className="rounded-2xl border border-white/10 bg-black/50 p-5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035]">
                <Icon className="h-4 w-4 text-cyan-100/65" />
              </span>

              <h3 className="mt-5 text-base font-semibold text-white">
                {useCase.title}
              </h3>

              <p className="mt-2 text-xs leading-6 text-neutral-500">
                {useCase.description}
              </p>
            </article>
          );
        })}
      </div>

      <div className="mt-5 flex items-center justify-between gap-5 rounded-2xl border border-cyan-200/20 bg-cyan-200/[0.045] px-5 py-4">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-cyan-100/45">
            Commercial entry point
          </p>

          <p className="mt-2 text-sm font-semibold text-white">
            Begin with one document type, one user group and one practical
            environment.
          </p>
        </div>

        <ArrowRight className="h-5 w-5 shrink-0 text-cyan-100/60" />
      </div>
    </div>
  );
}
