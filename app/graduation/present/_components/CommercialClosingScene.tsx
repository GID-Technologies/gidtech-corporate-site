import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Globe2,
  ScanLine,
  Workflow,
} from "lucide-react";

type ClosingValue = {
  label: string;
  description: string;
  icon: LucideIcon;
};

const closingValues: ClosingValue[] = [
  {
    label: "Improve visibility",
    description:
      "Help more people discover, understand and contact the organisation.",
    icon: Globe2,
  },
  {
    label: "Organise operations",
    description:
      "Replace scattered work with clearer records, workflows and systems.",
    icon: Workflow,
  },
  {
    label: "Build the right solution",
    description:
      "Create the website, platform, automation or operational tool required.",
    icon: BriefcaseBusiness,
  },
];

export default function CommercialClosingScene() {
  return (
    <section className="w-full max-w-[1420px]">
      <div className="grid gap-8 lg:grid-cols-[1.16fr_0.84fr] lg:items-center xl:gap-12">
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
                Business solutions · Products · Infrastructure
              </p>
            </div>
          </div>

          <h1 className="mt-7 max-w-[11ch] text-balance text-[clamp(3rem,5.7vw,6.3rem)] font-semibold leading-[0.92] tracking-[-0.07em] text-white">
            Bring us one problem worth solving.
          </h1>

          <p className="mt-6 max-w-3xl text-[clamp(0.95rem,1.2vw,1.25rem)] leading-8 text-neutral-400">
            GID helps organisations improve visibility, organise operations,
            reduce repeated work and build practical digital systems for growth.
          </p>

          <div className="mt-7 grid gap-3 md:grid-cols-3">
            {closingValues.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.label}
                  className="rounded-[1.35rem] border border-white/10 bg-black/45 p-5"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035]">
                    <Icon className="h-4 w-4 text-white" />
                  </span>

                  <h2 className="mt-4 text-base font-semibold text-white">
                    {value.label}
                  </h2>

                  <p className="mt-2 text-xs leading-5 text-neutral-500">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-neutral-400">
              Identify the problem
            </span>

            <ArrowRight className="h-4 w-4 text-neutral-700" />

            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-neutral-400">
              Scan the QR
            </span>

            <ArrowRight className="h-4 w-4 text-neutral-700" />

            <span className="rounded-full border border-cyan-200/15 bg-cyan-200/[0.04] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-cyan-100/65">
              Start the conversation
            </span>
          </div>
        </div>

        <ClosingQrCard />
      </div>
    </section>
  );
}

function ClosingQrCard() {
  return (
    <div className="mx-auto w-full max-w-[330px] rounded-[1.7rem] border border-white/15 bg-white/[0.025] p-5 text-center">
      <div className="flex items-center justify-center gap-3">
        <ScanLine className="h-5 w-5 text-cyan-100/70" />

        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-100/55">
          Start here
        </p>
      </div>

      <div className="relative mx-auto mt-4 aspect-square w-full max-w-[210px] overflow-hidden rounded-[1.2rem] bg-white">
        <Image
          src="/qr/graduation-qr.png"
          alt="Scan to contact GID Technologies"
          fill
          priority
          sizes="330px"
          className="object-contain p-4"
        />
      </div>

      <h2 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-white">
        Missed the previous scan?
      </h2>

      <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-neutral-500">
        Choose the kind of solution, introduction, support or partnership that
        matches your interest.
      </p>

      <div className="mt-5 rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
        <p className="text-xs font-semibold text-neutral-300">
          gidtechnologies.com/graduation
        </p>
      </div>
    </div>
  );
}
