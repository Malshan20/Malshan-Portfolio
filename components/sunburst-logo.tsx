import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Loader, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

const Model = () => {
  const { scene } = useGLTF('/models/weird_bubble_copy.gltf'); // Path to your .gltf file
  return <primitive object={scene} scale={5} />;
};

const SunburstLogo = () => {
  return (
    <div style={{ height: '100vh', width: '100vw', overflow: 'hidden', position: 'relative' }}>
      {/* Hero Text */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 10,
          textAlign: 'center',
          fontFamily: 'Arial, sans-serif',
          fontSize: '3rem',
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        Malshan Dissanayaka
      </div>

      {/* 3D Canvas */}
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} />
          <Model />
          <Environment preset="studio" />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>

      {/* Loader */}
      <Loader />
    </div>
  );
};

export default SunburstLogo;
