import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader.tsx';
import DemoComputer from '../components/DemoComputer.tsx';
import { mySkills } from '../constants';

enum DIRECTION {
  PREVIOUS = 'previous',
  NEXT = 'next',
}

const Skills = () => {
  const [selectedSkillIndex, setSelectedSkillIndex] = useState(0);

  const currentSkill = mySkills[selectedSkillIndex];

  const handleNavigation = (direction: DIRECTION) => {
    setSelectedSkillIndex((prevIndex) => {
      if (direction === DIRECTION.PREVIOUS) {
        return prevIndex === 0 ? mySkills.length - 1 : prevIndex - 1;
      }
      return prevIndex === mySkills.length - 1 ? 0 : prevIndex + 1;
    });
  };

  return (
    <section className="c-space my-20">
      <p className="head-text">My skills</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flelx flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img src={currentSkill.spotlight} alt="Spotlight" className="w-full h-96 object-cover rounded-xl" />
          </div>
          <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentSkill.logoStyle}>
            <img src={currentSkill.logo} alt="Logo" className="w-10 h-10 shadow-sm" />
          </div>
          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentSkill.title}
            </p>
            <p className="animatedText">
              {currentSkill.desc}
            </p>
            <p className="animatedText">
              {currentSkill.subdesc}
            </p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentSkill.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center mt-7">
            <button className="arrow-btn" onClick={() => handleNavigation(DIRECTION.PREVIOUS)}>
              <img src="/assets/left-arrow.png" alt="Left arrow" className="w-4 h-4" />
            </button>
            <button className="arrow-btn" onClick={() => handleNavigation(DIRECTION.NEXT)}>
              <img src="/assets/right-arrow.png" alt="Right arrow" className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">

          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.5, 0]}>
                  <DemoComputer texture={currentSkill.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};
export default Skills;
