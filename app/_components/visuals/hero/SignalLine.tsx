"use client";

import { CatmullRomLine } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

type Point = [number, number, number];

type SignalLineProps = {
  points: Point[];
  speed?: number;
  offset?: number;
  opacity?: number;
  signalSize?: number;
  startAt?: number;
};

export default function SignalLine({
  points,
  speed = 0.12,
  offset = 0,
  opacity = 0.2,
  signalSize = 0.065,
  startAt = 0,
}: SignalLineProps) {
  const signalRef = useRef<THREE.Mesh>(null!);
  const signalMaterialRef = useRef<THREE.MeshStandardMaterial>(null!);

  const curve = useMemo(
    () =>
      new THREE.CatmullRomCurve3(
        points.map(([x, y, z]) => new THREE.Vector3(x, y, z)),
        false,
        "centripetal",
      ),
    [points],
  );

  const currentPoint = useMemo(() => new THREE.Vector3(), []);

  useFrame(({ clock }) => {
    if (!signalRef.current) return;

    const time = clock.elapsedTime;
    const localTime = time - startAt;

    if (localTime < 0) {
      signalRef.current.visible = false;
      return;
    }

    signalRef.current.visible = true;

    const progress = (localTime * speed + offset) % 1;

    curve.getPointAt(progress, currentPoint);
    signalRef.current.position.copy(currentPoint);

    if (signalMaterialRef.current) {
      const ignition = Math.min(localTime / 0.45, 1);

      signalMaterialRef.current.emissiveIntensity = 1.5 + ignition * 3.5;
    }
  });

  return (
    <group>
      <CatmullRomLine
        points={points}
        curveType="centripetal"
        color="#64748b"
        lineWidth={1}
        transparent
        opacity={opacity}
      />

      <mesh ref={signalRef} visible={startAt === 0}>
        <sphereGeometry args={[signalSize, 18, 18]} />

        <meshStandardMaterial
          ref={signalMaterialRef}
          color="#e6fbff"
          emissive="#7dd3fc"
          emissiveIntensity={2.2}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}
