"use client";

// import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const systemFlow = [
  {
    number: "01",
    title: "Business world",
    text: "Customers, enquiries, orders and real activity.",
    tone: "cyan",
  },
  {
    number: "02",
    title: "GID core",
    text: "The connected operating system.",
    tone: "cyan",
  },
  {
    number: "03",
    title: "Connections",
    text: "Information and work move together.",
    tone: "amber",
  },
  {
    number: "04",
    title: "Intelligence",
    text: "Signals become risks, opportunities and priorities.",
    tone: "amber",
  },
  {
    number: "05",
    title: "Actionable clarity",
    text: "Know what deserves attention.",
    tone: "neutral",
  },
];

function PowerFlowRail({ visible }: { visible: boolean }) {
  return (
    <aside
      className={`absolute bottom-[10%] right-[2.2%] top-[15%] z-40 hidden w-[275px] transition-all duration-1000 2xl:flex 2xl:flex-col 2xl:justify-center ${
        visible ? "translate-x-0 opacity-100" : "translate-x-5 opacity-0"
      }`}
    >
      <div className="border-l border-cyan-100/[0.12] pl-7">
        <p className="mb-8 text-[9px] font-semibold uppercase tracking-[0.3em] text-cyan-200/70">
          How GID powers your business
        </p>

        <div className="relative">
          <div className="absolute bottom-4 left-[8px] top-4 w-px bg-gradient-to-b from-cyan-300/45 via-orange-400/40 to-white/10" />

          <div className="space-y-7">
            {systemFlow.map((item, index) => {
              const cyan = item.tone === "cyan";

              const amber = item.tone === "amber";

              return (
                <div
                  key={item.number}
                  className="relative grid grid-cols-[18px_1fr] gap-4"
                  style={{
                    transitionDelay: `${index * 110}ms`,
                  }}
                >
                  <span
                    className={`relative z-10 mt-1 h-[17px] w-[17px] rounded-full border bg-[#020304] ${
                      cyan
                        ? "border-cyan-200/65 shadow-[0_0_16px_rgba(103,232,249,0.22)]"
                        : amber
                          ? "border-orange-300/60 shadow-[0_0_16px_rgba(251,146,60,0.2)]"
                          : "border-white/25"
                    }`}
                  >
                    <span
                      className={`absolute inset-[5px] rounded-full ${
                        cyan
                          ? "bg-cyan-100/80"
                          : amber
                            ? "bg-orange-300/80"
                            : "bg-white/45"
                      }`}
                    />
                  </span>

                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-[9px] font-semibold text-white/40">
                        {item.number}
                      </span>

                      <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/70">
                        {item.title}
                      </p>
                    </div>

                    <p className="mt-1.5 max-w-[190px] text-[10px] leading-4 text-white/38">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
}

function EnergyOverlay({ active }: { active: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-20 transition-opacity duration-1000 ${
        active ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* core pulse */}
      <div className="absolute left-[56%] top-[45%] h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/[0.055] blur-[65px] animate-pulse" />

      {/* cyan activity */}
      <span className="gid-energy-dot absolute left-[42%] top-[31%] bg-cyan-100" />

      <span className="gid-energy-dot gid-energy-delay-1 absolute left-[61%] top-[37%] bg-cyan-100" />

      <span className="gid-energy-dot gid-energy-delay-2 absolute left-[72%] top-[46%] bg-cyan-100" />

      {/* amber activity */}
      <span className="gid-energy-dot gid-energy-delay-3 absolute left-[43%] top-[61%] bg-orange-300" />

      <span className="gid-energy-dot gid-energy-delay-4 absolute left-[72%] top-[62%] bg-orange-300" />
    </div>
  );
}

export default function GIDHeroExperience() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setStage(1), 250),

      window.setTimeout(() => setStage(2), 650),

      window.setTimeout(() => setStage(3), 1150),

      window.setTimeout(() => setStage(4), 2300),

      window.setTimeout(() => setStage(5), 3200),
    ];

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[calc(100svh-80px)] overflow-hidden bg-[#020304]"
    >
      {/* ======================================================
          CINEMATIC NORTH-STAR WORLD

          This is now the environmental art direction.
          We animate ABOVE it instead of rebuilding
          every microscopic piece manually.
      ====================================================== */}

      <div
        aria-hidden="true"
        // className={`absolute inset-0 z-0 transition-all duration-[1600ms] ${
        // stage >= 2 ? "scale-100 opacity-100" : "scale-[1.025] opacity-45"
        className="scale-100 opacity-100"
        // }`}
      >
        <img
          src="/visuals/gid-hero-world.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>

      {/* subtle image depth */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_56%_46%,rgba(34,211,238,0.02),transparent_30%)]" />

      {/* ======================================================
          MASK BAKED LEFT COPY

          The reference image contains placeholder copy.
          Our real semantic/clickable website copy lives above.
      ====================================================== */}
      {/* 
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-[39%] bg-[linear-gradient(90deg,#020304_0%,#020304_57%,rgba(2,3,4,0.96)_73%,rgba(2,3,4,0.72)_87%,transparent_100%)]" /> */}

      {/* mask baked right-side flow rail */}
      {/* <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-[21%] bg-[linear-gradient(270deg,#020304_0%,rgba(2,3,4,0.98)_58%,rgba(2,3,4,0.78)_78%,transparent_100%)]" /> */}

      {/* top atmospheric veil */}
      {/* <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[14%] bg-gradient-to-b from-[#020304]/75 to-transparent" /> */}

      {/* lower continuity */}
      {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[12%] bg-gradient-to-t from-[#020304] via-[#020304]/45 to-transparent" /> */}

      {/* ======================================================
          LIVE ENERGY
      ====================================================== */}

      <EnergyOverlay active={stage >= 3} />

      {/* ======================================================
          REAL RIGHT-SIDE SYSTEM STORY
      ====================================================== */}

      <PowerFlowRail visible={stage >= 3} />

      {/* ======================================================
          REAL HERO CONTENT
      ====================================================== */}

      <div className="relative z-40 mx-auto min-h-[calc(100svh-80px)] max-w-[1600px] px-6 lg:px-12 2xl:px-14">
        <div className="flex min-h-[calc(100svh-80px)] items-center">
          <div
            className={`w-full max-w-[430px] pb-12 transition-all duration-1000 2xl:max-w-[455px] ${
              stage >= 1
                ? "translate-y-0 opacity-100"
                : "translate-y-3 opacity-0"
            }`}
          >
            <div className="flex items-center gap-3">
              <span
                className={`h-1.5 w-1.5 rounded-full bg-cyan-100 transition-all duration-1000 ${
                  stage >= 2 ? "shadow-[0_0_18px_rgba(165,243,252,0.9)]" : ""
                }`}
              />

              <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-cyan-100/55">
                Connected system
              </p>
            </div>

            <h1 className="mt-6 text-balance text-[clamp(3.15rem,4.25vw,5.2rem)] font-semibold leading-[0.93] tracking-[-0.065em] text-white">
              Technology that makes businesses{" "}
              <span className="text-cyan-300">work better.</span>
            </h1>

            <div className="mt-7 flex flex-wrap gap-x-3 gap-y-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/45">
              <span>Presence</span>
              <span className="text-cyan-300/60">•</span>
              <span>Operations</span>
              <span className="text-cyan-300/60">•</span>
              <span>Automation</span>
              <span className="text-cyan-300/60">•</span>
              <span>Intelligence</span>
            </div>

            <p className="mt-7 max-w-[420px] text-base leading-7 text-white/65">
              GID connects what matters, reduces what slows you down, and gives
              you clearer information to act on.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/solutions"
                className="group inline-flex h-12 items-center justify-center gap-3 rounded-lg border border-cyan-200/45 bg-cyan-300/[0.045] px-5 text-sm font-medium text-cyan-50 shadow-[0_0_30px_rgba(34,211,238,0.055)] transition hover:border-cyan-100/70 hover:bg-cyan-300/[0.09]"
              >
                Explore Business Solutions
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/products"
                className="group inline-flex h-12 items-center justify-center gap-3 rounded-lg border border-white/10 bg-black/35 px-5 text-sm font-medium text-white/65 backdrop-blur-sm transition hover:border-white/20 hover:text-white"
              >
                Explore GID
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* scroll indicator */}
        <div
          className={`absolute bottom-8 left-12 hidden items-center gap-3 text-[8px] font-semibold uppercase tracking-[0.3em] text-white/25 transition-opacity duration-1000 lg:flex ${
            stage >= 5 ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-100/65" />
          Scroll
        </div>
      </div>

      {/* ambient signal animation */}
      <style jsx>{`
        .gid-energy-dot {
          width: 6px;
          height: 6px;
          border-radius: 9999px;
          box-shadow:
            0 0 8px currentColor,
            0 0 20px currentColor;
          animation: gid-energy-pulse 2.4s ease-in-out infinite;
        }

        .gid-energy-delay-1 {
          animation-delay: 0.35s;
        }

        .gid-energy-delay-2 {
          animation-delay: 0.7s;
        }

        .gid-energy-delay-3 {
          animation-delay: 1.05s;
        }

        .gid-energy-delay-4 {
          animation-delay: 1.4s;
        }

        @keyframes gid-energy-pulse {
          0%,
          100% {
            opacity: 0.25;
            transform: scale(0.75);
          }

          45% {
            opacity: 1;
            transform: scale(1.4);
          }

          65% {
            opacity: 0.6;
            transform: scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gid-energy-dot {
            animation: none;
            opacity: 0.7;
          }
        }
      `}</style>
    </section>
  );
}
