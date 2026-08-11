import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  Globe2,
  Handshake,
  ScanLine,
  SearchCheck,
  Workflow,
} from "lucide-react";

type CommercialRoute = {
  label: string;
  detail: string;
  icon: LucideIcon;
};

const commercialRoutes: CommercialRoute[] = [
  {
    label: "Business system",
    detail: "Organise customers, orders, inventory and operations.",
    icon: BriefcaseBusiness,
  },
  {
    label: "Website or visibility",
    detail: "Help more people discover and understand the business.",
    icon: Globe2,
  },
  {
    label: "Business intelligence",
    detail: "Turn operational information into clearer decisions.",
    icon: BrainCircuit,
  },
  {
    label: "Workflow audit",
    detail: "Identify repeated work, weak processes and costly gaps.",
    icon: SearchCheck,
  },
  {
    label: "Custom platform",
    detail: "Build a specialised system around a real requirement.",
    icon: Workflow,
  },
  {
    label: "Introduction or partnership",
    detail: "Create a useful commercial or strategic connection.",
    icon: Handshake,
  },
];

export default function CommercialPulseScene() {
  return (
    <section className="w-full max-w-[1480px]">
      <div className="grid gap-7 lg:grid-cols-[1.42fr_0.58fr] lg:items-center xl:gap-10">
        <QrPanel />

        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-200/15 bg-cyan-200/[0.045]">
              <ScanLine className="h-5 w-5 text-cyan-100/70" />
            </span>

            <p className="text-[10px] font-semibold uppercase tracking-[0.27em] text-cyan-200/60">
              Work with GID
            </p>
          </div>

          <h1 className="mt-5 max-w-[10ch] text-balance text-[clamp(2.5rem,4.3vw,5.1rem)] font-semibold leading-[0.93] tracking-[-0.065em] text-white">
            What can GID help you solve?
          </h1>

          <p className="mt-5 max-w-lg text-[clamp(0.9rem,1vw,1.08rem)] leading-7 text-neutral-400">
            Scan the code, choose the conversation that matches your
            organisation and give us a clear route for following up.
          </p>

          <div className="mt-6 grid gap-2">
            {commercialRoutes.map((route) => {
              const Icon = route.icon;

              return (
                <article
                  key={route.label}
                  className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-black/40">
                    <Icon className="h-4 w-4 text-cyan-100/60" />
                  </span>

                  <div>
                    <h2 className="text-xs font-semibold text-white">
                      {route.label}
                    </h2>

                    <p className="mt-1 text-[10px] leading-4 text-neutral-600">
                      {route.detail}
                    </p>
                  </div>

                  <ArrowRight className="h-3.5 w-3.5 text-neutral-700" />
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function QrPanel() {
  return (
    <div className="rounded-[2rem] border border-cyan-200/20 bg-cyan-200/[0.035] p-5 text-center shadow-[0_35px_120px_rgba(0,0,0,0.82)]">
      <div className="relative mx-auto aspect-square w-full max-w-[590px] overflow-hidden rounded-[1.6rem] bg-white">
        <Image
          src="/qr/graduation-qr.png"
          alt="Scan to start a conversation with GID Technologies"
          fill
          priority
          sizes="590px"
          className="object-contain p-5"
        />
      </div>

      <div className="mt-4 flex items-center justify-center gap-3">
        <ScanLine className="h-5 w-5 text-cyan-100/70" />

        <h2 className="text-xl font-semibold tracking-[-0.035em] text-white">
          Scan. Choose the problem. Start the conversation.
        </h2>
      </div>

      <p className="mt-3 text-xs font-semibold text-neutral-500">
        gidtechnologies.com/graduation
      </p>
    </div>
  );
}
