import Image from "next/image";

const directions = [
  "Visibility",
  "Operations",
  "Automation",
  "Intelligence",
  "Accessibility",
  "Custom Systems",
];

export default function CommercialClosingScene() {
  return (
    <section className="flex w-full max-w-7xl flex-col items-center text-center">
      <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/[0.04] shadow-[0_0_90px_rgba(45,212,255,0.08)]">
        <Image
          src="/brand/GID Logo white.svg"
          alt="GID Technologies"
          width={80}
          height={80}
          priority
          className="h-16 w-16 scale-[1.8] object-contain"
        />
      </div>

      <p className="mt-7 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200/55">
        GID Technologies
      </p>

      <div className="mt-7 flex max-w-5xl flex-wrap justify-center gap-2">
        {directions.map((direction) => (
          <span
            key={direction}
            className="rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-neutral-500"
          >
            {direction}
          </span>
        ))}
      </div>

      <h1 className="mt-9 max-w-5xl text-balance text-[clamp(3rem,8vw,8rem)] font-semibold leading-[0.9] tracking-[-0.075em] text-white">
        Bring us one problem worth solving.
      </h1>

      <p className="mt-7 max-w-3xl text-[clamp(1rem,1.4vw,1.35rem)] leading-8 text-neutral-400">
        You do not need to arrive with the technology figured out. Start with
        what needs to change.
      </p>

      <div className="mt-9 rounded-full border border-cyan-200/20 bg-cyan-200/[0.045] px-6 py-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/70">
          gidtechnologies.com
        </p>
      </div>
    </section>
  );
}
