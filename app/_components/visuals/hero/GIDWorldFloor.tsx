"use client";

import { MeshReflectorMaterial } from "@react-three/drei";

export default function GIDWorldFloor() {
  return (
    <group position={[0, 0, -1.05]}>
      {/* main physical floor */}
      <mesh>
        <planeGeometry args={[19, 11]} />

        <MeshReflectorMaterial
          color="#020406"
          metalness={0.86}
          roughness={0.48}
          blur={[280, 90]}
          mixBlur={1}
          mixStrength={0.65}
          mixContrast={1.15}
          resolution={512}
          mirror={0.18}
          depthScale={0.18}
          minDepthThreshold={0.7}
          maxDepthThreshold={1.4}
          reflectorOffset={0.03}
        />
      </mesh>

      {/* architectural inner floor */}
      <mesh position={[0, 0, 0.015]}>
        <planeGeometry args={[14.8, 8.3]} />

        <meshStandardMaterial
          color="#03070a"
          metalness={0.82}
          roughness={0.38}
          transparent
          opacity={0.78}
        />
      </mesh>

      {/* very faint centre runway */}
      <mesh position={[0.25, -0.25, 0.032]}>
        <planeGeometry args={[1.15, 8]} />

        <meshBasicMaterial color="#0e7490" transparent opacity={0.035} />
      </mesh>
    </group>
  );
}
