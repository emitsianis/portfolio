import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import MyRoom from '../components/MyRoom.tsx';
import { Suspense } from 'react';
import CanvasLoader from '../components/CanvasLoader.tsx';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants';
import Target from '../components/Target.tsx';
import ReactLogo from '../components/ReactLogo.tsx';
import Cube from '../components/Cube.tsx';
import HeroCamera from '../components/HeroCamera.tsx';
import LinuxLogo from '../components/LinuxLogo.tsx';

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Vangelis <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Creating all kinds of software</p>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HeroCamera isTablet={isTablet}>
              <MyRoom
                position={sizes.deskPosition}
                rotation={[0, -Math.PI, 0]}
                scale={sizes.deskScale}
              />
            </HeroCamera>
            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <LinuxLogo position={sizes.linuxLogoPosition} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};
export default Hero;
