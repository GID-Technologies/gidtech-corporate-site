"use client";

import { Canvas } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";

import GIDCoreNode from "./GIDCoreNode";

import HeroCameraRig from "./HeroCameraRig";
// import BusinessTelemetry from "./BusinessTelemetry";
import GIDSystemBoard from "./GIDSystemBoard";
import BusinessRouteNetwork from "./BusinessRouteNetwork";
import BusinessWorldLandscape from "./BusinessWorldLandscape";
import GIDWorldFloor from "./GIDWorldFloor";
import HeroLightChoreography from "./HeroLightChoreography";

export default function GIDHeroSceneDesktop() {
  return (
    <div className="relative h-full min-h-[100svh] w-full overflow-hidden bg-[#020304]">
      {/* =========================================================
          BACKGROUND ENVIRONMENT
      ========================================================= */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_68%,rgba(125,211,252,0.075),transparent_30%),radial-gradient(circle_at_50%_55%,rgba(255,255,255,0.035),transparent_60%)]" />

      <div className="absolute inset-0 opacity-[0.15] [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:58px_58px]" />

      {/* huge atmospheric GID typography */}
      <p className="pointer-events-none absolute left-1/2 top-[68%] -translate-x-1/2 -translate-y-1/2 select-none text-[20rem] font-semibold tracking-[-0.09em] text-white/[0.012]">
        GID
      </p>

      {/* =========================================================
          THREE.JS WORLD
      ========================================================= */}

      <Canvas
        dpr={[1, 1.65]}
        camera={{
          position: [1.15, 5.1, 12.8],
          fov: 42,
        }}
      >
        <fog attach="fog" args={["#020304", 10, 22]} />

        {/* camera choreography */}
        <HeroCameraRig />

        {/* =======================================================
            GLOBAL LIGHTING
        ======================================================= */}

        <ambientLight intensity={0.58} />

        <directionalLight position={[3.5, 5.5, 6]} intensity={2.35} />

        <HeroLightChoreography />

        {/* atmospheric particles */}
        <Sparkles
          count={28}
          scale={[15, 9, 5]}
          size={0.7}
          speed={0.07}
          opacity={0.055}
          color="#d8f8ff"
        />

        {/* =======================================================
            MASTER GID SYSTEM WORLD

            EVERYTHING THAT BELONGS TO THE MACHINE
            NOW MOVES AS ONE SYSTEM.
        ======================================================= */}

        <group position={[1.45, -1.35, 0]} scale={1.04}>
          <GIDWorldFloor />

          <BusinessWorldLandscape />

          <GIDSystemBoard />

          <BusinessRouteNetwork />

          <group position={[0, 0.15, 1.0]} scale={0.88}>
            <GIDCoreNode />
          </group>
        </group>

        {/* =======================================================
            POST PROCESSING
        ======================================================= */}

        <EffectComposer multisampling={4}>
          <Bloom
            intensity={0.95}
            luminanceThreshold={1}
            luminanceSmoothing={0.2}
            mipmapBlur
          />

          <Vignette offset={0.14} darkness={0.68} />
        </EffectComposer>
      </Canvas>

      {/* =========================================================
          INTERFACE / TEXT LAYER

      {/* =========================================================
          EDGE DISSOLVE

          MUCH LIGHTER THAN BEFORE.
          THE HERO ITSELF ALREADY HANDLES TEXT READABILITY.
      ========================================================= */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}
