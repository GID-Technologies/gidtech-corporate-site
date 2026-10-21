import type { Metadata } from "next";

import GIDHeroV2 from "../../_components/visuals/hero-v2/GIDHeroV2";

export const metadata: Metadata = {
  title: "GID Hero Visual Lab",
  robots: {
    index: false,
    follow: false,
  },
};

export default function HeroVisualLabPage() {
  return (
    <main className="min-h-screen bg-black">
      <GIDHeroV2 />
    </main>
  );
}
