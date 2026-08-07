"use client";

import Image from "next/image";
import StatBetProofSequence from "./_components/StatBetProofSequence";
import PaperTalkProofSequence from "./_components/PaperTalkProofSequence";
import GidBusinessPlatformSequence from "./_components/GidBusinessPlatformSequence";
import CommercialPulseScene from "./_components/CommercialPulseScene";
import CommercialClosingScene from "./_components/CommercialClosingScene";
import FollowLiveScene from "./_components/FollowLiveScene";
import GidBusinessAiSequence from "./_components/GidBusinessAiSequence";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Command,
  Expand,
  Home,
  Layers3,
  Minimize2,
  RotateCcw,
  X,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import PresenterLaunchScreen from "./_components/PresenterLaunchScreen";
import {
  presentationModeDetails,
  presentationScenes,
  type PresentationMode,
  type PresentationSceneId,
} from "./presentation-data";

type PresentationExperienceProps = {
  initialMode: PresentationMode;
  autoStart: boolean;
};

const shortcutSceneIndexes: Record<string, number> = {
  "1": 0,
  "2": 1,
  "3": 2,
  "4": 3,
  "5": 4,
  "6": 5,
  "7": 6,
  "8": 7,
  "9": 8,
  "0": 9,
};
// const participationOptions = [
//   {
//     label: "I need a digital solution",
//     category: "Business enquiry",
//   },
//   {
//     label: "I want to support GID",
//     category: "Strategic support",
//   },
//   {
//     label: "I can contribute a skill",
//     category: "Contributor interest",
//   },
//   {
//     label: "I can make an introduction",
//     category: "Useful connection",
//   },
//   {
//     label: "I want to test a product",
//     category: "Product testing",
//   },
//   {
//     label: "I want to follow the journey",
//     category: "Future updates",
//   },
// ];

function getSceneFragmentCount(
  sceneId: PresentationSceneId,
  mode: PresentationMode,
) {
  if (sceneId === "statbet-proof") {
    return mode === "core" ? 3 : 6;
  }

  if (sceneId === "gid-platform-core") {
    if (mode === "core") {
      return 4;
    }

    if (mode === "extended") {
      return 7;
    }

    return 6;
  }

  if (sceneId === "gid-business-ai") {
    return mode === "core" ? 3 : 4;
  }

  if (sceneId === "papertalk-proof") {
    return 3;
  }

  return 1;
}

