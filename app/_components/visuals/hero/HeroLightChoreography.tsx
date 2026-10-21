"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

import { HERO_TIMELINE } from "./heroTimeline";

export default function HeroLightChoreography() {
  const cyanKey = useRef<THREE.SpotLight>(null!);
  const amberKey = useRef<THREE.SpotLight>(null!);
  const coreGlow = useRef<THREE.PointLight>(null!);
  const intelligenceGlow = useRef<THREE.PointLight>(null!);

  useFrame(({ clock }, delta) => {
    const time = clock.elapsedTime;

    /*
     * 01 — IGNITION
     */
    const ignition = THREE.MathUtils.smoothstep(
      time,
      HERO_TIMELINE.ignition,
      HERO_TIMELINE.coreAwake,
    );

    /*
     * 02 — WORLD WAKES
     */
    const worldWake = THREE.MathUtils.smoothstep(
      time,
      HERO_TIMELINE.coreAwake,
      HERO_TIMELINE.businessFlow,
    );

    /*
     * 04 — INTELLIGENCE
     */
    const intelligenceWake = THREE.MathUtils.smoothstep(
      time,
      HERO_TIMELINE.intelligence,
      HERO_TIMELINE.transformation,
    );

    if (coreGlow.current) {
      const ignitionFlash =
        time > 0.75 && time < 1.55
          ? Math.sin(((time - 0.75) / 0.8) * Math.PI) * 9
          : 0;

      const target = ignition * 4.2 + ignitionFlash;

      coreGlow.current.intensity = THREE.MathUtils.damp(
        coreGlow.current.intensity,
        target,
        7,
        delta,
      );
    }

    if (cyanKey.current) {
      const target = 0.3 + ignition * 1.7 + worldWake * 1.9;

      cyanKey.current.intensity = THREE.MathUtils.damp(
        cyanKey.current.intensity,
        target,
        4,
        delta,
      );
    }

    if (amberKey.current) {
      const target = 0.05 + worldWake * 1.45;

      amberKey.current.intensity = THREE.MathUtils.damp(
        amberKey.current.intensity,
        target,
        4,
        delta,
      );
    }

    if (intelligenceGlow.current) {
      const target = intelligenceWake * 3.5;

      intelligenceGlow.current.intensity = THREE.MathUtils.damp(
        intelligenceGlow.current.intensity,
        target,
        5,
        delta,
      );
    }
  });

  return (
    <>
      {/* core ignition */}
      <pointLight
        ref={coreGlow}
        position={[1.5, -1.25, 4.5]}
        intensity={0}
        color="#9befff"
        distance={13}
        decay={2}
      />

      {/* cyan system light */}
      <spotLight
        ref={cyanKey}
        position={[-3, 7, 8]}
        target-position={[1.2, -1.2, 0]}
        intensity={0.3}
        angle={0.46}
        penumbra={0.8}
        color="#b8f5ff"
        distance={25}
        decay={2}
      />

      {/* amber operational edge */}
      <spotLight
        ref={amberKey}
        position={[7, 2, 5]}
        target-position={[1.3, -1.5, 0]}
        intensity={0.05}
        angle={0.5}
        penumbra={0.85}
        color="#ff8a3d"
        distance={22}
        decay={2}
      />

      {/* lower intelligence illumination */}
      <pointLight
        ref={intelligenceGlow}
        position={[1.5, -5, 2.5]}
        intensity={0}
        color="#22d3ee"
        distance={9}
        decay={2}
      />
    </>
  );
}
