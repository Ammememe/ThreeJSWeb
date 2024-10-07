import React, { useState } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('amir_khatiby@hotmail.com');
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
            <img
              src="/assets/meee.png"
              alt="grid-1"
              className="w-full sm:h-[180px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I'm Amir</p>
              <p className="grid-subtext">
                With one year of experience in Cloud Development, I'm aspiring to become a Cloud Architect.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/techstack.png" alt="techstack" className="w-full sm:w-[360px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">My knowledge</p>
              <p className="grid-subtext">I specialize in 
                Cloud Development with AWS and Azure, with skills in backend development using Java, Golang, 
                and database management with MySQL and PostgreSQL.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere={true}
                showGraticules={true}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
              />
            </div>
            <div>
  <p className="grid-headtext">I can work from anywhere</p>
  
  <p className="grid-subtext">I'm currently based in Eksjö, Sweden</p>
  <a href="#contact">
    <Button name="Contact Me" isBeam={true} containerClass="w-full mt-10" />
  </a>
</div>

          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">My passion for development</p>
              <p className="grid-subtext">As a creative person I need a Canvas to create my art, thats 
                what development is for me. I love to create and develop new things.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img src="assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact Me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'}
                  alt={hasCopied ? 'Copied' : 'Copy'}
                  className="cursor-pointer"
                />
                <p className='lg:text-2xl md:text-l font-medium text-gray_gradient text-white'>amir_khatiby@hotmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
