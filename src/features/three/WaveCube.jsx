/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Html,
  OrbitControls,
  Preload,
  useGLTF,
  useProgress,
} from '@react-three/drei';
import shaderdough from './models/shaderdough.glb';

const WaveCube = () => {
  const waveCube = useGLTF(shaderdough);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={1} />

      <primitive object={waveCube.scene} />
    </mesh>
  );
};

const WaveCubeLoader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className='canvas-load'></span>
      <p>{progress.toFixed(2)}%</p>
    </Html>
  );
};

const WaveCubeThree = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      camera={{ position: [10, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<WaveCubeLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <WaveCube />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default WaveCubeThree;