export default function PresentationExperience({
  initialMode,
  autoStart,
}: PresentationExperienceProps) {
  const presentationRootRef = useRef<HTMLDivElement | null>(null);

  const [sceneIndex, setSceneIndex] = useState(0);
  const [fragmentIndex, setFragmentIndex] = useState(0);
  const [sceneRevision, setSceneRevision] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mode, setMode] = useState<PresentationMode>(initialMode);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hasStarted, setHasStarted] = useState(autoStart);

  const [isOnline, setIsOnline] = useState(true);

  const [isBlackout, setIsBlackout] = useState(false);

  const scene = presentationScenes[sceneIndex];
  const finalSceneIndex = presentationScenes.length - 1;

  const isDenseScene =
    scene.id === "statbet-proof" ||
    scene.id === "gid-platform-core" ||
    scene.id === "gid-business-ai" ||
    scene.id === "papertalk-proof";

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

  const startPresentation = useCallback(async (fullscreen: boolean) => {
    setSceneIndex(0);
    setFragmentIndex(0);
    setSceneRevision((current) => current + 1);
    setMenuOpen(false);
    setIsBlackout(false);

    if (fullscreen && !document.fullscreenElement) {
      try {
        await presentationRootRef.current?.requestFullscreen();
      } catch {
        // The presentation still starts if fullscreen is blocked.
      }
    }

    setHasStarted(true);
  }, []);

  useEffect(() => {
    const fragmentCount = getSceneFragmentCount(scene.id, mode);

    setFragmentIndex((current) => Math.min(current, fragmentCount - 1));
  }, [mode, scene.id]);

  useEffect(() => {
    function updateConnectionState() {
      setIsOnline(navigator.onLine);
    }

    updateConnectionState();

    window.addEventListener("online", updateConnectionState);

    window.addEventListener("offline", updateConnectionState);

    return () => {
      window.removeEventListener("online", updateConnectionState);

      window.removeEventListener("offline", updateConnectionState);
    };
  }, []);

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

      if (!hasStarted) {
        return;
      }

      if (key === "b") {
        event.preventDefault();
        setIsBlackout((current) => !current);
        return;
      }

      if (isBlackout) {
        return;
      }

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
    hasStarted,
    isBlackout,
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
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              isOnline ? "bg-emerald-300" : "bg-amber-300"
            }`}
          />

          {isOnline ? "Online" : "No Connection"}
        </span>
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
        className="presentation-enter relative z-10 flex h-full w-full items-center justify-center overflow-hidden px-[clamp(1.5rem,5vw,6rem)] pb-24 pt-20"
      >
        <div
          className={`flex h-full w-full items-center justify-center ${
            isDenseScene ? "presentation-dense-scene" : ""
          }`}
        >
          {renderScene(scene.id, fragmentIndex, mode)}
        </div>
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
                    onClick={() => {
                      setIsBlackout(true);
                      setMenuOpen(false);
                    }}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm font-semibold transition hover:bg-white/[0.07]"
                  >
                    Blackout Projector
                    <span className="rounded-lg border border-white/10 px-2 py-1 text-[9px] text-neutral-500">
                      B
                    </span>
                  </button>

                  <a
                    href="/graduation/present/backup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm font-semibold transition hover:bg-white/[0.07]"
                  >
                    Open Static Backup
                    <ArrowRight className="h-4 w-4" />
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setMenuOpen(false);
                      setIsBlackout(false);
                      setHasStarted(false);

                      if (document.fullscreenElement) {
                        void document.exitFullscreen();
                      }
                    }}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm font-semibold transition hover:bg-white/[0.07]"
                  >
                    Return to Presenter Launch
                    <Home className="h-4 w-4" />
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
                    restart · B blackout · 0 final screen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {!hasStarted ? (
        <PresenterLaunchScreen
          mode={mode}
          isOnline={isOnline}
          onModeChange={setMode}
          onStart={startPresentation}
        />
      ) : null}

      {isBlackout ? (
        <button
          type="button"
          aria-label="Resume presentation from blackout"
          onClick={() => setIsBlackout(false)}
          className="absolute inset-0 z-[120] cursor-none bg-black"
        />
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

    case "follow-live":
      return <FollowLiveScene />;

    case "problem":
      return <ProblemScene />;

    case "gid-model":
      return <GidModelScene />;

    case "statbet-proof":
      return <StatBetProofSequence activeStep={fragmentIndex} mode={mode} />;

    case "gid-platform-core":
      return (
        <GidBusinessPlatformSequence activeStep={fragmentIndex} mode={mode} />
      );

    case "gid-business-ai":
      return <GidBusinessAiSequence activeStep={fragmentIndex} mode={mode} />;

    case "papertalk-proof":
      return <PaperTalkProofSequence activeStep={fragmentIndex} mode={mode} />;

    case "gid-pulse":
      return <CommercialPulseScene />;

    case "closing":
      return <CommercialClosingScene />;
  }
}

function SceneHeading({
  eyebrow,
  title,
  description,
  compact = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  compact?: boolean;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/60">
        {eyebrow}
      </p>

      <h1
        className={`text-balance font-semibold leading-[0.95] tracking-[-0.06em] text-white ${
          compact
            ? "mt-4 max-w-6xl text-[clamp(2.35rem,4.25vw,5rem)]"
            : "mt-5 max-w-6xl text-[clamp(2.7rem,5.7vw,6.8rem)]"
        }`}
      >
        {title}
      </h1>

      {description ? (
        <p
          className={`max-w-4xl text-neutral-400 ${
            compact
              ? "mt-4 text-[clamp(0.9rem,1.1vw,1.15rem)] leading-7"
              : "mt-7 text-[clamp(1rem,1.45vw,1.5rem)] leading-8"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

function OpeningScene() {
  const outcomes = [
    "Attract Opportunities",
    "Organise Operations",
    "Serve People Better",
    "Prepare for Growth",
  ];

  return (
    <section className="flex w-full max-w-7xl flex-col items-center text-center">
      <div className="flex items-center gap-4">
        <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/[0.04] shadow-[0_0_80px_rgba(45,212,255,0.08)]">
          <Image
            src="/brand/GID Logo white.svg"
            alt="GID Technologies"
            width={80}
            height={80}
            priority
            className="h-16 w-16 scale-[1.8] object-contain"
          />
        </div>

        <div className="text-left">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan-200/55">
            GID Technologies
          </p>

          <p className="mt-2 text-sm text-neutral-500">
            Practical technology for growth
          </p>
        </div>
      </div>

      <h1 className="mt-12 max-w-6xl text-balance text-[clamp(3.4rem,7.2vw,8rem)] font-semibold leading-[0.94] tracking-[-0.07em] text-white">
        Growth becomes difficult when the systems behind the business are weak.
      </h1>

      <p className="mt-8 max-w-4xl text-[clamp(1rem,1.5vw,1.45rem)] leading-8 text-neutral-400">
        GID Technologies builds digital solutions that help organisations
        attract opportunities, organise operations, serve people better and
        prepare for growth.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {outcomes.map((outcome, index) => (
          <div
            key={outcome}
            className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3"
          >
            <span className="text-[9px] font-semibold text-neutral-700">
              0{index + 1}
            </span>

            <span className="text-xs font-semibold text-neutral-300">
              {outcome}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProblemScene() {
  const problems = [
    {
      problem: "Enquiries disappear inside chats.",
      consequence: "Potential customers are lost before proper follow-up.",
    },
    {
      problem: "Customer records are scattered.",
      consequence: "Staff search repeatedly through messages and notebooks.",
    },
    {
      problem: "Stock figures are uncertain.",
      consequence: "The business cannot confidently track what is moving.",
    },
    {
      problem: "Orders and payments are tracked manually.",
      consequence: "Errors, delays and incomplete records become more likely.",
    },
    {
      problem: "Operations depend on memory.",
      consequence: "Work slows down when the right person is unavailable.",
    },
    {
      problem: "Owners lack a clear operational view.",
      consequence: "Important decisions depend on assumptions.",
    },
  ];

  return (
    <section className="w-full max-w-7xl">
      <SceneHeading
        compact
        eyebrow="The business reality"
        title="Many businesses lose money through problems that look ordinary."
        description="Small operational gaps quietly affect revenue, customer trust, staff performance and growth."
      />

      <div className="mt-7 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {problems.map((item, index) => (
          <article
            key={item.problem}
            className="rounded-[1.45rem] border border-white/10 bg-white/[0.025] p-5"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/40 text-[9px] font-semibold text-neutral-600">
              0{index + 1}
            </span>

            <h2 className="mt-5 text-lg font-semibold leading-6 text-white">
              {item.problem}
            </h2>

            <p className="mt-3 text-xs leading-5 text-neutral-500">
              {item.consequence}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-3 rounded-2xl border border-cyan-200/15 bg-cyan-200/[0.03] px-5 py-4 text-center">
        <p className="text-xs font-semibold text-cyan-50">
          These gaps affect money, customer experience and the ability to grow.
        </p>
      </div>
    </section>
  );
}

function GidModelScene() {
  const arms = [
    {
      number: "01",
      badge: "Hire GID",
      title: "Business Solutions",
      description:
        "Organisations hire GID to solve immediate visibility, technology and operational problems.",
      capabilities: [
        "Digital presence",
        "Visibility and enquiries",
        "Custom business systems",
        "Automation and support",
      ],
      flow: ["Business Problem", "Assessment", "Implementation", "Support"],
      icon: Briefcase,
      accent: false,
    },
    {
      number: "02",
      badge: "GID-Owned",
      title: "Products & Infrastructure",
      description:
        "GID identifies wider problems and builds products, applications and infrastructure for broader markets.",
      capabilities: [
        "StatBet",
        "GID Platform",
        "PaperTalk",
        "Tracking and API direction",
      ],
      flow: ["Wider Problem", "Product Direction", "Public Use", "Scale"],
      icon: Layers3,
      accent: true,
    },
  ];

  return (
    <section className="w-full max-w-7xl">
      <SceneHeading
        compact
        eyebrow="How GID operates"
        title="Solve immediate problems. Build long-term products."
        description="One arm serves organisations directly. The other builds GID-owned products and infrastructure for wider markets."
      />

      <div className="mt-7 grid gap-4 lg:grid-cols-2">
        {arms.map((arm) => {
          const Icon = arm.icon;

          return (
            <article
              key={arm.number}
              className={`rounded-[1.7rem] border p-6 ${
                arm.accent
                  ? "border-cyan-200/20 bg-cyan-200/[0.035]"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${
                    arm.accent
                      ? "border-cyan-200/20 bg-cyan-200/[0.05]"
                      : "border-white/10 bg-white/[0.04]"
                  }`}
                >
                  <Icon
                    className={`h-5 w-5 ${
                      arm.accent ? "text-cyan-100/75" : "text-white"
                    }`}
                  />
                </span>

                <span className="rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-neutral-500">
                  {arm.badge}
                </span>
              </div>

              <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-600">
                Arm {arm.number}
              </p>

              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-white">
                {arm.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-neutral-400">
                {arm.description}
              </p>

              <div className="mt-5 grid grid-cols-2 gap-2">
                {arm.capabilities.map((capability) => (
                  <div
                    key={capability}
                    className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-xs font-semibold text-neutral-300"
                  >
                    {capability}
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-2">
                {arm.flow.map((step, index) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.08em] text-neutral-500">
                      {step}
                    </span>

                    {index < arm.flow.length - 1 ? (
                      <ArrowRight className="h-3 w-3 text-neutral-700" />
                    ) : null}
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-3 rounded-2xl border border-white/10 bg-black/45 px-5 py-4 text-center">
        <p className="text-xs font-semibold text-neutral-300">
          Businesses can hire GID now while GID continues building products for
          wider markets.
        </p>
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
          eyebrow="Proof 003 — PaperTalk"
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

// function CompanyPositionScene() {
//   const statuses = [
//     {
//       level: "Live",
//       title: "StatBet",
//       description: "Publicly deployed and actively operated.",
//       prominence: "primary",
//     },
//     {
//       level: "Active Backend Development",
//       title: "GID Platform Core",
//       description:
//         "Backend architecture, models, business logic and reusable APIs under construction.",
//       prominence: "primary",
//     },
//     {
//       level: "Working Prototype · Active Development",
//       title: "PaperTalk",
//       description:
//         "Accessibility-focused software progressing through functional development.",
//       prominence: "primary",
//     },
//     {
//       level: "Available Now",
//       title: "GID Business Solutions",
//       description:
//         "Websites, visibility systems, custom platforms, automation and digital support.",
//       prominence: "secondary",
//     },
//     {
//       level: "Roadmap",
//       title: "GID Track Ecosystem",
//       description:
//         "Tracking, notifications, delivery intelligence and future logistics integrations.",
//       prominence: "secondary",
//     },
//     {
//       level: "Long-Term Validation",
//       title: "Mechanic Connection · Property Connection · GID Car Tracker",
//       description:
//         "Future directions that remain under research and validation.",
//       prominence: "quiet",
//     },
//   ];

//   return (
//     <section className="w-full max-w-7xl">
//       <SceneHeading
//         eyebrow="Where GID stands today"
//         title="Early—but not imaginary."
//         description="Every system is presented according to its real stage: live, actively developing, available, on the roadmap, or still being validated."
//       />

//       <div className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
//         {statuses.map((status) => (
//           <article
//             key={status.level}
//             className={`rounded-[1.75rem] border p-6 ${
//               status.prominence === "primary"
//                 ? "border-cyan-200/20 bg-cyan-200/[0.04]"
//                 : status.prominence === "secondary"
//                   ? "border-white/10 bg-white/[0.025]"
//                   : "border-white/[0.07] bg-black/25"
//             }`}
//           >
//             <p
//               className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${
//                 status.prominence === "primary"
//                   ? "text-cyan-100/50"
//                   : "text-neutral-600"
//               }`}
//             >
//               {status.level}
//             </p>

//             <h2
//               className={`mt-5 font-semibold tracking-[-0.04em] ${
//                 status.prominence === "primary"
//                   ? "text-3xl text-white"
//                   : "text-2xl text-neutral-200"
//               }`}
//             >
//               {status.title}
//             </h2>

//             <p className="mt-4 text-sm leading-6 text-neutral-500">
//               {status.description}
//             </p>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }

// function PulseScene() {
//   const systemFlow = [
//     "Choose a path",
//     "Record the event source",
//     "Categorise the opportunity",
//     "Route the follow-up",
//   ];

//   return (
//     <section className="grid w-full max-w-7xl gap-9 lg:grid-cols-[1.18fr_0.82fr] lg:items-center">
//       <div>
//         <SceneHeading
//           eyebrow="Proof 004 — GID Pulse"
//           title="Scan. Choose. Connect."
//           description="GID Pulse turns attention from this room into structured opportunities and useful follow-up."
//         />

//         <div className="mt-8 grid gap-3 sm:grid-cols-2">
//           {participationOptions.map((option, index) => (
//             <article
//               key={option.label}
//               className="rounded-[1.35rem] border border-white/10 bg-white/[0.025] px-5 py-4"
//             >
//               <div className="flex items-start gap-4">
//                 <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/50 text-[10px] font-semibold text-neutral-600">
//                   0{index + 1}
//                 </span>

//                 <div>
//                   <p className="text-sm font-semibold text-neutral-200">
//                     {option.label}
//                   </p>

//                   <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-600">
//                     {option.category}
//                   </p>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>

//         <div className="mt-5 flex flex-wrap items-center gap-2 rounded-[1.5rem] border border-white/10 bg-black/40 p-4">
//           {systemFlow.map((step, index) => (
//             <div key={step} className="flex items-center gap-2">
//               <span className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-neutral-400">
//                 {step}
//               </span>

//               {index < systemFlow.length - 1 ? (
//                 <ArrowRight className="h-3.5 w-3.5 text-neutral-700" />
//               ) : null}
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="flex flex-col items-center rounded-[2rem] border border-white/10 bg-white p-7 text-center text-black shadow-[0_35px_120px_rgba(0,0,0,0.7)]">
//         <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
//           GID Pulse
//         </p>

//         <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
//           Where do you fit?
//         </h2>

//         <Image
//           src="/qr/graduation-qr.png"
//           alt="Graduation connection QR code"
//           width={420}
//           height={420}
//           priority
//           className="mt-5 aspect-square w-full max-w-[330px]"
//         />

//         <p className="mt-5 text-lg font-semibold">
//           gidtechnologies.com/graduation
//         </p>

//         <p className="mt-3 max-w-sm text-xs leading-5 text-neutral-500">
//           Personal names and private submission details are never projected
//           publicly.
//         </p>
//       </div>
//     </section>
//   );
// }

// function ClosingScene() {
//   return (
//     <section className="grid w-full max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
//       <div>
//         <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-200/60">
//           GID Technologies
//         </p>

//         <h1 className="mt-7 text-balance text-[clamp(3.5rem,7vw,8rem)] font-semibold leading-[0.92] tracking-[-0.07em]">
//           We are not presenting a finished company.
//         </h1>

//         <p className="mt-8 max-w-4xl text-[clamp(1.5rem,2.5vw,3rem)] font-medium leading-tight text-neutral-400">
//           We are presenting a startup that has started proving itself.
//         </p>

//         <p className="mt-10 text-2xl font-semibold">
//           Build with us. Support the journey.
//         </p>
//       </div>

//       <div className="flex flex-col items-center rounded-[2rem] border border-white/10 bg-white p-7 text-center text-black">
//         <Image
//           src="/qr/graduation-qr.png"
//           alt="Connect with GID Technologies"
//           width={440}
//           height={440}
//           priority
//           className="aspect-square w-full max-w-[380px]"
//         />

//         <p className="mt-5 text-lg font-semibold">
//           gidtechnologies.com/graduation
//         </p>
//       </div>
//     </section>
//   );
// }
