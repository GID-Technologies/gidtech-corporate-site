"use client";

import { Instance, Instances, Segment, Segments } from "@react-three/drei";
import { useMemo } from "react";

type Point = [number, number, number];

type WorldModule = {
  id: number;
  position: Point;
  scale: Point;
  accent: "cyan" | "amber" | "none";
};

function seededRandom(seed: number) {
  let value = seed;

  return () => {
    value += 0x6d2b79f5;

    let t = value;

    t = Math.imul(t ^ (t >>> 15), t | 1);

    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);

    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export default function BusinessWorldLandscape() {
  const modules = useMemo<WorldModule[]>(() => {
    const random = seededRandom(2408);

    const result: WorldModule[] = [];

    let id = 0;

    /*
     * Build a deterministic technology landscape.
     *
     * We intentionally leave the centre relatively clear
     * because the GID Business System owns that space.
     */
    for (let row = -5; row <= 5; row++) {
      for (let column = -8; column <= 8; column++) {
        const x = column * 0.82 + (random() - 0.5) * 0.18;

        const y = row * 0.72 + (random() - 0.5) * 0.16;

        const distanceFromCore = Math.sqrt(x * x + y * 1.2 * (y * 1.2));

        /*
         * Leave an architectural void around GID.
         */
        if (distanceFromCore < 3.4) {
          continue;
        }

        /*
         * Do not populate every grid point.
         * Controlled gaps make the world more believable.
         */
        if (random() < 0.34) {
          continue;
        }

        const width = 0.28 + random() * 0.5;

        const height = 0.18 + random() * 0.34;

        const depth = 0.16 + random() * 0.5;

        const accentRoll = random();

        let accent: WorldModule["accent"] = "none";

        if (accentRoll > 0.83) {
          accent = "cyan";
        } else if (accentRoll < 0.08) {
          accent = "amber";
        }

        result.push({
          id: id++,
          position: [x, y, -0.58 + depth / 2],
          scale: [width, height, depth],
          accent,
        });
      }
    }

    return result;
  }, []);

  const cyanModules = modules.filter((module) => module.accent === "cyan");

  const amberModules = modules.filter((module) => module.accent === "amber");

  const worldTraces = useMemo(
    () => [
      {
        start: [-7.4, 3.25, -0.36] as Point,
        end: [-4.25, 3.25, -0.36] as Point,
        color: "#164e63",
      },
      {
        start: [-7.1, 2.45, -0.36] as Point,
        end: [-5.2, 2.45, -0.36] as Point,
        color: "#164e63",
      },
      {
        start: [-6.6, -2.8, -0.36] as Point,
        end: [-4.2, -2.8, -0.36] as Point,
        color: "#7c2d12",
      },
      {
        start: [-7.6, -3.45, -0.36] as Point,
        end: [-5.1, -3.45, -0.36] as Point,
        color: "#164e63",
      },

      {
        start: [4.2, 3.1, -0.36] as Point,
        end: [7.35, 3.1, -0.36] as Point,
        color: "#164e63",
      },
      {
        start: [5.15, 2.35, -0.36] as Point,
        end: [7.55, 2.35, -0.36] as Point,
        color: "#164e63",
      },
      {
        start: [4.25, -2.65, -0.36] as Point,
        end: [7.15, -2.65, -0.36] as Point,
        color: "#7c2d12",
      },
      {
        start: [5.0, -3.5, -0.36] as Point,
        end: [7.7, -3.5, -0.36] as Point,
        color: "#164e63",
      },

      {
        start: [-6.3, 3.25, -0.36] as Point,
        end: [-6.3, 1.85, -0.36] as Point,
        color: "#164e63",
      },
      {
        start: [-5.35, -1.9, -0.36] as Point,
        end: [-5.35, -3.45, -0.36] as Point,
        color: "#7c2d12",
      },
      {
        start: [6.15, 3.1, -0.36] as Point,
        end: [6.15, 1.7, -0.36] as Point,
        color: "#164e63",
      },
      {
        start: [5.75, -1.7, -0.36] as Point,
        end: [5.75, -3.5, -0.36] as Point,
        color: "#7c2d12",
      },

      /*
       * Long architectural rails.
       */
      {
        start: [-8, 4.0, -0.5] as Point,
        end: [-3.5, 4.0, -0.5] as Point,
        color: "#334155",
      },
      {
        start: [3.3, 4.0, -0.5] as Point,
        end: [8, 4.0, -0.5] as Point,
        color: "#334155",
      },
      {
        start: [-8, -4.0, -0.5] as Point,
        end: [-3.5, -4.0, -0.5] as Point,
        color: "#334155",
      },
      {
        start: [3.4, -4.0, -0.5] as Point,
        end: [8, -4.0, -0.5] as Point,
        color: "#334155",
      },
    ],
    [],
  );

  return (
    <group position={[0, 0, -0.25]}>
      {/* =====================================================
          MOTHERBOARD TERRAIN
      ===================================================== */}

      <Instances limit={modules.length} range={modules.length}>
        <boxGeometry />

        <meshStandardMaterial
          color="#05080c"
          metalness={0.88}
          roughness={0.32}
        />

        {modules.map((module) => (
          <Instance
            key={module.id}
            position={module.position}
            scale={module.scale}
          />
        ))}
      </Instances>

      {/* =====================================================
          CYAN HARDWARE INDICATORS
      ===================================================== */}

      <Instances limit={cyanModules.length} range={cyanModules.length}>
        <boxGeometry />

        <meshStandardMaterial
          color="#cffafe"
          emissive="#22d3ee"
          emissiveIntensity={1.4}
          metalness={0.65}
          roughness={0.2}
          toneMapped={false}
        />

        {cyanModules.map((module) => (
          <Instance
            key={`cyan-${module.id}`}
            position={[
              module.position[0],
              module.position[1],
              module.position[2] + module.scale[2] / 2 + 0.035,
            ]}
            scale={[module.scale[0] * 0.55, 0.025, 0.018]}
          />
        ))}
      </Instances>

      {/* =====================================================
          AMBER HARDWARE INDICATORS
      ===================================================== */}

      <Instances limit={amberModules.length} range={amberModules.length}>
        <boxGeometry />

        <meshStandardMaterial
          color="#fed7aa"
          emissive="#f97316"
          emissiveIntensity={1.25}
          metalness={0.65}
          roughness={0.2}
          toneMapped={false}
        />

        {amberModules.map((module) => (
          <Instance
            key={`amber-${module.id}`}
            position={[
              module.position[0],
              module.position[1],
              module.position[2] + module.scale[2] / 2 + 0.035,
            ]}
            scale={[module.scale[0] * 0.55, 0.025, 0.018]}
          />
        ))}
      </Instances>

      {/* =====================================================
          LANDSCAPE CIRCUIT INFRASTRUCTURE
      ===================================================== */}

      <Segments limit={worldTraces.length} lineWidth={0.7}>
        {worldTraces.map((trace, index) => (
          <Segment
            key={index}
            start={trace.start}
            end={trace.end}
            color={trace.color}
          />
        ))}
      </Segments>

      {/* =====================================================
          MAJOR OUTER HARDWARE STATIONS
      ===================================================== */}

      {[
        [-6.6, 2.7, 0],
        [-6.25, -2.35, 0],
        [6.5, 2.6, 0],
        [6.3, -2.4, 0],
      ].map(([x, y], index) => {
        const amber = index === 1 || index === 3;

        return (
          <group key={`station-${index}`} position={[x, y, -0.12]}>
            {/* foundation */}
            <mesh>
              <boxGeometry args={[1.15, 0.72, 0.2]} />

              <meshStandardMaterial
                color="#05080c"
                metalness={0.92}
                roughness={0.25}
              />
            </mesh>

            {/* raised module */}
            <mesh position={[0, 0, 0.18]}>
              <boxGeometry args={[0.72, 0.42, 0.26]} />

              <meshStandardMaterial
                color="#090d13"
                emissive={amber ? "#431407" : "#083344"}
                emissiveIntensity={0.35}
                metalness={0.9}
                roughness={0.22}
              />
            </mesh>

            {/* active edge */}
            <mesh position={[0, -0.22, 0.33]}>
              <boxGeometry args={[0.5, 0.025, 0.018]} />

              <meshBasicMaterial
                color={amber ? "#fb923c" : "#67e8f9"}
                transparent
                opacity={0.72}
                toneMapped={false}
              />
            </mesh>

            {/* status light */}
            <mesh position={[0.27, 0.12, 0.34]}>
              <sphereGeometry args={[0.04, 16, 16]} />

              <meshBasicMaterial
                color={amber ? "#fed7aa" : "#cffafe"}
                toneMapped={false}
              />
            </mesh>
          </group>
        );
      })}

      {/* =====================================================
          DISTANT VERTICAL SIGNAL STRUCTURES
      ===================================================== */}

      {[
        [-6.8, 3.7, 0.55],
        [-5.5, -3.65, 0.35],
        [6.85, 3.55, 0.5],
        [6.1, -3.7, 0.4],
      ].map(([x, y, height], index) => {
        const amber = index === 1 || index === 3;

        return (
          <group key={`tower-${index}`} position={[x, y, 0]}>
            <mesh position={[0, 0, height / 2]}>
              <boxGeometry args={[0.025, 0.025, height]} />

              <meshBasicMaterial
                color={amber ? "#fb923c" : "#67e8f9"}
                transparent
                opacity={0.28}
                toneMapped={false}
              />
            </mesh>

            <mesh position={[0, 0, height + 0.03]}>
              <sphereGeometry args={[0.045, 16, 16]} />

              <meshBasicMaterial
                color={amber ? "#fed7aa" : "#cffafe"}
                toneMapped={false}
              />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}
