import type { LucideIcon } from "lucide-react";
import {
  ArrowDown,
  Bell,
  Bot,
  Building2,
  Car,
  Layers3,
  Network,
  Plug,
  Truck,
  Wrench,
} from "lucide-react";

type RoadmapProduct = {
  name: string;
  purpose: string;
  stage: string;
  icon: LucideIcon;
};

const roadmapProducts: RoadmapProduct[] = [
  {
    name: "GID Track",
    purpose:
      "Shipment creation, movement history, delivery updates and customer tracking.",
    stage: "Next Product Direction",
    icon: Truck,
  },
  {
    name: "GID Notify",
    purpose:
      "Operational communication through email, SMS, WhatsApp and in-system alerts.",
    stage: "Communication Layer",
    icon: Bell,
  },
  {
    name: "GID AI Delivery Assistant",
    purpose:
      "Contextual delivery explanations, delay updates and automated customer support.",
    stage: "Intelligence Direction",
    icon: Bot,
  },
  {
    name: "Public GID APIs",
    purpose:
      "Supported GID capabilities embedded inside external business platforms.",
    stage: "Integration Direction",
    icon: Plug,
  },
];

const validationDirections = [
  {
    name: "Mechanic Connection",
    description:
      "A future connection platform for vehicle owners and trusted service providers.",
    icon: Wrench,
  },
  {
    name: "Property Connection",
    description:
      "A future direction around property discovery, services and trusted connections.",
    icon: Building2,
  },
  {
    name: "GID Car Tracker",
    description:
      "A separate research direction around vehicle location and monitoring.",
    icon: Car,
  },
];

export default function PlatformRoadmapScene() {
  return (
    <section className="w-full max-w-[1420px]">
      <div className="grid gap-8 lg:grid-cols-[0.62fr_1.38fr] lg:items-center xl:gap-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200/60">
            GID Product Roadmap
          </p>

          <h1 className="mt-5 max-w-[10ch] text-balance text-[clamp(2.6rem,4.7vw,5.25rem)] font-semibold leading-[0.94] tracking-[-0.065em] text-white">
            What GID plans to build next.
          </h1>

          <p className="mt-6 max-w-xl text-[clamp(0.95rem,1.08vw,1.15rem)] leading-8 text-neutral-400">
            The next product directions focus on business movement,
            communication, customer assistance and external integration.
          </p>

          <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-600">
              Roadmap status
            </p>

            <p className="mt-3 text-sm font-semibold leading-6 text-white">
              Planned directions—not currently launched public products.
            </p>
          </div>
        </div>

        <RoadmapMap />
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {validationDirections.map((direction) => {
          const Icon = direction.icon;

          return (
            <article
              key={direction.name}
              className="flex items-start gap-4 rounded-[1.35rem] border border-white/10 bg-black/45 p-5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035]">
                <Icon className="h-4 w-4 text-neutral-300" />
              </span>

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-neutral-600">
                  Wider Validation
                </p>

                <h2 className="mt-2 text-base font-semibold text-white">
                  {direction.name}
                </h2>

                <p className="mt-2 text-xs leading-5 text-neutral-500">
                  {direction.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function RoadmapMap() {
  return (
    <div className="rounded-[2rem] border border-white/15 bg-[#05080b] p-6 shadow-[0_35px_120px_rgba(0,0,0,0.82)]">
      <div className="mx-auto max-w-2xl rounded-[1.5rem] border border-cyan-200/25 bg-cyan-200/[0.055] p-5">
        <div className="flex items-center justify-center gap-4 text-center">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-200/20 bg-black/25">
            <Layers3 className="h-5 w-5 text-cyan-100/75" />
          </span>

          <div className="text-left">
            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-cyan-100/45">
              Current development base
            </p>

            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-white">
              GID Platform
            </h2>
          </div>
        </div>
      </div>

      <div className="flex h-8 items-center justify-center">
        <ArrowDown className="h-4 w-4 text-neutral-700" />
      </div>

      <div className="relative grid gap-3 sm:grid-cols-2">
        <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/[0.06] sm:block" />

        {roadmapProducts.map((product, index) => (
          <RoadmapNode
            key={product.name}
            product={product}
            number={index + 1}
          />
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-4">
        <Network className="h-4 w-4 text-cyan-100/55" />

        <p className="text-center text-xs font-semibold leading-5 text-neutral-300">
          Movement → Communication → Assistance → Integration
        </p>
      </div>
    </div>
  );
}

function RoadmapNode({
  product,
  number,
}: {
  product: RoadmapProduct;
  number: number;
}) {
  const Icon = product.icon;

  return (
    <article className="relative rounded-[1.4rem] border border-white/10 bg-black/55 p-5">
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
          <Icon className="h-4 w-4 text-white" />
        </span>

        <span className="text-[10px] font-semibold text-neutral-700">
          0{number}
        </span>
      </div>

      <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.13em] text-neutral-600">
        {product.stage}
      </p>

      <h3 className="mt-2 text-lg font-semibold text-white">{product.name}</h3>

      <p className="mt-2 text-xs leading-5 text-neutral-500">
        {product.purpose}
      </p>
    </article>
  );
}
