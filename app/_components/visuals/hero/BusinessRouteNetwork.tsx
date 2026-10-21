"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { HERO_TIMELINE } from "./heroTimeline";

type Point = [number, number, number];

type RouteDefinition = {
  id: string;
  points: Point[];
  color: string;
  secondaryColor: string;
  startAt: number;
  speed: number;
  width?: number;
};

const routes: RouteDefinition[] = [
  {
    id: "customer",
    color: "#67e8f9",
    secondaryColor: "#164e63",
    startAt: HERO_TIMELINE.businessFlow,
    speed: 0.105,
    points: [
      [0.15, 4.6, -0.2],
      [0.15, 3.65, -0.15],
      [0.05, 2.85, -0.05],
      [0, 2.2, 0.1],
    ],
  },

  {
    id: "enquiry",
    color: "#67e8f9",
    secondaryColor: "#155e75",
    startAt: HERO_TIMELINE.businessFlow + 0.25,
    speed: 0.12,
    points: [
      [-5.1, 2.7, -0.22],
      [-4.2, 2.7, -0.2],
      [-4.2, 2.05, -0.14],
      [-3.05, 2.05, -0.08],
      [-2.25, 1.45, 0.08],
    ],
  },

  {
    id: "order",
    color: "#fb923c",
    secondaryColor: "#7c2d12",
    startAt: HERO_TIMELINE.businessFlow + 0.6,
    speed: 0.115,
    points: [
      [-5.3, -1.5, -0.22],
      [-4.25, -1.5, -0.18],
      [-4.25, -1.05, -0.12],
      [-3.05, -1.05, -0.04],
      [-2.2, -0.7, 0.12],
    ],
  },

  {
    id: "inventory",
    color: "#67e8f9",
    secondaryColor: "#164e63",
    startAt: HERO_TIMELINE.businessFlow + 0.95,
    speed: 0.11,
    points: [
      [5.25, 2.45, -0.2],
      [4.25, 2.45, -0.17],
      [4.25, 1.85, -0.1],
      [3.15, 1.85, -0.03],
      [2.25, 1.25, 0.12],
    ],
  },

  {
    id: "invoice",
    color: "#fb923c",
    secondaryColor: "#7c2d12",
    startAt: HERO_TIMELINE.businessFlow + 1.3,
    speed: 0.105,
    points: [
      [5.35, -1.45, -0.22],
      [4.25, -1.45, -0.17],
      [4.25, -1.0, -0.1],
      [3.15, -1.0, -0.02],
      [2.15, -0.65, 0.12],
    ],
  },

  {
    id: "payment",
    color: "#fb923c",
    secondaryColor: "#9a3412",
    startAt: HERO_TIMELINE.businessFlow + 1.65,
    speed: 0.12,
    points: [
      [0.6, -4.5, -0.18],
      [0.55, -3.6, -0.14],
      [0.4, -2.85, -0.08],
      [0.2, -2.2, 0.05],
    ],
  },

  {
    id: "intelligence",
    color: "#22d3ee",
    secondaryColor: "#155e75",
    startAt: HERO_TIMELINE.intelligence,
    speed: 0.095,
    width: 0.07,
    points: [
      [0.2, -2.05, 0.08],
      [0.2, -2.8, 0.02],
      [0.3, -3.55, -0.05],
      [0.3, -4.3, -0.15],
    ],
  },
];

function RouteChannel({ route }: { route: RouteDefinition }) {
  const pulseRef = useRef<THREE.Mesh>(null!);

  const baseMaterialRef = useRef<THREE.MeshStandardMaterial>(null!);

  const lightMaterialRef = useRef<THREE.MeshBasicMaterial>(null!);

  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(
      route.points.map(([x, y, z]) => new THREE.Vector3(x, y, z)),
      false,
      "centripetal",
    );
  }, [route.points]);

  const baseGeometry = useMemo(
    () => new THREE.TubeGeometry(curve, 64, route.width ?? 0.045, 10, false),
    [curve, route.width],
  );

  const lightGeometry = useMemo(
    () =>
      new THREE.TubeGeometry(
        curve,
        64,
        (route.width ?? 0.045) * 0.28,
        8,
        false,
      ),
    [curve, route.width],
  );

  const point = useMemo(() => new THREE.Vector3(), []);

  useFrame(({ clock }) => {
    if (!pulseRef.current) return;

    const time = clock.elapsedTime;

    const localTime = time - route.startAt;

    /*
     * Channel wakes slightly before
     * the travelling signal arrives.
     */
    const channelWake = THREE.MathUtils.smoothstep(localTime, -0.45, 0.35);

    if (baseMaterialRef.current) {
      baseMaterialRef.current.emissiveIntensity = 0.08 + channelWake * 0.55;
    }

    if (lightMaterialRef.current) {
      lightMaterialRef.current.opacity = channelWake * 0.74;
    }

    if (localTime < 0) {
      pulseRef.current.visible = false;
      return;
    }

    pulseRef.current.visible = true;

    const progress = (localTime * route.speed) % 1;

    curve.getPointAt(progress, point);

    pulseRef.current.position.copy(point);
  });

  return (
    <group>
      {/* recessed channel */}
      <meshStandardMaterial
        ref={baseMaterialRef}
        color="#05080b"
        emissive={route.secondaryColor}
        emissiveIntensity={0.08}
        metalness={0.9}
        roughness={0.28}
      />

      {/* illuminated centre */}
      <meshBasicMaterial
        ref={lightMaterialRef}
        color={route.color}
        transparent
        opacity={0}
        toneMapped={false}
      />

      {/* travelling energy packet */}
      <mesh ref={pulseRef} visible={false}>
        <sphereGeometry args={[0.075, 18, 18]} />

        <meshStandardMaterial
          color="#ffffff"
          emissive={route.color}
          emissiveIntensity={4.2}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}

export default function BusinessRouteNetwork() {
  return (
    <group position={[0, 0, 0.26]}>
      {routes.map((route) => (
        <RouteChannel key={route.id} route={route} />
      ))}

      {/* infrastructure connection points */}

      {[
        [-5.1, 2.7],
        [-5.3, -1.5],
        [5.25, 2.45],
        [5.35, -1.45],
        [0.15, 4.6],
        [0.6, -4.5],
      ].map(([x, y], index) => {
        const amber = index === 1 || index === 3 || index === 5;

        return (
          <group key={`${x}-${y}`} position={[x, y, 0]}>
            {/* physical socket */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.16, 0.2, 0.1, 28]} />

              <meshStandardMaterial
                color="#071016"
                metalness={0.95}
                roughness={0.22}
              />
            </mesh>

            {/* socket ring */}
            <mesh>
              <torusGeometry args={[0.17, 0.018, 8, 32]} />

              <meshBasicMaterial
                color={amber ? "#fb923c" : "#67e8f9"}
                transparent
                opacity={0.55}
                toneMapped={false}
              />
            </mesh>

            {/* socket energy */}
            <mesh position={[0, 0, 0.04]}>
              <sphereGeometry args={[0.047, 16, 16]} />

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
