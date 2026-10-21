type Props = {
  mode?: "mobile" | "tablet" | "desktop";
};

export default function HeroSceneFallback({ mode = "desktop" }: Props) {
  const height =
    mode === "mobile"
      ? "h-[460px]"
      : mode === "tablet"
        ? "h-[560px]"
        : "h-[720px]";

  return (
    <div
      className={`relative ${height} overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_52%),linear-gradient(180deg,#050505_0%,#07090d_100%)]`}
    >
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:56px_56px]" />

      <div className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.04] blur-3xl" />

      <div className="absolute left-1/2 top-1/2 h-[140px] w-[140px] -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-white/10 bg-black/70 shadow-[0_0_80px_rgba(255,255,255,0.08)]">
        <div className="flex h-full flex-col items-center justify-center text-center">
          <p className="text-[10px] uppercase tracking-[0.34em] text-white/40">
            System
          </p>
          <h3 className="mt-3 text-4xl font-semibold text-white">GID</h3>
        </div>
      </div>
    </div>
  );
}
