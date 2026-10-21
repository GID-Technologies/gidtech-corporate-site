"use client";

import { Edges, RoundedBox } from "@react-three/drei";

type Point = [number, number, number];

type Plate = {
  position: Point;
  size: Point;
  rotation?: Point;
};

const plates: Plate[] = [
  {
    position: [-4.15, 2.05, -0.34],
    size: [4.2, 2.45, 0.26],
    rotation: [0, 0, 0.025],
  },
  {
    position: [4.15, 2.05, -0.34],
    size: [4.2, 2.45, 0.26],
    rotation: [0, 0, -0.018],
  },
  {
    position: [-4.2, -2.05, -0.34],
    size: [4.3, 2.45, 0.26],
    rotation: [0, 0, -0.018],
  },
  {
    position: [4.2, -2.05, -0.34],
    size: [4.3, 2.45, 0.26],
    rotation: [0, 0, 0.022],
  },
];

const rails = [
  {
    position: [-3.55, 0, -0.08] as Point,
    size: [3.2, 0.15, 0.12] as Point,
    accent: "cyan",
  },
  {
    position: [3.55, 0, -0.08] as Point,
    size: [3.2, 0.15, 0.12] as Point,
    accent: "cyan",
  },
  {
    position: [0, 2.85, -0.08] as Point,
    size: [0.15, 2.2, 0.12] as Point,
    accent: "cyan",
  },
  {
    position: [0, -2.85, -0.08] as Point,
    size: [0.15, 2.2, 0.12] as Point,
    accent: "amber",
  },
];

const stations = [
  {
    position: [-4.95, 2.15, 0.05] as Point,
    accent: "cyan",
  },
  {
    position: [4.9, 2, 0.05] as Point,
    accent: "cyan",
  },
  {
    position: [-4.85, -2.1, 0.05] as Point,
    accent: "amber",
  },
  {
    position: [4.9, -2, 0.05] as Point,
    accent: "amber",
  },
];

