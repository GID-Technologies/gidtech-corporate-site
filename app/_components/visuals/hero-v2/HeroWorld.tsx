"use client";

import dynamic from "next/dynamic";

const HeroWorldCanvas = dynamic(() => import("./HeroWorldCanvas"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#020407]" />,
});

export default function HeroWorld() {
  return (
    <div aria-hidden="true" className="absolute inset-0 z-0">
      <HeroWorldCanvas />
    </div>
  );
}
