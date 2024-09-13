import React from 'react';
import Globe from "react-globe.gl";

const About = () => {
  return (
    <section className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
        <div className="grid-container">
          <img
            src="/assets/grid1.png"
            alt="grid-1"
            className="w-full sm:h-[276px] h-fit object-contain" // Fixed '276ox' to '276px'
          />
          <div>
            <p className="grid-headtext">Hi, I'm Amir</p>
            <p className="grid-subtext"> With 1 year of experience, I'm garbage but trying to become the best in backend development with a focus on Cloud</p>
          </div>
        </div>
      </div>
        <div className="col-span-1 xl:row-span-3">
            <div className = "grid-container">
                <img src='assets/grid2.png' alt='grid-2' className='w-full sm:w-[276px] h-fit object-contain'/>
                <div>
                    <p className="grid-headtext">My Skills</p>
                    <p className= "grid-subtext"> I SPecialize in Cloud Development using AWS & Azure</p>
                </div>
            </div>
        
        </div>
        <div className= "col-span-1 xl:row-span-4">
            <div className="grid-container">
                <div className="rounded-3xl w-full sm:h-[326px] h-fit flex 
                justify-center items-center">
                    <Globe
                    heigh={326}
                    width={326}
                    backgroundColor="rgba(0,0,0,0)"
                    backgroundImageOpacity={0.5}
                    showAtmosphere={true}
                    showGraticules={true}
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                    bumpImageUrl={"//unpkg.com/three-globe/example/img/earth-night.jpg"}

                    />
                </div>
            
            </div>
        </div>
    </div>
    </section>
  );
};

export default About;
