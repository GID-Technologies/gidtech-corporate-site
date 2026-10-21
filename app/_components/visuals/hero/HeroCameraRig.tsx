"use client";

import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const targetPosition = new THREE.Vector3();
const lookTarget = new THREE.Vector3();

export default function HeroCameraRig() {
  useFrame(({ camera, clock }, delta) => {
    const time = clock.elapsedTime;

    const intro = THREE.MathUtils.clamp(time / 2.4, 0, 1);

    const eased = 1 - Math.pow(1 - intro, 3);

    /*
     * IMPORTANT:
     *
     * We are no longer looking almost straight at the machine.
     * The camera sits higher and looks downward into the world.
     *
     * This is what should reveal:
     * - platform depth
     * - board surface
     * - surrounding hardware
     * - routes travelling through the environment
     */
    targetPosition.set(
      1.15 + Math.sin(time * 0.075) * 0.09,
      5.1 + Math.cos(time * 0.065) * 0.07,
      12.8 - eased * 0.45,
    );

    camera.position.lerp(targetPosition, 1 - Math.exp(-delta * 2.2));

    lookTarget.set(1.1, -1.15, -0.85);

    camera.lookAt(lookTarget);
  });

  return null;
}
