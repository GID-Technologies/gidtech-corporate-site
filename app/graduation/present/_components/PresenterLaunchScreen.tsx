"use client";

import {
  ArrowRight,
  Expand,
  Keyboard,
  MonitorPlay,
  ShieldCheck,
  Wifi,
  WifiOff,
} from "lucide-react";
import {
  presentationModeDetails,
  type PresentationMode,
} from "../presentation-data";

type PresenterLaunchScreenProps = {
  mode: PresentationMode;
  isOnline: boolean;
  onModeChange: (mode: PresentationMode) => void;
  onStart: (fullscreen: boolean) => void;
};

const modeOrder: PresentationMode[] = ["core", "recommended", "extended"];

export default function PresenterLaunchScreen({
  mode,
  isOnline,
  onModeChange,
  onStart,
}: PresenterLaunchScreenProps) {
  return (
    <div className="absolute inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#020307] p-5 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(18,214,255,0.12),transparent_32%),radial-gradient(circle_at_85%_85%,rgba(255,255,255,0.06),transparent_28%)]" />

      <div className="relative w-full max-w-6xl rounded-[2.25rem] border border-white/15 bg-[#050608] p-6 shadow-[0_45px_160px_rgba(0,0,0,0.95)] md:p-9">
        <div className="grid gap-9 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200/60">
              Presenter launch
            </p>

            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[0.96] tracking-[-0.055em] md:text-6xl">
              GID Technologies Live Experience
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
              Confirm the presentation mode, connection state and emergency
              controls before projecting the opening scene.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <StatusCard
                icon={MonitorPlay}
                title="Presentation Engine"
                text="Ten controlled scenes are ready."
              />

              <StatusCard
                icon={Keyboard}
                title="Keyboard Control"
                text="Scene jumps and emergency shortcuts are enabled."
              />

              <StatusCard
                icon={ShieldCheck}
                title="Static Backup"
                text="A simplified emergency route is available."
              />

              <StatusCard
                icon={isOnline ? Wifi : WifiOff}
                title={
                  isOnline ? "Connection Available" : "No Internet Connection"
                }
                text={
                  isOnline
                    ? "Audience forms and live links can work normally."
                    : "The local presentation can continue. Audience submissions require internet."
                }
                warning={!isOnline}
              />
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/50 p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-600">
                Emergency shortcuts
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "0 — Final screen",
                  "B — Blackout",
                  "Esc — Controls",
                  "F — Fullscreen",
                  "R — Restart scene",
                ].map((shortcut) => (
                  <span
                    key={shortcut}
                    className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-xs font-semibold text-neutral-400"
                  >
                    {shortcut}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-6 md:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-600">
              Choose presentation mode
            </p>

            <div className="mt-5 grid gap-3">
              {modeOrder.map((presentationMode) => {
                const detail = presentationModeDetails[presentationMode];

                return (
                  <button
                    key={presentationMode}
                    type="button"
                    onClick={() => onModeChange(presentationMode)}
                    className={`rounded-2xl border p-5 text-left transition ${
                      mode === presentationMode
                        ? "border-cyan-200/30 bg-cyan-200/[0.065]"
                        : "border-white/10 bg-black/40 hover:bg-white/[0.05]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-lg font-semibold">
                        {detail.label}
                      </span>

                      <span className="rounded-full border border-white/10 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-neutral-500">
                        {detail.timing}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-neutral-500">
                      {detail.description}
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="mt-7 grid gap-3">
              <button
                type="button"
                onClick={() => onStart(true)}
                className="inline-flex items-center justify-between rounded-2xl bg-white px-5 py-4 text-sm font-semibold text-black transition hover:bg-neutral-200"
              >
                Start Fullscreen Presentation
                <Expand className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={() => onStart(false)}
                className="inline-flex items-center justify-between rounded-2xl border border-white/15 bg-white/[0.035] px-5 py-4 text-sm font-semibold transition hover:bg-white/[0.08]"
              >
                Start in Browser Window
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href="/graduation/present/backup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-sm font-semibold text-neutral-300 transition hover:bg-white/[0.05] hover:text-white"
              >
                Open Static Backup
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <p className="mt-6 text-xs leading-6 text-neutral-600">
              Start fullscreen only after the projector is connected and the
              browser is positioned on the correct display.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusCard({
  icon: Icon,
  title,
  text,
  warning = false,
}: {
  icon: typeof MonitorPlay;
  title: string;
  text: string;
  warning?: boolean;
}) {
  return (
    <article
      className={`rounded-2xl border p-5 ${
        warning
          ? "border-amber-300/20 bg-amber-300/[0.04]"
          : "border-white/10 bg-white/[0.025]"
      }`}
    >
      <Icon
        className={`h-5 w-5 ${
          warning ? "text-amber-100/70" : "text-neutral-300"
        }`}
      />

      <h2 className="mt-5 text-sm font-semibold text-white">{title}</h2>

      <p className="mt-2 text-xs leading-5 text-neutral-500">{text}</p>
    </article>
  );
}
