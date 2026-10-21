"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import HeroSceneFallback from "./HeroSceneFallBack";

const DesktopScene = dynamic(() => import("./GIDHeroSceneDesktop"), {
  ssr: false,
  loading: () => <HeroSceneFallback mode="desktop" />,
});

const TabletScene = dynamic(() => import("./GIDHeroSceneTablet"), {
  ssr: false,
  loading: () => <HeroSceneFallback mode="tablet" />,
});

const MobileScene = dynamic(() => import("./GIDHeroSceneMobile"), {
  ssr: false,
  loading: () => <HeroSceneFallback mode="mobile" />,
});

type Mode = "mobile" | "tablet" | "desktop";

export default function GIDHeroVisual() {
  const [mode, setMode] = useState<Mode>("desktop");

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const updateMode = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setMode("mobile");
      } else if (width < 1200) {
        setMode("tablet");
      } else {
        setMode("desktop");
      }
    };

    updateMode();

    window.addEventListener("resize", updateMode);

    setMounted(true);

    return () => window.removeEventListener("resize", updateMode);
  }, []);

  return (
    <div className="relative h-full min-h-[100svh] w-full">
      {!mounted ? (
        <HeroSceneFallback mode="desktop" />
      ) : mode === "mobile" ? (
        <MobileScene />
      ) : mode === "tablet" ? (
        <TabletScene />
      ) : (
        <DesktopScene />
      )}
    </div>
  );
}
