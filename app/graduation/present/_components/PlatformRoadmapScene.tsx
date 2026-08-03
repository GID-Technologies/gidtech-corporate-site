import {
  ArrowDown,
  Bell,
  Bot,
  Car,
  Layers3,
  Network,
  Truck,
} from "lucide-react";

const roadmapLayers = [
  {
    name: "GID Platform Core",
    status: "Active Backend Development",
    description:
      "Reusable business modules and APIs create the operational foundation.",
    icon: Layers3,
    active: true,
  },
  {
    name: "GID Track",
    status: "Roadmap",
    description:
      "Shipment creation, status management, tracking numbers and customer tracking.",
    icon: Truck,
    active: false,
  },
  {
    name: "GID Notify",
    status: "Roadmap",
    description:
      "Event-driven communication through email, SMS, WhatsApp and in-app channels.",
    icon: Bell,
    active: false,
  },
  {
    name: "GID AI Delivery Assistant",
    status: "Roadmap",
    description:
      "Contextual delivery updates, delay communication and automated support.",
    icon: Bot,
    active: false,
  },
  {
    name: "Public GID Logistics API",
    status: "Long-Term Roadmap",
    description:
      "An external integration layer for businesses and other platforms.",
    icon: Network,
    active: false,
  },
];

export default function PlatformRoadmapScene() {
  return (
    <section className="grid w-full max-w-7xl gap-10 lg:grid-cols-[0.58fr_1.42fr] lg:items-center">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-200/60">
          What grows from GID Platform
        </p>

        <h1 className="mt-6 text-balance text-[clamp(2.8rem,5.3vw,6.2rem)] font-semibold leading-[0.94] tracking-[-0.065em] text-white">
          Build the core once. Extend it carefully.
        </h1>

        <p className="mt-7 max-w-2xl text-[clamp(0.95rem,1.2vw,1.25rem)] leading-8 text-neutral-400">
          Customers, products, inventory, orders and invoices can later support
          shipment tracking, notifications, delivery intelligence and external
          integrations.
        </p>

        <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600">
            Status
          </p>

          <p className="mt-3 text-sm font-semibold text-white">
            Roadmap — not yet live
          </p>
        </div>

        <div className="mt-4 flex items-start gap-4 rounded-2xl border border-white/10 bg-black/40 p-5">
          <Car className="mt-1 h-5 w-5 shrink-0 text-neutral-600" />

          <div>
            <p className="text-sm font-semibold text-neutral-300">
              GID Car Tracker
            </p>

            <p className="mt-2 text-xs leading-5 text-neutral-600">
              A separate future research direction. It is not part of the
              shipment-tracking sequence.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-[2rem] border border-white/15 bg-[#05080b] p-6 shadow-[0_35px_120px_rgba(0,0,0,0.82)]">
        <div className="grid gap-2">
          {roadmapLayers.map((layer, index) => {
            const Icon = layer.icon;

            return (
              <div key={layer.name}>
                <article
                  className={`rounded-[1.5rem] border p-5 ${
                    layer.active
                      ? "border-cyan-200/25 bg-cyan-200/[0.055]"
                      : "border-white/10 bg-black/50"
                  }`}
                >
                  <div className="flex items-start gap-5">
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border ${
                        layer.active
                          ? "border-cyan-200/20 bg-cyan-200/[0.06]"
                          : "border-white/10 bg-white/[0.035]"
                      }`}
                    >
                      <Icon
                        className={`h-5 w-5 ${
                          layer.active ? "text-cyan-100/80" : "text-neutral-500"
                        }`}
                      />
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <h2 className="text-xl font-semibold text-white">
                          {layer.name}
                        </h2>

                        <span className="rounded-full border border-white/10 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-neutral-600">
                          {layer.status}
                        </span>
                      </div>

                      <p className="mt-3 text-sm leading-6 text-neutral-500">
                        {layer.description}
                      </p>
                    </div>
                  </div>
                </article>

                {index < roadmapLayers.length - 1 ? (
                  <div className="flex h-7 items-center justify-center">
                    <ArrowDown className="h-4 w-4 text-neutral-700" />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
