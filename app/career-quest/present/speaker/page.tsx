"use client";

import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";

type SpeakerScene = {
  number: string;
  label: string;
  goal: string;
  cues: string[];
  land: string;
  next: string;
};

const speakerScenes: SpeakerScene[] = [
  {
    number: "01",
    label: "GID Technologies",
    goal: "Establish what GID exists to change.",
    cues: [
      "Technology should change what a business can do.",
      "Easier to find.",
      "Easier to operate.",
      "Easier to understand.",
      "Better prepared to grow.",
    ],
    land: "That is the kind of practical technology GID Technologies is building.",
    next: "Invite the audience into the live experience.",
  },
  {
    number: "02",
    label: "Live Experience",
    goal: "Get the audience onto the GID page early.",
    cues: [
      "Do not just watch us.",
      "Scan once.",
      "Keep the page open.",
      "Explore GID and the products while we speak.",
      "Keep GID after the presentation.",
    ],
    land: "You can follow the company while we continue from here.",
    next: "Move into the problems organisations face.",
  },
  {
    number: "03",
    label: "Business Reality",
    goal: "Make ordinary operational problems feel expensive.",
    cues: [
      "Enquiries disappear.",
      "Records scatter.",
      "Orders become manual.",
      "Stock becomes uncertain.",
      "Decisions depend on assumptions.",
      "These problems combine.",
    ],
    land: "The problem is rarely one tool. It is the absence of a clear system connecting the work.",
    next: "Explain how GID approaches those problems.",
  },
  {
    number: "04",
    label: "How GID Operates",
    goal: "Make the two-arm GID model easy to understand.",
    cues: [
      "Arm one: organisations hire GID.",
      "Start with their immediate problem.",
      "Visibility, systems, automation, platforms.",
      "Arm two: GID-owned products.",
      "Start with wider problems worth building around.",
    ],
    land: "Businesses can hire GID now while GID continues building products for wider markets.",
    next: "Prove that GID can actually execute.",
  },
  {
    number: "05",
    label: "StatBet",
    goal: "Use StatBet only as execution proof.",
    cues: [
      "Idea became product.",
      "Product became public.",
      "Structured analysis exists before outcomes.",
      "Completed outcomes return for review.",
      "Operate, learn, improve.",
    ],
    land: "StatBet matters here because it proves GID can take software beyond the idea stage.",
    next: "Show what GID can do for business operations.",
  },
  {
    number: "06",
    label: "GID Platform",
    goal: "Make business transformation tangible.",
    cues: [
      "Before: chats, paper, spreadsheets, memory.",
      "Connect customers.",
      "Connect orders.",
      "Connect inventory and invoices.",
      "Different organisations need different workflows.",
      "Do not replace everything at once.",
    ],
    land: "Start with the operational problem costing the organisation the most.",
    next: "Move from organised information to better decisions.",
  },
  {
    number: "07",
    label: "GID Business AI",
    goal: "Show what intelligence changes for an owner.",
    cues: [
      "Information already exists.",
      "But what deserves attention?",
      "Overdue invoices.",
      "Low inventory.",
      "Delayed operations.",
      "Opportunities.",
      "Recommended priorities.",
    ],
    land: "The goal is earlier warning, clearer priorities and faster decisions—not another chatbot.",
    next: "Show another type of transformation: accessibility.",
  },
  {
    number: "08",
    label: "PaperTalk",
    goal: "Explain PaperTalk as accessibility transformation.",
    cues: [
      "Document exists.",
      "Information may still be inaccessible.",
      "Document enters PaperTalk.",
      "Extract the content.",
      "Read it.",
      "Hear it.",
      "Start with one real use case.",
    ],
    land: "One document type, one user group and one real environment is enough to begin proving value.",
    next: "Turn attention into a GID conversation.",
  },
  {
    number: "09",
    label: "Work With GID",
    goal: "Make approaching GID feel simple.",
    cues: [
      "Do not ask them to diagnose the software.",
      "Ask for the problem.",
      "Visibility problem?",
      "Operations problem?",
      "Repeated manual work?",
      "Decision clarity?",
      "Something specialised?",
      "Scan now.",
    ],
    land: "You do not need to know what software you need. Start with the problem.",
    next: "Pause for scanning, then close cleanly.",
  },
  {
    number: "10",
    label: "Closing",
    goal: "Finish with one sentence people remember.",
    cues: [
      "Visibility.",
      "Operations.",
      "Automation.",
      "Intelligence.",
      "Accessibility.",
      "Practical systems.",
      "Do not over-explain.",
    ],
    land: "Bring us one problem worth solving.",
    next: "Stop. Hand over or finish.",
  },
];

