import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';

import CanvasLoader from '../components/CanvasLoader';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants/index';
import HeroCamera from '../components/HeroCamera';
import Button from '../components/Button';

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="h-[50vh] w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col mt-32 sm:mt-36 c-space gap-3 text-center">
        {/* Fade-in effect for "Hi, I'm Amir" */}
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans animate-fadeIn">
          Hi, I'm Amir <span className="waving-hand">👋🏼</span>
        </p>
        {/* "Developing Cloud Infrastructure" stays hidden first and then fades in */}
        <p
          className="hero_tag text-gray_gradient opacity-0 animate-fadeIn"
          style={{ animationDelay: '0.6s' }} // Set the delay for the second animation
        >
          Developing Cloud Infrastructure
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HeroCamera isMobile={isMobile} />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let's Work Together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