export default function GIDSystemBoard() {
  return (
    <group position={[0, -0.05, -0.42]}>
      {/* =====================================================
          OPEN QUADRANT PLATES

          NO enclosing giant rectangle.
          The GID world now continues beyond the composition.
      ===================================================== */}

      {plates.map((plate, index) => (
        <RoundedBox
          key={`plate-${index}`}
          args={plate.size}
          radius={0.16}
          smoothness={5}
          position={plate.position}
          rotation={plate.rotation}
        >
          <meshStandardMaterial
            color="#05080c"
            emissive="#04090e"
            emissiveIntensity={0.12}
            metalness={0.88}
            roughness={0.34}
          />

          <Edges linewidth={0.55} color="#64748b" transparent opacity={0.07} />
        </RoundedBox>
      ))}

      {/* =====================================================
          CENTRAL RECESSED PLATFORM

          This creates architecture around GID without
          surrounding the whole scene with one card.
      ===================================================== */}

      <mesh position={[0, 0, -0.22]}>
        <cylinderGeometry args={[3.65, 3.85, 0.22, 96]} />

        <meshStandardMaterial
          color="#030507"
          metalness={0.94}
          roughness={0.28}
        />
      </mesh>

      <mesh position={[0, 0, -0.08]}>
        <torusGeometry args={[3.45, 0.055, 10, 128]} />

        <meshStandardMaterial
          color="#16212b"
          metalness={0.92}
          roughness={0.24}
        />
      </mesh>

      {/* broken cyan architectural arc */}
      <mesh position={[0, 0, -0.01]} rotation={[0, 0, 0.1]}>
        <torusGeometry args={[3.5, 0.018, 8, 100, Math.PI * 0.74]} />

        <meshBasicMaterial
          color="#22d3ee"
          transparent
          opacity={0.28}
          toneMapped={false}
        />
      </mesh>

      {/* broken amber architecture */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI * 1.04]}>
        <torusGeometry args={[3.56, 0.018, 8, 80, Math.PI * 0.35]} />

        <meshBasicMaterial
          color="#f97316"
          transparent
          opacity={0.33}
          toneMapped={false}
        />
      </mesh>

      {/* =====================================================
          PHYSICAL RAILS LEAVING THE CORE
      ===================================================== */}

      {rails.map((rail, index) => {
        const amber = rail.accent === "amber";

        return (
          <group key={`rail-${index}`} position={rail.position}>
            {/* recessed hardware */}
            <RoundedBox args={rail.size} radius={0.04} smoothness={3}>
              <meshStandardMaterial
                color="#060a0e"
                metalness={0.95}
                roughness={0.25}
              />
            </RoundedBox>

            {/* illuminated centre channel */}
            <mesh position={[0, 0, 0.075]}>
              <boxGeometry
                args={[rail.size[0] * 0.84, rail.size[1] * 0.16, 0.018]}
              />

              <meshBasicMaterial
                color={amber ? "#fb923c" : "#67e8f9"}
                transparent
                opacity={0.32}
                toneMapped={false}
              />
            </mesh>
          </group>
        );
      })}

      {/* =====================================================
          MAJOR BUSINESS STATIONS
      ===================================================== */}

      {stations.map((station, index) => {
        const amber = station.accent === "amber";

        return (
          <group key={`station-${index}`} position={station.position}>
            {/* platform */}
            <RoundedBox args={[1.55, 1.05, 0.22]} radius={0.13} smoothness={4}>
              <meshStandardMaterial
                color="#060a0e"
                metalness={0.9}
                roughness={0.27}
              />

              <Edges
                linewidth={0.45}
                color={amber ? "#9a3412" : "#164e63"}
                transparent
                opacity={0.18}
              />
            </RoundedBox>

            {/* raised machine block */}
            <RoundedBox
              args={[0.82, 0.58, 0.38]}
              radius={0.1}
              smoothness={4}
              position={[0, 0, 0.28]}
            >
              <meshStandardMaterial
                color="#090e14"
                emissive={amber ? "#431407" : "#083344"}
                emissiveIntensity={0.38}
                metalness={0.91}
                roughness={0.22}
              />
            </RoundedBox>

            {/* station light strip */}
            <mesh position={[0, -0.32, 0.49]}>
              <boxGeometry args={[0.62, 0.025, 0.018]} />

              <meshBasicMaterial
                color={amber ? "#fb923c" : "#67e8f9"}
                transparent
                opacity={0.72}
                toneMapped={false}
              />
            </mesh>

            {/* status indicator */}
            <mesh position={[0.29, 0.13, 0.5]}>
              <sphereGeometry args={[0.045, 16, 16]} />

              <meshBasicMaterial
                color={amber ? "#fed7aa" : "#cffafe"}
                toneMapped={false}
              />
            </mesh>
          </group>
        );
      })}

      {/* =====================================================
          LONG DISTANT ARCHITECTURAL RAILS
      ===================================================== */}

      {[
        [-6.3, 3.45, 2.7, "cyan"],
        [6.3, 3.45, 2.7, "cyan"],
        [-6.3, -3.45, 2.7, "amber"],
        [6.3, -3.45, 2.7, "amber"],
      ].map(([x, y, width, accent], index) => (
        <group
          key={`outer-${index}`}
          position={[x as number, y as number, -0.3]}
        >
          <mesh>
            <boxGeometry args={[width as number, 0.06, 0.08]} />

            <meshStandardMaterial
              color="#070a0e"
              metalness={0.9}
              roughness={0.3}
            />
          </mesh>

          <mesh position={[0, 0, 0.055]}>
            <boxGeometry args={[(width as number) * 0.75, 0.012, 0.012]} />

            <meshBasicMaterial
              color={accent === "amber" ? "#f97316" : "#22d3ee"}
              transparent
              opacity={0.18}
              toneMapped={false}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}
