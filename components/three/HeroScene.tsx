"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

const GOLD = "#F5C242";
const NEON = "#8B5CF6";

function Particles({ count = 260 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 5 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6;
      arr[i * 3 + 2] = r * Math.cos(phi) * 0.6 - 1;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color={GOLD} size={0.035} transparent opacity={0.65} sizeAttenuation />
    </points>
  );
}

function GlassPolygon({
  position,
  geometry,
  color,
  speed = 1,
  scale = 1,
}: {
  position: [number, number, number];
  geometry: "icosahedron" | "octahedron" | "torus" | "box";
  color: string;
  speed?: number;
  scale?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.15 * speed;
      ref.current.rotation.y = state.clock.elapsedTime * 0.22 * speed;
    }
  });

  return (
    <Float speed={1.4 * speed} rotationIntensity={0.4} floatIntensity={1.4}>
      <mesh ref={ref} position={position} scale={scale}>
        {geometry === "icosahedron" && <icosahedronGeometry args={[1, 0]} />}
        {geometry === "octahedron" && <octahedronGeometry args={[1, 0]} />}
        {geometry === "torus" && <torusGeometry args={[0.8, 0.28, 16, 48]} />}
        {geometry === "box" && <boxGeometry args={[1.2, 1.2, 1.2]} />}
        <meshPhysicalMaterial
          color={color}
          transparent
          opacity={0.22}
          roughness={0.05}
          metalness={0.1}
          transmission={0.9}
          thickness={1.2}
          ior={1.4}
          emissive={color}
          emissiveIntensity={0.15}
        />
      </mesh>
    </Float>
  );
}

function OrbitRing({ radius, tilt, color, speed }: { radius: number; tilt: number; color: string; speed: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.elapsedTime * speed;
    }
  });
  return (
    <group ref={ref} rotation={[tilt, 0, 0]}>
      <mesh>
        <torusGeometry args={[radius, 0.012, 8, 128]} />
        <meshBasicMaterial color={color} transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

function DeskGlow() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      const mat = ref.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.35 + Math.sin(state.clock.elapsedTime * 1.4) * 0.12;
    }
  });
  return (
    <group position={[0, -2.15, 0]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[5.2, 2.6]} />
        <meshStandardMaterial color="#0c1330" roughness={0.35} metalness={0.4} />
      </mesh>
      <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <ringGeometry args={[2.55, 2.62, 64]} />
        <meshBasicMaterial color={GOLD} transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

function Rig() {
  const { camera, pointer } = useThree();
  useFrame(() => {
    camera.position.x += (pointer.x * 0.6 - camera.position.x) * 0.04;
    camera.position.y += (pointer.y * 0.35 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

// Fallback material shown while the environment/HDRI is loading, or if it
// fails to load entirely (e.g. blocked network request, offline dev server).
// Without this, react-three-fiber's Suspense boundary can leave the canvas
// blank/white until (or unless) the remote environment map resolves.
function FallbackLighting() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <hemisphereLight args={["#8B5CF6", "#050816", 0.5]} />
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 8], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      onCreated={({ gl }) => {
        // Ensure the canvas itself is transparent so a WebGL init failure
        // doesn't show as a solid white block.
        gl.setClearColor(0x000000, 0);
      }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 4, 4]} intensity={40} color={GOLD} />
      <pointLight position={[-4, -2, -3]} intensity={30} color={NEON} />
      <spotLight position={[0, 5, 2]} angle={0.4} intensity={30} color={GOLD} penumbra={1} />

      <Rig />
      <Particles />

      <GlassPolygon position={[-2.6, 1.4, -1]} geometry="icosahedron" color={GOLD} speed={0.8} scale={0.55} />
      <GlassPolygon position={[2.8, 1.7, -2]} geometry="octahedron" color={NEON} speed={1.1} scale={0.6} />
      <GlassPolygon position={[-3.1, -1.2, -2]} geometry="torus" color={NEON} speed={0.7} scale={0.5} />
      <GlassPolygon position={[3, -0.8, -1.5]} geometry="box" color={GOLD} speed={1} scale={0.4} />
      <GlassPolygon position={[0, 2.6, -3]} geometry="icosahedron" color={NEON} speed={0.5} scale={0.35} />

      <OrbitRing radius={2.4} tilt={1.3} color={GOLD} speed={0.15} />
      <OrbitRing radius={2.9} tilt={1.0} color={NEON} speed={-0.1} />

      <DeskGlow />
      <ContactShadows position={[0, -2.14, 0]} opacity={0.5} scale={10} blur={2.4} far={3} color="#000000" />

      {/*
        Environment fetches an HDRI from an external CDN. If that request is
        slow, blocked (ad-block/privacy extension, offline, corporate proxy),
        or simply still in flight, react-three-fiber suspends this branch.
        Wrapping it in its own Suspense boundary (with a safe fallback lighting
        rig) means the rest of the scene still renders immediately instead of
        the whole Canvas silently staying blank/white while it waits.
      */}
      <Suspense fallback={<FallbackLighting />}>
        <Environment preset="city" environmentIntensity={0.4} />
      </Suspense>
    </Canvas>
  );
}