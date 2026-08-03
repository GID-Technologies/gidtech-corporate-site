import {
  Braces,
  Boxes,
  Code2,
  Database,
  ServerCog,
  ShieldAlert,
} from "lucide-react";

const engineeringEvidence = [
  {
    title: "Backend Endpoints",
    description:
      "APIs are being developed to support core business operations and future product interfaces.",
    icon: Braces,
  },
  {
    title: "Database Models",
    description:
      "Entities and relationships are being structured around reusable business data.",
    icon: Database,
  },
  {
    title: "Business Modules",
    description:
      "Current development focuses on customers, products, inventory, orders and invoices.",
    icon: Boxes,
  },
  {
    title: "Application Logic",
    description:
      "Java Spring Boot services and backend rules are being implemented in IntelliJ.",
    icon: Code2,
  },
];

const currentFocus = [
  "Customers",
  "Products",
  "Inventory",
  "Orders",
  "Invoices",
];

export default function GidPlatformCoreScene() {
  return (
    <section className="w-full max-w-7xl">
      <div className="grid gap-9 lg:grid-cols-[0.62fr_1.38fr] lg:items-center xl:gap-12">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-200/15 bg-cyan-200/[0.04]">
              <ServerCog className="h-5 w-5 text-cyan-100/70" />
            </span>

            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-200/60">
              Proof 002 — GID Platform Core
            </p>
          </div>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-neutral-600">
            Active backend development
          </p>

          <h1 className="mt-5 text-balance text-[clamp(2.5rem,4.8vw,5.8rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-white">
            Reusable infrastructure for business operations.
          </h1>

          <p className="mt-7 max-w-2xl text-[clamp(0.95rem,1.2vw,1.25rem)] leading-8 text-neutral-400">
            GID Platform Core is a modular backend foundation being developed
            around customers, products, inventory, orders, invoices and future
            operational services.
          </p>

          <div className="mt-7 rounded-2xl border border-cyan-200/15 bg-cyan-200/[0.035] p-5">
            <p className="text-sm font-semibold leading-6 text-cyan-50">
              The engineering foundation is being built now.
            </p>

            <p className="mt-2 text-xs leading-5 text-cyan-100/40">
              It is not being presented as a completed ERP or a customer-ready
              platform.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/15 bg-[#05080b] p-6 shadow-[0_35px_120px_rgba(0,0,0,0.82)]">
          <div className="flex flex-wrap items-start justify-between gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-600">
                Current engineering evidence
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
                Backend before interface.
              </h2>
            </div>

            <span className="rounded-full border border-cyan-200/15 bg-cyan-200/[0.05] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-cyan-100/60">
              Spring Boot · Java
            </span>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {engineeringEvidence.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-[1.5rem] border border-white/10 bg-black/50 p-5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                    <Icon className="h-5 w-5 text-white" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-neutral-500">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-4 rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-600">
              Current development focus
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {currentFocus.map((module) => (
                <span
                  key={module}
                  className="rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-semibold text-neutral-300"
                >
                  {module}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-start gap-3 rounded-2xl border border-amber-300/15 bg-amber-300/[0.035] px-5 py-4">
            <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-amber-100/60" />

            <p className="text-xs leading-6 text-neutral-500">
              The customer-facing dashboard is not yet ready. Multi-organisation
              architecture is a development direction—not a completed public
              claim.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
