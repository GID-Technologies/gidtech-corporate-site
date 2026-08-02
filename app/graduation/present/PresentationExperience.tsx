"use client";

import Image from "next/image";
import StatBetProofSequence from "./_components/StatBetProofSequence";
import {
  ArrowLeft,
  ArrowRight,
  Command,
  Expand,
  Home,
  Minimize2,
  RotateCcw,
  X,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  presentationModeDetails,
  presentationScenes,
  type PresentationMode,
  type PresentationSceneId,
} from "./presentation-data";

type PresentationExperienceProps = {
  initialMode: PresentationMode;
};

const shortcutSceneIndexes: Record<string, number> = {
  "1": 0,
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "0": 7,
};

const participationOptions = [
  "I need a digital solution",
  "I want to support GID",
  "I can contribute a skill",
  "I can make an introduction",
  "I want to test a product",
  "I want to follow the journey",
];

function getSceneFragmentCount(
  sceneId: PresentationSceneId,
  mode: PresentationMode,
) {
  if (sceneId === "statbet-proof") {
    return mode === "core" ? 3 : 6;
  }

  return 1;
}

export default function PresentationExperience({
  initialMode,
}: PresentationExperienceProps) {
  const presentationRootRef = useRef<HTMLDivElement | null>(null);

  const [sceneIndex, setSceneIndex] = useState(0);
  const [fragmentIndex, setFragmentIndex] = useState(0);
  const [sceneRevision, setSceneRevision] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mode, setMode] = useState<PresentationMode>(initialMode);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const scene = presentationScenes[sceneIndex];
  const finalSceneIndex = presentationScenes.length - 1;

  const goToScene = useCallback((index: number) => {
    const safeIndex = Math.max(
      0,
      Math.min(index, presentationScenes.length - 1),
    );

    setSceneIndex(safeIndex);
    setFragmentIndex(0);
    setSceneRevision((current) => current + 1);
    setMenuOpen(false);
  }, []);

  const nextScene = useCallback(() => {
    const currentScene = presentationScenes[sceneIndex];

    const fragmentCount = getSceneFragmentCount(currentScene.id, mode);

    if (fragmentIndex < fragmentCount - 1) {
      setFragmentIndex((current) => current + 1);
      setSceneRevision((current) => current + 1);
      return;
    }

    if (sceneIndex >= finalSceneIndex) {
      return;
    }

    setSceneIndex((current) => current + 1);
    setFragmentIndex(0);
    setSceneRevision((current) => current + 1);
  }, [finalSceneIndex, fragmentIndex, mode, sceneIndex]);

  const previousScene = useCallback(() => {
    if (fragmentIndex > 0) {
      setFragmentIndex((current) => current - 1);
      setSceneRevision((current) => current + 1);
      return;
    }

    if (sceneIndex === 0) {
      return;
    }

    const previousSceneIndex = sceneIndex - 1;
    const previousSceneData = presentationScenes[previousSceneIndex];

    const previousFragmentCount = getSceneFragmentCount(
      previousSceneData.id,
      mode,
    );

    setSceneIndex(previousSceneIndex);
    setFragmentIndex(previousFragmentCount - 1);
    setSceneRevision((current) => current + 1);
  }, [fragmentIndex, mode, sceneIndex]);

  const restartScene = useCallback(() => {
    setFragmentIndex(0);
    setSceneRevision((current) => current + 1);
  }, []);

  const toggleFullscreen = useCallback(async () => {
    try {
      if (!document.fullscreenElement) {
        await presentationRootRef.current?.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch {
      // Fullscreen may be blocked until the user interacts.
    }
  }, []);

  //not sure position
  useEffect(() => {
    const fragmentCount = getSceneFragmentCount(scene.id, mode);

    setFragmentIndex((current) => Math.min(current, fragmentCount - 1));
  }, [mode, scene.id]);

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, []);

  useEffect(() => {
    function handleFullscreenChange() {
      setIsFullscreen(Boolean(document.fullscreenElement));
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const target = event.target;

      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement ||
        (target instanceof HTMLElement && target.isContentEditable)
      ) {
        return;
      }

      const key = event.key.toLowerCase();

      if (key === "escape") {
        setMenuOpen((current) => !current);
        return;
      }

      if (key === "f") {
        event.preventDefault();
        void toggleFullscreen();
        return;
      }

      if (key === "r") {
        event.preventDefault();
        restartScene();
        return;
      }

      if (shortcutSceneIndexes[event.key] !== undefined) {
        event.preventDefault();
        goToScene(shortcutSceneIndexes[event.key]);
        return;
      }

      if (menuOpen) {
        return;
      }

      if (
        event.key === "ArrowRight" ||
        event.key === "PageDown" ||
        event.code === "Space"
      ) {
        event.preventDefault();
        nextScene();
        return;
      }

      if (event.key === "ArrowLeft" || event.key === "PageUp") {
        event.preventDefault();
        previousScene();
        return;
      }

      if (event.key === "Home") {
        event.preventDefault();
        goToScene(0);
        return;
      }

      if (event.key === "End") {
        event.preventDefault();
        goToScene(finalSceneIndex);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    finalSceneIndex,
    goToScene,
    menuOpen,
    nextScene,
    previousScene,
    restartScene,
    toggleFullscreen,
  ]);

  const progress = ((sceneIndex + 1) / presentationScenes.length) * 100;

  return (
    <div
      ref={presentationRootRef}
      className="presentation-root fixed inset-0 z-[20000] overflow-hidden bg-[#020307] text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(18,214,255,0.11),transparent_31%),radial-gradient(circle_at_82%_84%,rgba(255,255,255,0.07),transparent_30%)]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="pointer-events-none absolute left-8 top-6 z-30 hidden items-center gap-3 xl:flex">
        <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-white/15 bg-white/[0.04]">
          <Image
            src="/brand/GID Logo white.svg"
            alt=""
            width={36}
            height={36}
            className="h-8 w-8 scale-[1.8] object-contain"
          />
        </div>

        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-neutral-300">
            GID Live Experience
          </p>
          <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-neutral-600">
            Aptech Graduation 2026
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute right-8 top-7 z-30 hidden items-center gap-3 xl:flex">
        <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
          {presentationModeDetails[mode].label}
        </span>

        <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-600">
          {presentationModeDetails[mode].timing}
        </span>
      </div>

      <main
        key={`${scene.id}-${sceneRevision}`}
        aria-live="polite"
        className="presentation-enter relative z-10 flex h-full w-full items-center justify-center px-[clamp(1.5rem,5vw,6rem)] pb-24 pt-20"
      >
        {renderScene(scene.id, fragmentIndex, mode)}
      </main>

      <button
        type="button"
        aria-label="Previous scene"
        disabled={sceneIndex === 0}
        onClick={previousScene}
        className="absolute bottom-9 left-7 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/60 text-neutral-400 transition hover:border-white/25 hover:text-white disabled:cursor-not-allowed disabled:opacity-20 md:left-10"
      >
        <ArrowLeft className="h-4 w-4" />
      </button>

      <button
        type="button"
        aria-label="Open presentation controls"
        onClick={() => setMenuOpen(true)}
        className="absolute bottom-9 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-black/65 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-400 transition hover:border-white/25 hover:text-white"
      >
        <Command className="h-3.5 w-3.5" />
        Controls
      </button>

      <button
        type="button"
        aria-label="Next scene"
        disabled={sceneIndex === finalSceneIndex}
        onClick={nextScene}
        className="absolute bottom-9 right-7 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/60 text-neutral-400 transition hover:border-white/25 hover:text-white disabled:cursor-not-allowed disabled:opacity-20 md:right-10"
      >
        <ArrowRight className="h-4 w-4" />
      </button>

      <div className="absolute inset-x-0 bottom-0 z-30 h-1 bg-white/[0.04]">
        <div
          className="h-full bg-white transition-[width] duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="pointer-events-none absolute bottom-10 right-24 z-30 hidden items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-neutral-600 md:flex">
        <span>{scene.number}</span>
        <span className="h-px w-8 bg-white/15" />
        <span>{String(presentationScenes.length).padStart(2, "0")}</span>
      </div>

      {menuOpen ? (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 p-5 backdrop-blur-xl">
          <div className="w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/15 bg-[#050608] shadow-[0_40px_140px_rgba(0,0,0,0.95)]">
            <div className="flex items-start justify-between border-b border-white/10 p-6 md:p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
                  Presentation command
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">
                  Control the live experience.
                </h2>
              </div>

              <button
                type="button"
                aria-label="Close presentation controls"
                onClick={() => setMenuOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-neutral-400 transition hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid lg:grid-cols-[1.4fr_0.6fr]">
              <div className="border-b border-white/10 p-5 md:p-7 lg:border-b-0 lg:border-r">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-600">
                  Jump to scene
                </p>

                <div className="grid gap-2 sm:grid-cols-2">
                  {presentationScenes.map((menuScene, index) => (
                    <button
                      key={menuScene.id}
                      type="button"
                      onClick={() => goToScene(index)}
                      className={`flex items-center justify-between rounded-2xl border px-4 py-4 text-left transition ${
                        index === sceneIndex
                          ? "border-white bg-white text-black"
                          : "border-white/10 bg-white/[0.025] hover:bg-white/[0.07]"
                      }`}
                    >
                      <div>
                        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] opacity-50">
                          {menuScene.number} · {menuScene.label}
                        </p>

                        <p className="mt-2 text-sm font-semibold">
                          {menuScene.title}
                        </p>
                      </div>

                      {menuScene.shortcut ? (
                        <span className="ml-4 rounded-lg border border-current/15 px-2 py-1 text-[9px] opacity-50">
                          {menuScene.shortcut}
                        </span>
                      ) : null}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-5 md:p-7">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-600">
                  Presentation mode
                </p>

                <div className="grid gap-2">
                  {(
                    ["core", "recommended", "extended"] as PresentationMode[]
                  ).map((presentationMode) => {
                    const detail = presentationModeDetails[presentationMode];

                    return (
                      <button
                        key={presentationMode}
                        type="button"
                        onClick={() => setMode(presentationMode)}
                        className={`rounded-2xl border p-4 text-left transition ${
                          mode === presentationMode
                            ? "border-white/30 bg-white/[0.08]"
                            : "border-white/10 bg-white/[0.025] hover:bg-white/[0.06]"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold">
                            {detail.label}
                          </span>

                          <span className="text-[9px] uppercase tracking-[0.14em] text-neutral-600">
                            {detail.timing}
                          </span>
                        </div>

                        <p className="mt-3 text-xs leading-5 text-neutral-500">
                          {detail.description}
                        </p>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6 grid gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      restartScene();
                      setMenuOpen(false);
                    }}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm font-semibold transition hover:bg-white/[0.07]"
                  >
                    Restart Current Scene
                    <RotateCcw className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => goToScene(0)}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm font-semibold transition hover:bg-white/[0.07]"
                  >
                    Return to Opening
                    <Home className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => goToScene(finalSceneIndex)}
                    className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
                  >
                    Emergency Final Screen
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => void toggleFullscreen()}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm font-semibold transition hover:bg-white/[0.07]"
                  >
                    {isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}

                    {isFullscreen ? (
                      <Minimize2 className="h-4 w-4" />
                    ) : (
                      <Expand className="h-4 w-4" />
                    )}
                  </button>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-black/50 p-4">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-neutral-600">
                    Keyboard
                  </p>

                  <p className="mt-3 text-xs leading-6 text-neutral-500">
                    ← previous · → or space next · Esc menu · F fullscreen · R
                    restart · 0 final screen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function renderScene(
  sceneId: PresentationSceneId,
  fragmentIndex: number,
  mode: PresentationMode,
) {
  switch (sceneId) {
    case "opening":
      return <OpeningScene />;

    case "problem":
      return <ProblemScene />;

    case "gid-model":
      return <GidModelScene />;

    case "statbet-proof":
      return <StatBetProofSequence activeStep={fragmentIndex} mode={mode} />;

    case "papertalk-proof":
      return <PaperTalkScene />;

    case "company-position":
      return <CompanyPositionScene />;

    case "gid-pulse":
      return <PulseScene />;

    case "closing":
      return <ClosingScene />;
  }
}

function SceneHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-200/60">
        {eyebrow}
      </p>

      <h1 className="mt-5 max-w-6xl text-balance text-[clamp(2.7rem,5.7vw,6.8rem)] font-semibold leading-[0.95] tracking-[-0.06em]">
        {title}
      </h1>

      {description ? (
        <p className="mt-7 max-w-3xl text-[clamp(1rem,1.45vw,1.5rem)] leading-8 text-neutral-400">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function OpeningScene() {
  return (
    <section className="flex w-full max-w-7xl flex-col items-center text-center">
      <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.04] shadow-[0_0_80px_rgba(45,212,255,0.08)]">
        <Image
          src="/brand/GID Logo white.svg"
          alt="GID Technologies"
          width={96}
          height={96}
          priority
          className="h-20 w-20 scale-[1.8] object-contain"
        />
      </div>

      <p className="mt-10 text-[clamp(1rem,1.6vw,1.45rem)] font-medium text-neutral-500">
        What are we building with what we learned?
      </p>

      <h1 className="mt-7 text-[clamp(4rem,10vw,10rem)] font-semibold leading-none tracking-[-0.075em]">
        GID Technologies
      </h1>

      <p className="mt-8 max-w-4xl text-[clamp(1rem,1.55vw,1.5rem)] leading-8 text-neutral-400">
        An early-stage startup building practical digital solutions and
        proof-led products.
      </p>
    </section>
  );
}

function ProblemScene() {
  const problems = [
    ["Businesses", "need visibility."],
    ["People", "need access."],
    ["Ideas", "need structure."],
    ["Work", "needs better systems."],
  ];

  return (
    <section className="w-full max-w-7xl">
      <SceneHeading
        eyebrow="The opportunity"
        title="Value exists. Systems are missing."
      />

      <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {problems.map(([subject, need], index) => (
          <article
            key={subject}
            className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-7"
          >
            <span className="text-xs font-semibold text-neutral-700">
              0{index + 1}
            </span>

            <p className="mt-10 text-2xl font-semibold">{subject}</p>

            <p className="mt-3 text-xl text-neutral-500">{need}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function GidModelScene() {
  const process = ["Discover", "Plan", "Build", "Launch", "Monitor", "Improve"];

  return (
    <section className="w-full max-w-7xl">
      <SceneHeading
        eyebrow="How GID operates"
        title="One company. Two connected operating arms."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        <article className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
            Arm 01
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em]">
            Practical Business Solutions
          </h2>

          <p className="mt-5 text-lg leading-8 text-neutral-400">
            Websites, visibility systems, custom platforms, automation and
            ongoing digital care.
          </p>
        </article>

        <article className="rounded-[2rem] border border-cyan-200/20 bg-cyan-200/[0.035] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200/50">
            Arm 02
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em]">
            GID-Owned Products
          </h2>

          <p className="mt-5 text-lg leading-8 text-neutral-400">
            StatBet, PaperTalk and future platforms validated before full
            development.
          </p>
        </article>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3 rounded-[2rem] border border-white/10 bg-black/40 p-6">
        {process.map((step, index) => (
          <div key={step} className="flex items-center gap-3">
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-neutral-300">
              {step}
            </span>

            {index < process.length - 1 ? (
              <ArrowRight className="h-4 w-4 text-neutral-700" />
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}

function StatBetScene() {
  // const lifecycle = [
  //   "Original Analysis",
  //   "Completed Result",
  //   "Outcome Review",
  //   "Performance Tracker",
  // ];
  // return (
  //   <section className="w-full max-w-7xl">
  //     <SceneHeading
  //       eyebrow="Proof 001 — StatBet"
  //       title="From idea to live public product."
  //       description="The strongest proof is the complete lifecycle: analysis made, match completed, outcome reviewed and performance recorded."
  //     />
  //     <div className="mt-12 grid gap-4 md:grid-cols-4">
  //       {lifecycle.map((step, index) => (
  //         <article
  //           key={step}
  //           className="relative overflow-hidden rounded-[1.75rem] border border-cyan-200/15 bg-[#07131a] p-6"
  //         >
  //           <span className="text-xs font-semibold text-cyan-200/40">
  //             0{index + 1}
  //           </span>
  //           <div className="mt-12 h-24 rounded-2xl border border-white/10 bg-black/50" />
  //           <p className="mt-6 text-lg font-semibold">{step}</p>
  //           {index < lifecycle.length - 1 ? (
  //             <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 text-cyan-200/30 md:block" />
  //           ) : null}
  //         </article>
  //       ))}
  //     </div>
  //     <p className="mt-8 text-center text-xl font-semibold text-neutral-300">
  //       StatBet proves GID can identify, build, launch, operate and improve.
  //     </p>
  //   </section>
  // );
}

function PaperTalkScene() {
  const workflow = [
    "Document input",
    "Text extraction",
    "Readable text",
    "Read aloud",
  ];

  return (
    <section className="grid w-full max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div>
        <SceneHeading
          eyebrow="Proof 002 — PaperTalk"
          title="Printed information, made audible."
          description="A working software prototype demonstrating that GID’s next product has moved beyond an idea."
        />

        <div className="mt-8 inline-flex rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-300">
          Working Software Prototype
        </div>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-7">
        <div className="grid gap-3">
          {workflow.map((step, index) => (
            <div
              key={step}
              className="flex items-center gap-5 rounded-2xl border border-white/10 bg-black/50 p-5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-xs font-semibold text-neutral-500">
                0{index + 1}
              </span>

              <p className="text-xl font-semibold">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CompanyPositionScene() {
  const statuses = [
    {
      label: "Live",
      title: "StatBet",
      emphasis: true,
    },
    {
      label: "Working Prototype · Active Development",
      title: "PaperTalk",
      emphasis: true,
    },
    {
      label: "Concept Validation",
      title: "Mechanic Connection · Property Connection",
      emphasis: false,
    },
    {
      label: "Available Now",
      title: "GID Business Solutions",
      emphasis: false,
    },
  ];

  return (
    <section className="w-full max-w-7xl">
      <SceneHeading
        eyebrow="Where we are now"
        title="Ambition stays high. Public positioning stays honest."
      />

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {statuses.map((status) => (
          <article
            key={status.label}
            className={`rounded-[2rem] border p-7 ${
              status.emphasis
                ? "border-cyan-200/20 bg-cyan-200/[0.035]"
                : "border-white/10 bg-white/[0.025]"
            }`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
              {status.label}
            </p>

            <h2 className="mt-7 text-4xl font-semibold tracking-[-0.04em]">
              {status.title}
            </h2>
          </article>
        ))}
      </div>
    </section>
  );
}

function PulseScene() {
  return (
    <section className="grid w-full max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
      <div>
        <SceneHeading
          eyebrow="Proof 003 — GID Pulse"
          title="Where do you fit?"
          description="GID converts the room’s attention into structured opportunities and useful follow-up."
        />

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {participationOptions.map((option) => (
            <div
              key={option}
              className="rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-4 text-sm font-semibold text-neutral-300"
            >
              {option}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center rounded-[2rem] border border-white/10 bg-white p-8 text-center text-black">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
          Scan to connect
        </p>

        <Image
          src="/qr/graduation-qr.png"
          alt="Graduation connection QR code"
          width={420}
          height={420}
          priority
          className="mt-5 aspect-square w-full max-w-[360px]"
        />

        <p className="mt-5 text-xl font-semibold">
          gidtechnologies.com/graduation
        </p>
      </div>
    </section>
  );
}

function ClosingScene() {
  return (
    <section className="grid w-full max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-200/60">
          GID Technologies
        </p>

        <h1 className="mt-7 text-balance text-[clamp(3.5rem,7vw,8rem)] font-semibold leading-[0.92] tracking-[-0.07em]">
          We are not presenting a finished company.
        </h1>

        <p className="mt-8 max-w-4xl text-[clamp(1.5rem,2.5vw,3rem)] font-medium leading-tight text-neutral-400">
          We are presenting a startup that has started proving itself.
        </p>

        <p className="mt-10 text-2xl font-semibold">
          Build with us. Support the journey.
        </p>
      </div>

      <div className="flex flex-col items-center rounded-[2rem] border border-white/10 bg-white p-7 text-center text-black">
        <Image
          src="/qr/graduation-qr.png"
          alt="Connect with GID Technologies"
          width={440}
          height={440}
          priority
          className="aspect-square w-full max-w-[380px]"
        />

        <p className="mt-5 text-lg font-semibold">
          gidtechnologies.com/graduation
        </p>
      </div>
    </section>
  );
}
