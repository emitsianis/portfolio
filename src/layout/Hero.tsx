import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import MyRoom from '../components/MyRoom.tsx';
import { Suspense } from 'react';
import CanvasLoader from '../components/CanvasLoader.tsx';
import { Leva, useControls } from 'leva';

const Hero = () => {
  const controls = useControls('HackerRoom', {
    positionX: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    positionY: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    positionZ: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    rotationX: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    rotationY: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    rotationZ: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    scale: {
      value: 1,
      min: 0.01,
      max: 10,
    },
  });

  console.log(controls);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Vangelis <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Creating all kinds of software</p>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Leva />
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <MyRoom
              position={[2, -8, 2]}
              rotation={[0, -Math.PI, 0]}
              scale={[0.1, 0.1, 0.1]}
            />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};
export default Hero;