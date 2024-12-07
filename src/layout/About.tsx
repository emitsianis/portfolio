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
                I am a software engineer based in Greece! Owner of an Electric Engineering
                degree and of a passion to always follow the cutting edge of software technology.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:w-[276px] h-fit object-contain" />
            <div className="grid-headtext">Web dev + more!</div>
            <div className="grid-subtext">
              With years of experience on my back, I can create top-grade web apps taking advantage of the ReactJS
              ecosystem.
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
                Software development is a great way of bringing people around the world together. Let's connect and
                build the next big thing together!
              </p>
              <Button name="Contact me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid3.png" alt="" className="w-full sm:h-[266px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Jack of all trades (kinda)</p>
              <p className="grid-subtext">
                Web development, mobile development, game development, Linux and (recently) data science and LLM
                engineering! Also gaming and some attempts at playing guitar. Skillset includes: JS, TS, Node, React,
                React Native, Futter, Angular, Golang, Python, Langchain, Docker, Kubernetes, Git, Linux, SQL, NoSQL,
                WoW, Dark Souls and more!
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
