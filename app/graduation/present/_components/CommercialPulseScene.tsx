import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  AppWindow,
  ArrowLeft,
  ArrowRight,
  Building2,
  Globe2,
  Handshake,
  Network,
  ScanLine,
  Workflow,
} from "lucide-react";

type PulseRoute = {
  label: string;
  result: string;
  icon: LucideIcon;
};

const leftRoutes: PulseRoute[] = [
  {
    label: "I need a business system",
    result: "Organise operations",
    icon: Building2,
  },
  {
    label: "I need a website or visibility solution",
    result: "Attract opportunities",
    icon: Globe2,
  },
  {
    label: "I want a workflow or technology audit",
    result: "Find the expensive gap",
    icon: Workflow,
  },
];

const rightRoutes: PulseRoute[] = [
  {
    label: "I want to discuss a custom platform",
    result: "Build a specialised solution",
    icon: AppWindow,
  },
  {
    label: "I can introduce GID to an organisation",
    result: "Create a useful connection",
    icon: Network,
  },
  {
    label: "I want to support or partner with GID",
    result: "Open a strategic conversation",
    icon: Handshake,
  },
];

export default function CommercialPulseScene() {
  return (
    <section className="w-full max-w-[1460px]">
      <div className="grid gap-8 lg:grid-cols-[0.52fr_1.48fr] lg:items-center xl:gap-12">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-200/15 bg-cyan-200/[0.045]">
              <ScanLine className="h-5 w-5 text-cyan-100/70" />
            </span>

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/60">
              GID Pulse
            </p>
          </div>

          <h1 className="mt-6 max-w-[10ch] text-balance text-[clamp(2.7rem,4.9vw,5.45rem)] font-semibold leading-[0.94] tracking-[-0.065em] text-white">
            What can GID help you solve?
          </h1>

          <p className="mt-6 max-w-xl text-[clamp(0.95rem,1.08vw,1.15rem)] leading-8 text-neutral-400">
            Scan once, choose the conversation that matches your organisation
            and give GID a clear route for follow-up.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-2">
            {["Scan", "Choose the problem", "Start the conversation"].map(
              (step, index, items) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.1em] text-neutral-400">
                    {step}
                  </span>

                  {index < items.length - 1 ? (
                    <ArrowRight className="h-3 w-3 text-neutral-700" />
                  ) : null}
                </div>
              ),
            )}
          </div>
        </div>

        <PulseRouteMap />
      </div>
    </section>
  );
}

function PulseRouteMap() {
  return (
    <div className="rounded-[2rem] border border-white/15 bg-[#05080b] p-5 shadow-[0_35px_120px_rgba(0,0,0,0.82)]">
      <div className="grid gap-3 lg:grid-cols-[0.9fr_1.12fr_0.9fr] lg:items-stretch">
        <div className="grid gap-3">
          {leftRoutes.map((route, index) => (
            <PulseRouteCard
              key={route.label}
              route={route}
              number={index + 1}
              direction="right"
            />
          ))}
        </div>

        <div className="flex flex-col justify-center rounded-[1.7rem] border border-cyan-200/20 bg-cyan-200/[0.035] p-5 text-center">
          <div className="relative mx-auto aspect-square w-full max-w-[330px] overflow-hidden rounded-[1.35rem] bg-white">
            <Image
              src="/qr/graduation-qr.png"
              alt="Scan to open the GID graduation opportunity page"
              fill
              priority
              sizes="330px"
              className="object-contain p-4"
            />
          </div>

          <h2 className="mt-5 text-xl font-semibold tracking-[-0.035em] text-white">
            Scan to start the conversation.
          </h2>

          <p className="mt-2 text-xs text-neutral-500">
            gidtechnologies.com/graduation
          </p>
        </div>

        <div className="grid gap-3">
          {rightRoutes.map((route, index) => (
            <PulseRouteCard
              key={route.label}
              route={route}
              number={index + 4}
              direction="left"
            />
          ))}
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-4 text-center">
        <p className="text-xs font-semibold leading-5 text-neutral-300">
          One QR. Six commercial conversation routes. Clearer follow-up after
          the event.
        </p>
      </div>
    </div>
  );
}

function PulseRouteCard({
  route,
  number,
  direction,
}: {
  route: PulseRoute;
  number: number;
  direction: "left" | "right";
}) {
  const Icon = route.icon;

  return (
    <article className="flex items-center gap-3 rounded-[1.25rem] border border-white/10 bg-black/55 p-4">
      {direction === "left" ? (
        <ArrowLeft className="hidden h-4 w-4 shrink-0 text-neutral-700 xl:block" />
      ) : null}

      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
        <Icon className="h-4 w-4 text-white" />
      </span>

      <div className="min-w-0 flex-1">
        <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-neutral-700">
          0{number}
        </p>

        <h3 className="mt-1 text-xs font-semibold leading-5 text-neutral-200">
          {route.label}
        </h3>

        <p className="mt-1 text-[10px] leading-4 text-neutral-600">
          {route.result}
        </p>
      </div>

      {direction === "right" ? (
        <ArrowRight className="hidden h-4 w-4 shrink-0 text-neutral-700 xl:block" />
      ) : null}
    </article>
  );
}
