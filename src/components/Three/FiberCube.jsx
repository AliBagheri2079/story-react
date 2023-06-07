/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, OrbitControls, Preload, useProgress } from '@react-three/drei';

const CubeFallbackLoader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className='canvas-load'></span>
      <p style={{ fontSize: 14, color: 'red' }}>{progress.toFixed(2)}%</p>
    </Html>
  );
};

const Cube = () => {
  const meshRef = useRef(null);

  /*
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01;
    } else return;
  });
  */

  return (
    <Suspense fallback={<CubeFallbackLoader />}>
      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <ambientLight intensity={1} />
      <pointLight />

      <mesh
        ref={meshRef}
        scale={0.75}
        position={[0, 0, 0]}
        rotation={[-0.01, 0.2, 1]}
      >
        <boxGeometry attach='geometry' args={[2, 2, 2]} />
        <meshStandardMaterial attach='material' color='pink' />
      </mesh>
    </Suspense>
  );
};

const ThreeFiberCube = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [10, 2, 2], fov: 30 }}
    >
      <Cube />
      <Preload all />
    </Canvas>
  );
};

export default ThreeFiberCube;
