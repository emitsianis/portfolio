import Globe from 'react-globe.gl';
import Button from '../components/Button.tsx';
import { useState } from 'react';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const N = 20;
  const arcsData = [...Array(N).keys()].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
    color: [['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)], ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]],
  }));

  const handeCopy = () => {
    navigator.clipboard.writeText('ev.mitsianis@gmail.com');

    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Hi, I'm Vangelis</p>
              <p className="grid-subtext">
                Software engineer, passionate gamer, and digital creator. I specialize in full-stack web development,
                blending clean design with functional code to build seamless user experiences. From dynamic applications
                to efficient systems and cutting-edge tech like Golang, data engineering, and LLMs—I bring ideas to
                life.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:w-[276px] h-fit object-contain" />
            <div className="grid-headtext">Interactive UIs with React</div>
            <div className="grid-subtext">
              I build fast, scalable, and modern interfaces using React. From reusable components to optimized
              performance with hooks and Next.js, I ensure intuitive and efficient user experiences.
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm-h[326px] h-fit justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                arcsData={arcsData}
                arcColor={'color'}
                arcDashLength={() => Math.random()}
                arcDashGap={() => Math.random()}
                arcDashAnimateTime={() => Math.random() * 4000 + 500}
              />
            </div>
            <div>
              <p className="grid-headtext">
                Let's connect
              </p>
              <p className="grid-subtext">
                I believe the best projects come to life through collaboration. Whether you’re looking to create
                innovative software, optimize existing systems, or explore new technologies, I’m always eager to connect
                and share ideas. Feel free to reach out—whether it’s to discuss a project, exchange knowledge, or simply
                talk about
                gaming and tech trends. Let’s turn ideas into impactful solutions.
              </p>
              <a href="#contact" className="w-full mt-10 block">
                <Button name="Contact me" isBeam containerClass="w-full" />
              </a>
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid3.png" alt="" className="w-full sm:h-[266px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Continuously growing through technology</p>
              <p className="grid-subtext">
                For me, technology is a journey of constant learning and self-improvement. I’m always exploring new
                tools and concepts—whether it’s diving into LLMs, understanding blockchain’s real-world applications, or
                experimenting with game and mobile development.
                Every project I take on is an opportunity to challenge myself, refine my skills, and create something
                better than before. My focus is on growing with each experience and
                pushing the boundaries of what I can achieve.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt=""
              className="w-full md:h-[126px] sm:h=[276px] h-fit object-contain sm:object-top"
            />
            <div>
              <div className="space-y-2">
                <p className="grid-subtext text-center">Contact me</p>
                <div className="copy-container" onClick={handeCopy}>
                  <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy" />
                  <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                    ev.mitsianis@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
