"use client";

import { Html } from "@react-three/drei";

type Point = [number, number, number];

type TelemetryItem = {
  position: Point;
  type: string;
  value: string;
  meta: string;
};

const telemetry: TelemetryItem[] = [
  {
    position: [-4.9, 2.45, -0.8],
    type: "Enquiries",
    value: "12 new",
    meta: "Customer activity",
  },
  {
    position: [5, 2.15, -1.2],
    type: "Orders",
    value: "#GID-248",
    meta: "Processing",
  },
  {
    position: [-4.75, -2.35, -1.15],
    type: "Inventory",
    value: "Low stock",
    meta: "Attention required",
  },
  {
    position: [4.95, -2.25, -0.65],
    type: "Invoice",
    value: "₦420K",
    meta: "Awaiting payment",
  },
];

function TelemetryReadout({ item }: { item: TelemetryItem }) {
  return (
    <group position={item.position}>
      {/* anchor */}
      <mesh>
        <sphereGeometry args={[0.055, 16, 16]} />

        <meshStandardMaterial
          color="#ecfeff"
          emissive="#67e8f9"
          emissiveIntensity={3}
          toneMapped={false}
        />
      </mesh>

      {/* physical stem */}
      <mesh position={[0.28, 0, -0.01]}>
        <boxGeometry args={[0.5, 0.012, 0.012]} />

        <meshBasicMaterial color="#94a3b8" transparent opacity={0.2} />
      </mesh>

      <Html
        position={[0.75, 0, 0]}
        center
        distanceFactor={8.8}
        style={{
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        <div className="w-[136px]">
          <div className="flex items-center gap-2">
            <span className="h-[3px] w-[3px] rounded-full bg-cyan-100/60 shadow-[0_0_8px_rgba(207,250,254,0.7)]" />

            <p className="text-[7px] font-semibold uppercase tracking-[0.3em] text-white/25">
              {item.type}
            </p>
          </div>

          <p className="mt-2 whitespace-nowrap text-[11px] font-semibold tracking-[-0.02em] text-white/65">
            {item.value}
          </p>

          <div className="mt-2 h-px w-full bg-gradient-to-r from-white/15 to-transparent" />

          <p className="mt-1.5 whitespace-nowrap text-[7px] uppercase tracking-[0.15em] text-white/20">
            {item.meta}
          </p>
        </div>
      </Html>
    </group>
  );
}

export default function BusinessTelemetry() {
  return (
    <group>
      {telemetry.map((item) => (
        <TelemetryReadout key={item.type} item={item} />
      ))}
    </group>
  );
}
