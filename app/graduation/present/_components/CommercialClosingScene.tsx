import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  BrainCircuit,
  BriefcaseBusiness,
  Globe2,
  Workflow,
} from "lucide-react";

type ClosingProblem = {
  problem: string;
  direction: string;
  icon: LucideIcon;
};

const closingProblems: ClosingProblem[] = [
  {
    problem: "People cannot find or understand the business.",
    direction: "Build stronger visibility.",
    icon: Globe2,
  },
  {
    problem: "Operations are scattered and difficult to control.",
    direction: "Organise the workflow.",
    icon: Workflow,
  },
  {
    problem: "The business has data but lacks decision clarity.",
    direction: "Introduce business intelligence.",
    icon: BrainCircuit,
  },
  {
    problem: "The organisation needs a specialised digital solution.",
    direction: "Build the right system.",
    icon: BriefcaseBusiness,
  },
];

export default function CommercialClosingScene() {
  return (
    <section className="w-full max-w-[1420px]">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center xl:gap-14">
        <div>
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-white/[0.04]">
              <Image
                src="/brand/GID Logo white.svg"
                alt="GID Technologies"
                width={56}
                height={56}
                priority
                className="h-12 w-12 scale-[1.8] object-contain"
              />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/60">
                GID Technologies
              </p>

              <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-neutral-600">
                Practical technology for real business problems
              </p>
            </div>
          </div>

          <h1 className="mt-8 max-w-[10ch] text-balance text-[clamp(3.2rem,6vw,7rem)] font-semibold leading-[0.9] tracking-[-0.075em] text-white">
            Bring us one problem worth solving.
          </h1>

          <p className="mt-7 max-w-2xl text-[clamp(1rem,1.3vw,1.3rem)] leading-8 text-neutral-400">
            Start with the visibility gap, operational difficulty, repeated task
            or decision your organisation cannot continue ignoring.
          </p>

          <div className="mt-8 inline-flex rounded-full border border-cyan-200/20 bg-cyan-200/[0.045] px-5 py-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100/70">
              gidtechnologies.com
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-600">
            A useful conversation can begin with
          </p>

          <div className="mt-5 grid gap-3">
            {closingProblems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.problem}
                  className="grid grid-cols-[auto_1fr] items-center gap-4 rounded-2xl border border-white/10 bg-black/45 p-5"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035]">
                    <Icon className="h-4 w-4 text-white" />
                  </span>

                  <div>
                    <p className="text-sm font-semibold leading-6 text-white">
                      {item.problem}
                    </p>

                    <p className="mt-1 text-xs font-semibold text-cyan-100/55">
                      {item.direction}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-5 rounded-2xl border border-cyan-200/15 bg-cyan-200/[0.035] p-5 text-center">
            <p className="text-sm font-semibold text-white">
              The QR from the previous scene remains open on your phone.
            </p>

            <p className="mt-2 text-xs leading-5 text-neutral-500">
              Choose the conversation that matches your organisation and let us
              continue from there.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