export default function CareerQuestSpeakerPage() {
  const [sceneIndex, setSceneIndex] = useState(0);

  const scene = speakerScenes[sceneIndex];
  const finalIndex = speakerScenes.length - 1;

  function previous() {
    setSceneIndex((current) => Math.max(0, current - 1));
  }

  function next() {
    setSceneIndex((current) => Math.min(finalIndex, current + 1));
  }

  function reset() {
    setSceneIndex(0);
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [sceneIndex]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (
        event.key === "ArrowRight" ||
        event.key === "PageDown" ||
        event.code === "Space"
      ) {
        event.preventDefault();
        next();
      }

      if (event.key === "ArrowLeft" || event.key === "PageUp") {
        event.preventDefault();
        previous();
      }

      if (event.key === "Home") {
        event.preventDefault();
        reset();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const progress = ((sceneIndex + 1) / speakerScenes.length) * 100;

  return (
    <main className="min-h-screen bg-[#020307] pb-32 text-white">
      <div className="fixed inset-x-0 top-0 z-50 h-1 bg-white/5">
        <div
          className="h-full bg-white transition-[width] duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <section className="mx-auto max-w-3xl px-5 pb-12 pt-10 md:px-8 md:pt-16">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-200/55">
              Career Quest · Speaker Mode
            </p>

            <p className="mt-2 text-xs text-neutral-600">
              {scene.number} / {String(speakerScenes.length).padStart(2, "0")}
            </p>
          </div>

          <button
            type="button"
            onClick={reset}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-neutral-500"
            aria-label="Return to first scene"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>

        <h1 className="mt-8 text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
          {scene.label}
        </h1>

        <div className="mt-8 rounded-[1.6rem] border border-cyan-200/15 bg-cyan-200/[0.035] p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-100/45">
            Goal
          </p>

          <p className="mt-3 text-lg font-semibold leading-7 text-white">
            {scene.goal}
          </p>
        </div>

        <div className="mt-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-600">
            Talking anchors
          </p>

          <div className="mt-4 grid gap-3">
            {scene.cues.map((cue, index) => (
              <div
                key={cue}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-[10px] font-semibold text-neutral-600">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-base font-semibold leading-7 text-neutral-200">
                  {cue}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-[1.6rem] border border-white/15 bg-white/[0.05] p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Land this
          </p>

          <p className="mt-3 text-xl font-semibold leading-8 text-white">
            {scene.land}
          </p>
        </div>

        <div className="mt-5 rounded-[1.4rem] border border-white/10 bg-black/40 p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-600">
            Then
          </p>

          <p className="mt-2 text-sm font-semibold leading-6 text-neutral-400">
            {scene.next}
          </p>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-black/90 px-4 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-3xl items-center gap-3">
          <button
            type="button"
            disabled={sceneIndex === 0}
            onClick={previous}
            className="flex h-14 flex-1 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.035] font-semibold text-neutral-300 disabled:opacity-25"
          >
            <ArrowLeft className="h-4 w-4" />
            Previous
          </button>

          <button
            type="button"
            disabled={sceneIndex === finalIndex}
            onClick={next}
            className="flex h-14 flex-[1.4] items-center justify-center gap-2 rounded-2xl bg-white font-semibold text-black disabled:opacity-25"
          >
            Next
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </main>
  );
}
