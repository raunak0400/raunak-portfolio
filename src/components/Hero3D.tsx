import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial, Sphere, Torus as TorusGeometry } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.5}>
      <MeshDistortMaterial
        color="#00E5FF"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
}

function Torus() {
  const torusRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (torusRef.current) {
      torusRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      torusRef.current.rotation.z = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <mesh ref={torusRef} position={[0, 0, 0]}>
      <torusGeometry args={[3, 0.4, 16, 100]} />
      <meshStandardMaterial
        color="#8A5CFF"
        emissive="#8A5CFF"
        emissiveIntensity={0.5}
        wireframe
        transparent
        opacity={0.6}
      />
    </mesh>
  );
}

function OrbitingRings() {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = time * 0.3;
      ring1Ref.current.rotation.y = time * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = time * -0.25;
      ring2Ref.current.rotation.z = time * 0.15;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.y = time * 0.4;
      ring3Ref.current.rotation.z = time * -0.2;
    }
  });

  return (
    <>
      <mesh ref={ring1Ref} position={[0, 0, 0]}>
        <torusGeometry args={[3.5, 0.05, 16, 100]} />
        <meshStandardMaterial
          color="#00FFC6"
          emissive="#00FFC6"
          emissiveIntensity={1}
        />
      </mesh>
      <mesh ref={ring2Ref} position={[0, 0, 0]}>
        <torusGeometry args={[4, 0.05, 16, 100]} />
        <meshStandardMaterial
          color="#00E5FF"
          emissive="#00E5FF"
          emissiveIntensity={1}
        />
      </mesh>
      <mesh ref={ring3Ref} position={[0, 0, 0]}>
        <torusGeometry args={[4.5, 0.05, 16, 100]} />
        <meshStandardMaterial
          color="#8A5CFF"
          emissive="#8A5CFF"
          emissiveIntensity={1}
        />
      </mesh>
    </>
  );
}

export const Hero3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#00FFC6" />
        <pointLight position={[10, 10, 5]} intensity={1} color="#00E5FF" />
        <pointLight position={[0, -10, 0]} intensity={0.8} color="#8A5CFF" />
        
        <AnimatedSphere />
        <Torus />
        <OrbitingRings />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
        />
      </Canvas>
    </div>
  );
};
