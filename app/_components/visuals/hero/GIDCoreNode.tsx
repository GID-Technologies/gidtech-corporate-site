"use client";

import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function GIDCoreNode() {
  const coreRef = useRef<THREE.Group>(null!);

  const cyanRingRef = useRef<THREE.Group>(null!);
  const amberRingRef = useRef<THREE.Group>(null!);

  const coreLightRef = useRef<THREE.PointLight>(null!);
  const energyRef = useRef<THREE.MeshStandardMaterial>(null!);

  useFrame(({ clock }, delta) => {
    const time = clock.elapsedTime;

    const ignition = THREE.MathUtils.clamp((time - 0.25) / 1.6, 0, 1);

    const eased = 1 - Math.pow(1 - ignition, 3);

    if (coreRef.current) {
      const targetScale = 0.92 + eased * 0.08;

      const currentScale = coreRef.current.scale.x;

      const nextScale = THREE.MathUtils.damp(
        currentScale,
        targetScale,
        6,
        delta,
      );

      coreRef.current.scale.setScalar(nextScale);

      /*
       * Very small movement only.
       * This is a machine, not a floating toy.
       */
      coreRef.current.rotation.z = Math.sin(time * 0.08) * 0.003;
    }

    if (cyanRingRef.current) {
      cyanRingRef.current.rotation.z += delta * 0.035 * eased;
    }

    if (amberRingRef.current) {
      amberRingRef.current.rotation.z -= delta * 0.025 * eased;
    }

    if (coreLightRef.current) {
      const ignitionFlash =
        time > 0.65 && time < 1.65
          ? Math.sin(((time - 0.65) / 1) * Math.PI) * 7
          : 0;

      coreLightRef.current.intensity = 2.4 * eased + ignitionFlash;
    }

    if (energyRef.current) {
      const pulse = 1.65 + Math.sin(time * 1.35) * 0.3 * eased;

      energyRef.current.emissiveIntensity = pulse;
    }
  });

  const radialChannels = Array.from({ length: 12 }, (_, index) => index);

  return (
    <group ref={coreRef} scale={0.92} rotation={[-0.18, -0.025, 0]}>
      {/* =======================================================
          LOWEST FOUNDATION
      ======================================================= */}

      <mesh position={[0, 0, -0.54]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[2.55, 2.65, 0.34, 96]} />

        <meshStandardMaterial
          color="#020304"
          metalness={0.94}
          roughness={0.28}
        />
      </mesh>

      {/* physical outer wall */}
      <mesh position={[0, 0, -0.35]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[2.38, 2.5, 0.28, 96]} />

        <meshStandardMaterial
          color="#07090c"
          metalness={0.93}
          roughness={0.23}
        />
      </mesh>

      {/* =======================================================
          RADIAL MACHINE ARCHITECTURE
      ======================================================= */}

      {radialChannels.map((index) => {
        const angle = (index / radialChannels.length) * Math.PI * 2;

        const isMajor = index % 3 === 0;

        return (
          <group key={index} rotation={[0, 0, angle]}>
            {/* radial structural arm */}
            <mesh position={[2.72, 0, -0.26]}>
              <boxGeometry
                args={[
                  isMajor ? 1.25 : 0.88,
                  isMajor ? 0.115 : 0.07,
                  isMajor ? 0.16 : 0.1,
                ]}
              />

              <meshStandardMaterial
                color="#0a0e13"
                metalness={0.92}
                roughness={0.25}
              />
            </mesh>

            {/* channel light */}
            <mesh position={[2.7, 0, -0.16]}>
              <boxGeometry args={[isMajor ? 0.92 : 0.6, 0.018, 0.018]} />

              <meshBasicMaterial
                color={
                  index === 2 || index === 5 || index === 8
                    ? "#fb923c"
                    : "#67e8f9"
                }
                transparent
                opacity={isMajor ? 0.5 : 0.2}
                toneMapped={false}
              />
            </mesh>

            {/* outer hardware node */}
            <mesh
              position={[isMajor ? 3.45 : 3.18, 0, -0.18]}
              rotation={[Math.PI / 2, 0, 0]}
            >
              <cylinderGeometry
                args={[
                  isMajor ? 0.095 : 0.055,
                  isMajor ? 0.095 : 0.055,
                  0.08,
                  20,
                ]}
              />

              <meshStandardMaterial
                color="#17212c"
                emissive={isMajor ? "#164e63" : "#0f172a"}
                emissiveIntensity={isMajor ? 0.65 : 0.15}
                metalness={0.9}
                roughness={0.22}
              />
            </mesh>
          </group>
        );
      })}

      {/* =======================================================
          OUTER MACHINE RING
      ======================================================= */}

      <mesh position={[0, 0, -0.18]}>
        <torusGeometry args={[2.25, 0.16, 20, 128]} />

        <meshStandardMaterial
          color="#080c11"
          metalness={0.95}
          roughness={0.2}
        />
      </mesh>

      <mesh position={[0, 0, -0.06]}>
        <torusGeometry args={[2.02, 0.065, 16, 128]} />

        <meshStandardMaterial
          color="#25303b"
          metalness={0.95}
          roughness={0.16}
        />
      </mesh>

      {/* =======================================================
          CYAN ILLUMINATED ARCS
      ======================================================= */}

      <group ref={cyanRingRef}>
        <mesh position={[0, 0, 0.035]} rotation={[0, 0, 0.1]}>
          <torusGeometry args={[2.05, 0.025, 12, 96, Math.PI * 0.72]} />

          <meshBasicMaterial
            color="#67e8f9"
            transparent
            opacity={0.86}
            toneMapped={false}
          />
        </mesh>

        <mesh position={[0, 0, 0.035]} rotation={[0, 0, Math.PI + 0.26]}>
          <torusGeometry args={[2.05, 0.025, 12, 96, Math.PI * 0.56]} />

          <meshBasicMaterial
            color="#38bdf8"
            transparent
            opacity={0.7}
            toneMapped={false}
          />
        </mesh>
      </group>

      {/* =======================================================
          AMBER OPERATIONAL ARCS
      ======================================================= */}

      <group ref={amberRingRef}>
        <mesh position={[0, 0, 0.045]} rotation={[0, 0, Math.PI * 0.78]}>
          <torusGeometry args={[2.19, 0.018, 12, 72, Math.PI * 0.28]} />

          <meshBasicMaterial
            color="#fb923c"
            transparent
            opacity={0.9}
            toneMapped={false}
          />
        </mesh>

        <mesh position={[0, 0, 0.045]} rotation={[0, 0, Math.PI * 1.68]}>
          <torusGeometry args={[2.19, 0.018, 12, 72, Math.PI * 0.22]} />

          <meshBasicMaterial
            color="#f97316"
            transparent
            opacity={0.75}
            toneMapped={false}
          />
        </mesh>
      </group>

      {/* =======================================================
          SECONDARY RAISED PLATFORM
      ======================================================= */}

      <mesh position={[0, 0, 0.04]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1.72, 1.82, 0.24, 96]} />

        <meshStandardMaterial
          color="#070a0e"
          metalness={0.92}
          roughness={0.22}
        />
      </mesh>

      <mesh position={[0, 0, 0.19]}>
        <torusGeometry args={[1.52, 0.055, 16, 128]} />

        <meshStandardMaterial
          color="#26323d"
          emissive="#0e7490"
          emissiveIntensity={0.22}
          metalness={0.95}
          roughness={0.15}
        />
      </mesh>

      {/* thin inner energy channel */}
      <mesh position={[0, 0, 0.22]}>
        <torusGeometry args={[1.41, 0.016, 10, 128]} />

        <meshBasicMaterial
          color="#67e8f9"
          transparent
          opacity={0.55}
          toneMapped={false}
        />
      </mesh>

      {/* =======================================================
          CENTRAL BUSINESS SYSTEM DISC
      ======================================================= */}

      <mesh position={[0, 0, 0.32]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1.22, 1.32, 0.32, 96]} />

        <meshPhysicalMaterial
          color="#06090d"
          metalness={0.91}
          roughness={0.17}
          clearcoat={0.7}
          clearcoatRoughness={0.16}
        />
      </mesh>

      {/* centre illuminated surface */}
      <mesh position={[0, 0, 0.5]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1.06, 1.06, 0.055, 96]} />

        <meshStandardMaterial
          ref={energyRef}
          color="#07131a"
          emissive="#0e7490"
          emissiveIntensity={1.6}
          metalness={0.82}
          roughness={0.18}
        />
      </mesh>

      {/* centre surface border */}
      <mesh position={[0, 0, 0.55]}>
        <torusGeometry args={[1.04, 0.018, 12, 128]} />

        <meshBasicMaterial
          color="#cffafe"
          transparent
          opacity={0.52}
          toneMapped={false}
        />
      </mesh>

      {/* =======================================================
          GID IDENTITY
      ======================================================= */}

      <Html
        position={[0, 0, 0.64]}
        center
        distanceFactor={8.8}
        zIndexRange={[10, 0]}
        style={{
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        <div className="w-[180px] text-center">
          <p className="text-[38px] font-semibold leading-none tracking-[0.08em] text-white drop-shadow-[0_0_14px_rgba(165,243,252,0.2)]">
            GID
          </p>

          <div className="mx-auto mt-2 h-px w-20 bg-gradient-to-r from-transparent via-cyan-100/45 to-transparent" />

          <p className="mt-2 text-[7px] font-semibold uppercase tracking-[0.32em] text-cyan-50/60">
            Business System
          </p>
        </div>
      </Html>

      {/* =======================================================
          CORE ENERGY / LIGHT
      ======================================================= */}

      <pointLight
        ref={coreLightRef}
        position={[0, 0, 1.55]}
        color="#67e8f9"
        intensity={0}
        distance={9}
        decay={2}
      />

      {/* centre energy point */}
      <mesh position={[0, 0, 0.67]}>
        <sphereGeometry args={[0.055, 24, 24]} />

        <meshBasicMaterial color="#ecfeff" toneMapped={false} />
      </mesh>

      {/* upward energy beam */}
      <mesh position={[0, 1.45, 0.18]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.015, 1.2, 0.015]} />

        <meshBasicMaterial
          color="#67e8f9"
          transparent
          opacity={0.16}
          toneMapped={false}
        />
      </mesh>

      {/* downward energy beam */}
      <mesh position={[0, -1.15, 0.15]}>
        <boxGeometry args={[0.018, 1.8, 0.018]} />

        <meshBasicMaterial
          color="#38bdf8"
          transparent
          opacity={0.22}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}
