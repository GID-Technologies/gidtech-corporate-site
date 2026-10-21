"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import HeroWorld from "./HeroWorld";

export default function GIDHeroV2() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#020407]">
      {/* =====================================================
          REAL VISUAL WORLD
      ===================================================== */}

      <HeroWorld />

      {/* =====================================================
          ATMOSPHERIC COMPOSITING
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(2,4,7,0.96)_0%,rgba(2,4,7,0.82)_20%,rgba(2,4,7,0.18)_34%,rgba(2,4,7,0)_52%,rgba(2,4,7,0.08)_72%,rgba(2,4,7,0.68)_100%)]" />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-[#020407] to-transparent" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-36 bg-gradient-to-t from-[#020407] to-transparent" />

      {/* =====================================================
          HERO MESSAGE
      ===================================================== */}

      <div className="relative z-30 mx-auto flex min-h-[100svh] max-w-[1600px] items-center px-6 lg:px-12 2xl:px-16">
        <div className="max-w-[440px]">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-100 shadow-[0_0_16px_rgba(165,243,252,0.8)]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-cyan-100/55">
              Connected system
            </p>
          </div>

          <h1 className="mt-6 text-balance text-[clamp(3.15rem,4.3vw,5.25rem)] font-semibold leading-[0.93] tracking-[-0.065em] text-white">
            Technology that makes businesses{" "}
            <span className="text-cyan-300">work better.</span>
          </h1>

          <div className="mt-7 flex flex-wrap gap-x-3 gap-y-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/45">
            <span>Presence</span>
            <span className="text-cyan-300/70">•</span>
            <span>Operations</span>
            <span className="text-cyan-300/70">•</span>
            <span>Automation</span>
            <span className="text-cyan-300/70">•</span>
            <span>Intelligence</span>
          </div>

          <p className="mt-7 max-w-[400px] text-base leading-7 text-white/60">
            GID connects what matters, reduces what slows you down, and gives
            you clearer information to act on.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/solutions"
              className="group inline-flex h-12 items-center justify-center gap-3 rounded-lg border border-cyan-200/45 bg-cyan-300/[0.045] px-5 text-sm font-medium text-cyan-50 transition hover:border-cyan-100/70 hover:bg-cyan-300/[0.09]"
            >
              Explore Business Solutions
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/products"
              className="group inline-flex h-12 items-center justify-center gap-3 rounded-lg border border-white/10 bg-black/20 px-5 text-sm font-medium text-white/65 backdrop-blur-sm transition hover:border-white/20 hover:text-white"
            >
              Explore GID
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
