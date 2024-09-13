import { easing } from 'maath'; // Assuming maath is for easing functions
import React, { useRef } from 'react'; // Corrected useRef import
import { useFrame } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive'; // For checking mobile devices

const HeroCamera = ({ children }) => {
  const groupRef = useRef();

  // Check if the device is mobile
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useFrame(({ camera, delta, pointer }) => {
    // Smoothly move camera position
    easing.damp3(camera.position, [0, 0, 20], 0.25, delta);

    if (!isMobile && groupRef.current) {
      // Smoothly rotate the group when not on mobile
      easing.dampE(
        groupRef.current.rotation, 
        [-pointer.y / 3, -pointer.x / 5, 0], // Added the missing z-axis value for rotation
        0.25, 
        delta
      );
    }
  });

  return (
    <group ref={groupRef} scale={isMobile ? 1 : 1.3}>
      {children}
    </group>
  );
};

export default HeroCamera;
