import React, { useRef } from 'react';
import { useGLTF, Float } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function AwsLogo(props) {
  const { nodes, materials } = useGLTF('models/AwsLogo.glb');
  const groupRef = useRef();

  // Optional: Slow rotation animation using useFrame
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0005; // Slow Y-axis rotation
    }
  });

  return (
    <Float
      floatIntensity={0.05} // Adjust float intensity (smaller values for subtle float)
      speed={0.05} // Float speed
    >
      <group
        ref={groupRef}
        {...props}
        scale={[0.05, 0.05, 0.05]} // Scale remains the same
        position={[-5, 6.5, -1]} // Keep the current position
        dispose={null}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials['Scene_-_Root']}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </Float>
  );
}

useGLTF.preload('models/AwsLogo.glb');

export default AwsLogo;
