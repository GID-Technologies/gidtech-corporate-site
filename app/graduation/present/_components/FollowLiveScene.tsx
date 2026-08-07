import Image from "next/image";
import { ExternalLink, ScanLine, Smartphone } from "lucide-react";

export default function FollowLiveScene() {
  return (
    <section className="w-full max-w-[1460px]">
      <div className="grid gap-8 lg:grid-cols-[0.42fr_1.58fr] lg:items-center xl:gap-12">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-200/15 bg-cyan-200/[0.045]">
              <Smartphone className="h-4 w-4 text-cyan-100/70" />
            </span>

            <p className="text-[10px] font-semibold uppercase tracking-[0.27em] text-cyan-200/60">
              Follow the live presentation
            </p>
          </div>

          <h1 className="mt-5 max-w-[9ch] text-balance text-[clamp(2.4rem,4vw,4.7rem)] font-semibold leading-[0.94] tracking-[-0.065em] text-white">
            Everything here connects to something live.
          </h1>

          <p className="mt-5 max-w-md text-[clamp(0.9rem,1vw,1.08rem)] leading-7 text-neutral-400">
            Scan once and keep the page open. Explore GID Technologies and the
            products as we move through the presentation.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.025] px-4 py-3">
            <p className="text-xs font-semibold leading-5 text-neutral-300">
              Scan → Keep it open → Explore as we speak
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-cyan-200/20 bg-cyan-200/[0.035] p-5 text-center shadow-[0_35px_120px_rgba(0,0,0,0.82)]">
          <div className="relative mx-auto aspect-square w-full max-w-[520px] overflow-hidden rounded-[1.5rem] bg-white">
            <Image
              src="/qr/graduation-live-qr.png"
              alt="Scan to follow the GID live presentation"
              fill
              priority
              sizes="520px"
              className="object-contain p-5"
            />
          </div>

          <div className="mt-4 flex items-center justify-center gap-3">
            <ScanLine className="h-5 w-5 text-cyan-100/70" />

            <h2 className="text-xl font-semibold tracking-[-0.035em] text-white">
              Scan and follow along.
            </h2>
          </div>

          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-neutral-500">
            <span>gidtechnologies.com/graduation/live</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </div>
        </div>
      </div>
    </section>
  );
}
