"use client";

export default function GIDHeroSceneMobile() {
  return (
    <div className="relative h-[460px] overflow-hidden rounded-[2rem] border border-white/10 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_55%)]" />

      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:42px_42px]" />

      <div className="absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />

      <div className="absolute left-1/2 top-1/2 h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.09]" />

      <div className="absolute left-1/2 top-1/2 flex h-[110px] w-[110px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[1.5rem] border border-white/20 bg-black shadow-[0_0_70px_rgba(255,255,255,0.08)]">
        <p className="text-[8px] uppercase tracking-[0.35em] text-neutral-600">
          System
        </p>

        <p className="mt-2 text-3xl font-semibold text-white">GID</p>
      </div>

      <p className="absolute left-1/2 top-[12%] -translate-x-1/2 text-[9px] font-semibold uppercase tracking-[0.3em] text-neutral-500">
        Presence
      </p>

      <p className="absolute left-[6%] top-1/2 -translate-y-1/2 text-[9px] font-semibold uppercase tracking-[0.3em] text-neutral-500">
        Operations
      </p>

      <p className="absolute right-[5%] top-1/2 -translate-y-1/2 text-[9px] font-semibold uppercase tracking-[0.3em] text-neutral-500">
        Automation
      </p>

      <p className="absolute bottom-[10%] left-1/2 -translate-x-1/2 text-[9px] font-semibold uppercase tracking-[0.3em] text-neutral-500">
        Intelligence
      </p>
    </div>
  );
}
