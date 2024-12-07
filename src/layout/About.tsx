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
    <section className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Hi, I'm Vangelis</p>
              <p className="grid-subtext">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
                dignissimos fugiat itaque provident quas voluptas!</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:w-[276px] h-fit object-contain" />
            <div className="grid-headtext">Lorem ipsum.</div>
            <div className="grid-subtext">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, repellendus!
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur,
                itaque.
              </p>
              <p className="grid-subtext">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolore est
                eveniet necessitatibus neque nesciunt quisquam rem repudiandae sit voluptatem?
              </p>
              <Button name="Contact me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid3.png" alt="" className="w-full sm:h-[266px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Lorem ipsum dolor sit amet.</p>
              <p className="grid-subtext">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
                dignissimos fugiat itaque provident quas voluptas!</p>
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
