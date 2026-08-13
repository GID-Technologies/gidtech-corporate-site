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
  problem: string;
  route: string;
  detail: string;
  icon: LucideIcon;
};

const commercialRoutes: CommercialRoute[] = [
  {
    problem: "People are not finding the business.",
    route: "Visibility & Digital Presence",
    detail:
      "Websites, digital presence and systems that turn attention into enquiries.",
    icon: Globe2,
  },
  {
    problem: "Daily operations are scattered.",
    route: "Business Systems",
    detail:
      "Connect customers, orders, inventory, invoices and important workflows.",
    icon: BriefcaseBusiness,
  },
  {
    problem: "Too much work keeps repeating manually.",
    route: "Automation & Workflow",
    detail:
      "Reduce repeated work and improve how information moves through the organisation.",
    icon: Workflow,
  },
  {
    problem: "The business has data but lacks clarity.",
    route: "Business Intelligence",
    detail:
      "Turn business information into clearer priorities, risks and opportunities.",
    icon: BrainCircuit,
  },
  {
    problem: "The organisation needs something specific.",
    route: "Custom Digital Solution",
    detail:
      "Design and build technology around a requirement that existing tools do not solve well.",
    icon: SearchCheck,
  },
  {
    problem: "There is a useful opportunity to explore together.",
    route: "Partnership or Introduction",
    detail:
      "Start a commercial, strategic or ecosystem conversation with GID Technologies.",
    icon: Handshake,
  },
];

export default function CommercialPulseScene() {
  return (
    <section className="w-full max-w-[1480px]">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center xl:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-200/15 bg-cyan-200/[0.045]">
              <ScanLine className="h-5 w-5 text-cyan-100/70" />
            </span>

            <p className="text-[10px] font-semibold uppercase tracking-[0.27em] text-cyan-200/60">
              Work with GID
            </p>
          </div>

          <h1 className="mt-5 max-w-[12ch] text-balance text-[clamp(2.15rem,7vw,5.1rem)] font-semibold leading-[0.93] tracking-[-0.065em] text-white">
            You do not need to know what software you need.
          </h1>

          <p className="mt-5 max-w-2xl text-[clamp(0.92rem,1vw,1.08rem)] leading-7 text-neutral-400">
            Start with the problem. GID can help determine the technology,
            workflow or system that makes sense from there.
          </p>

          <div className="mt-6 grid gap-2 sm:grid-cols-2">
            {commercialRoutes.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.problem}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-4"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/40">
                      <Icon className="h-4 w-4 text-cyan-100/60" />
                    </span>

                    <div>
                      <p className="text-xs font-semibold leading-5 text-white">
                        {item.problem}
                      </p>

                      <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-cyan-100/55">
                        {item.route}
                      </p>

                      <p className="mt-2 text-[10px] leading-4 text-neutral-600">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <QrPanel />
      </div>
    </section>
  );
}

function QrPanel() {
  return (
    <div className="rounded-[2rem] border border-cyan-200/20 bg-cyan-200/[0.035] p-5 text-center shadow-[0_35px_120px_rgba(0,0,0,0.82)]">
      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-100/50">
        See your problem here?
      </p>

      <h2 className="mx-auto mt-3 max-w-lg text-2xl font-semibold tracking-[-0.04em] text-white md:text-3xl">
        Start the conversation while GID is still in the room.
      </h2>

      <div className="relative mx-auto mt-5 aspect-square w-full max-w-[470px] overflow-hidden rounded-[1.6rem] bg-white">
        <Image
          src="/qr/career-quest-work-qr.png"
          alt="Scan to start a conversation with GID Technologies"
          fill
          priority
          sizes="470px"
          className="object-contain p-5"
        />
      </div>

      <div className="mt-5 flex items-center justify-center gap-3">
        <ScanLine className="h-5 w-5 text-cyan-100/70" />

        <p className="text-sm font-semibold text-white">
          Scan → Choose the problem → Continue with GID
        </p>
      </div>

      <p className="mt-3 text-xs font-semibold text-neutral-500">
        gidtechnologies.com/career-quest/live
      </p>

      <div className="mt-5 rounded-2xl border border-white/10 bg-black/40 px-5 py-4">
        <p className="text-sm font-semibold text-cyan-50">
          We just need a clear starting point.
        </p>
      </div>
    </div>
  );
}
