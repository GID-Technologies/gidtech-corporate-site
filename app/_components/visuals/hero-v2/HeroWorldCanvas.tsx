"use client";

import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";
import { Sparkles } from "@react-three/drei";

import GIDCoreNode from "../hero/GIDCoreNode";
import BusinessRouteNetwork from "../hero/BusinessRouteNetwork";
import BusinessWorldLandscape from "../hero/BusinessWorldLandscape";
import GIDWorldFloor from "../hero/GIDWorldFloor";

export default function HeroWorldCanvas() {
  return (
    <div className="absolute inset-0">
      <Canvas
        dpr={[1, 1.75]}
        camera={{
          position: [1.3, 5.6, 13.4],
          fov: 40,
        }}
      >
        <fog attach="fog" args={["#020407", 11, 24]} />

        <ambientLight intensity={0.24} />

        <directionalLight
          position={[-4, 7, 8]}
          intensity={1.35}
          color="#d8fbff"
        />

        <spotLight
          position={[-3, 8, 7]}
          intensity={3.4}
          angle={0.46}
          penumbra={0.82}
          color="#8feeff"
          distance={28}
          decay={2}
        />

        <spotLight
          position={[7, 3, 5]}
          intensity={1.65}
          angle={0.48}
          penumbra={0.86}
          color="#ff8a3d"
          distance={24}
          decay={2}
        />

        <Sparkles
          count={24}
          scale={[16, 10, 6]}
          size={0.65}
          speed={0.06}
          opacity={0.055}
          color="#d8f8ff"
        />

        <group position={[1.6, -1.25, 0]} rotation={[-0.08, 0, 0]} scale={1.02}>
          <GIDWorldFloor />

          <BusinessWorldLandscape />

          <BusinessRouteNetwork />

          <group position={[0, 0.25, 1.05]} scale={0.92}>
            <GIDCoreNode />
          </group>
        </group>

        <EffectComposer multisampling={4}>
          <Bloom
            intensity={0.95}
            luminanceThreshold={1}
            luminanceSmoothing={0.18}
            mipmapBlur
          />

          <Vignette offset={0.13} darkness={0.62} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
