"use client";

import { Line } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

type Point = [number, number, number];

const farRoutes: Point[][] = [
  [
    [-7.4, 3.6, -3.5],
    [-5.5, 3.6, -3.5],
    [-5.5, 2.8, -3.5],
    [-3.8, 2.8, -3.5],
  ],
  [
    [7.5, 3.3, -3.8],
    [5.8, 3.3, -3.8],
    [5.8, 2.6, -3.8],
    [4.1, 2.6, -3.8],
  ],
  [
    [-7, -3.4, -3.2],
    [-5.2, -3.4, -3.2],
    [-5.2, -2.7, -3.2],
    [-3.7, -2.7, -3.2],
  ],
  [
    [7.2, -3.3, -3.6],
    [5.6, -3.3, -3.6],
    [5.6, -2.6, -3.6],
    [4, -2.6, -3.6],
  ],
];

const midRoutes: Point[][] = [
  [
    [-6.2, 1.8, -1.45],
    [-4.9, 1.8, -1.45],
    [-4.9, 1.2, -1.45],
    [-3.65, 1.2, -1.45],
  ],
  [
    [6.4, 1.5, -1.3],
    [5.1, 1.5, -1.3],
    [5.1, 0.95, -1.3],
    [3.75, 0.95, -1.3],
  ],
  [
    [-6.5, -1.5, -1.6],
    [-5, -1.5, -1.6],
    [-5, -0.9, -1.6],
    [-3.9, -0.9, -1.6],
  ],
  [
    [6.35, -1.8, -1.55],
    [5, -1.8, -1.55],
    [5, -1.15, -1.55],
    [3.8, -1.15, -1.55],
  ],
];

const foregroundRoutes: Point[][] = [
  [
    [-8.2, 3.1, 2.25],
    [-6.8, 3.1, 2.25],
    [-6.8, 2.25, 2.25],
    [-5.85, 2.25, 2.25],
  ],
  [
    [8.3, -2.8, 2.45],
    [6.9, -2.8, 2.45],
    [6.9, -2.1, 2.45],
    [5.9, -2.1, 2.45],
  ],
];

const modulePositions: Point[] = [
  [-5.8, 3.05, -2.7],
  [6.15, 2.8, -3.1],
  [-6.2, -2.9, -2.4],
  [5.9, -2.75, -3],
  [-5.1, 1.55, -0.9],
  [5.2, -1.45, -1],
];

function InfrastructureModule({
  position,
  large = false,
}: {
  position: Point;
  large?: boolean;
}) {
  return (
    <group position={position}>
      <mesh>
        <boxGeometry args={large ? [0.78, 0.34, 0.14] : [0.48, 0.22, 0.1]} />

        <meshStandardMaterial
          color="#080b0f"
          emissive="#0f172a"
          emissiveIntensity={0.35}
          metalness={0.8}
          roughness={0.38}
          transparent
          opacity={0.78}
        />
      </mesh>

      <mesh position={[0, 0, 0.065]}>
        <boxGeometry args={large ? [0.5, 0.022, 0.02] : [0.29, 0.018, 0.018]} />

        <meshBasicMaterial color="#94a3b8" transparent opacity={0.23} />
      </mesh>

      <mesh position={[large ? 0.28 : 0.16, 0, 0.085]}>
        <sphereGeometry args={[0.025, 12, 12]} />

        <meshBasicMaterial color="#cffafe" toneMapped={false} />
      </mesh>
    </group>
  );
}

export default function InfrastructureWorld() {
  const worldRef = useRef<THREE.Group>(null!);
  const foregroundRef = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
    const time = clock.elapsedTime;

    if (worldRef.current) {
      worldRef.current.rotation.z = Math.sin(time * 0.055) * 0.0035;

      worldRef.current.position.y = Math.sin(time * 0.08) * 0.035;
    }

    if (foregroundRef.current) {
      foregroundRef.current.position.x = Math.sin(time * 0.07) * 0.065;
    }
  });

  return (
    <group ref={worldRef}>
      {/* FAR INFRASTRUCTURE */}
      <group>
        {farRoutes.map((points, index) => (
          <Line
            key={`far-${index}`}
            points={points}
            color="#64748b"
            lineWidth={0.65}
            transparent
            opacity={0.075}
          />
        ))}

        {modulePositions.slice(0, 4).map((position, index) => (
          <InfrastructureModule
            key={`far-module-${index}`}
            position={position}
            large={index === 1}
          />
        ))}
      </group>

      {/* MID INFRASTRUCTURE */}
      <group>
        {midRoutes.map((points, index) => (
          <Line
            key={`mid-${index}`}
            points={points}
            color="#94a3b8"
            lineWidth={0.8}
            transparent
            opacity={0.12}
          />
        ))}

        {modulePositions.slice(4).map((position, index) => (
          <InfrastructureModule
            key={`mid-module-${index}`}
            position={position}
            large
          />
        ))}
      </group>

      {/* DISTANT NODES */}
      {[
        [-6.1, 3.6, -3.45],
        [-5.5, 2.8, -3.45],
        [6.2, 3.3, -3.7],
        [5.8, 2.6, -3.7],
        [-5.7, -3.4, -3.15],
        [6, -3.3, -3.5],
        [-4.9, 1.8, -1.4],
        [5.1, 1.5, -1.25],
      ].map(([x, y, z], index) => (
        <mesh key={`world-node-${index}`} position={[x, y, z]}>
          <sphereGeometry args={[0.035, 12, 12]} />

          <meshStandardMaterial
            color="#cbd5e1"
            emissive="#64748b"
            emissiveIntensity={0.7}
            transparent
            opacity={0.45}
          />
        </mesh>
      ))}

      {/* FOREGROUND TRACES */}
      <group ref={foregroundRef}>
        {foregroundRoutes.map((points, index) => (
          <Line
            key={`foreground-${index}`}
            points={points}
            color="#cbd5e1"
            lineWidth={1}
            transparent
            opacity={0.1}
          />
        ))}
      </group>
    </group>
  );
}
