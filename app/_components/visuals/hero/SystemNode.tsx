"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

type SystemNodeProps = {
  position: [number, number, number];
  label: string;
  activationAt?: number;
  phase?: number;
};

export default function SystemNode({
  position,
  label,
  activationAt = 0,
  phase = 0,
}: SystemNodeProps) {
  const groupRef = useRef<THREE.Group>(null!);

  const outerMaterialRef = useRef<THREE.MeshBasicMaterial>(null!);

  const plateMaterialRef = useRef<THREE.MeshStandardMaterial>(null!);

  const signalMaterialRef = useRef<THREE.MeshStandardMaterial>(null!);

  useFrame(({ clock }, delta) => {
    if (!groupRef.current) return;

    const time = clock.elapsedTime;
    const localTime = time - activationAt;

    if (localTime < 0) {
      groupRef.current.scale.setScalar(0.72);

      if (outerMaterialRef.current) {
        outerMaterialRef.current.opacity = 0.035;
      }

      if (signalMaterialRef.current) {
        signalMaterialRef.current.emissiveIntensity = 0.05;
      }

      return;
    }

    const reveal = Math.min(localTime / 0.8, 1);

    const eased = 1 - Math.pow(1 - reveal, 3);

    const restingPulse = Math.sin(time * 1.15 + phase) * 0.018;

    const targetScale = 0.72 + eased * 0.28 + restingPulse * eased;

    const currentScale = groupRef.current.scale.x;

    const nextScale = THREE.MathUtils.damp(currentScale, targetScale, 8, delta);

    groupRef.current.scale.setScalar(nextScale);

    if (outerMaterialRef.current) {
      outerMaterialRef.current.opacity = 0.035 + eased * 0.17;
    }

    if (plateMaterialRef.current) {
      plateMaterialRef.current.emissiveIntensity = 0.12 + eased * 0.9;
    }

    if (signalMaterialRef.current) {
      const ignitionFlash =
        localTime < 0.55 ? Math.sin((localTime / 0.55) * Math.PI) * 4.5 : 0;

      signalMaterialRef.current.emissiveIntensity =
        1.1 + eased * 2.8 + ignitionFlash;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={0.72}>
      <mesh>
        <torusGeometry args={[0.38, 0.012, 8, 64]} />

        <meshBasicMaterial
          ref={outerMaterialRef}
          color="#94a3b8"
          transparent
          opacity={0.035}
        />
      </mesh>

      <mesh>
        <circleGeometry args={[0.2, 40]} />

        <meshStandardMaterial
          ref={plateMaterialRef}
          color="#07090c"
          emissive="#172033"
          emissiveIntensity={0.1}
          metalness={0.8}
          roughness={0.25}
        />
      </mesh>

      <mesh position={[0, 0, 0.04]}>
        <circleGeometry args={[0.052, 32]} />

        <meshStandardMaterial
          ref={signalMaterialRef}
          color="#e5faff"
          emissive="#7dd3fc"
          emissiveIntensity={0.05}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}
