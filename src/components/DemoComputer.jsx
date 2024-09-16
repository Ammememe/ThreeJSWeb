import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

const DemoComputer = (props) => {
  const { nodes, materials } = useGLTF('public/models/retro_computer.glb');
  
  // Further reduce the scale for better zoom-out effect
  return (
    <group {...props} dispose={null}>
      <group position={[-5.068, 45.844, 119.]} rotation={[-1.439, 0, 0]} scale={0.7}> {/* Drastically reduced scale */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_6B_Plastic_Matte_mqm_0.geometry}
          material={materials['6B_Plastic_Matte_mqm']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_Emission_0.geometry}
          material={materials.Emission}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_0D_Metal_Dark_mqm_0.geometry}
          material={materials['0D_Metal_Dark_mqm']}
        />
        <group position={[0.031, 0.808, 1.287]} rotation={[-0.132, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_Emission_0.geometry}
            material={materials.Emission}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_0D_Metal_Dark_mqm_0.geometry}
            material={materials['0D_Metal_Dark_mqm']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_6B_Plastic_Matte_mqm_0.geometry}
            material={materials['6B_Plastic_Matte_mqm']}
          />
        </group>
        <group position={[-0.112, -1.612, 0.222]} rotation={[0, 0, -Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube006_0D_Metal_Dark_mqm_0.geometry}
            material={materials['0D_Metal_Dark_mqm']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube006_0D_Metal_Dark_mqm_0_1.geometry}
            material={materials['0D_Metal_Dark_mqm']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Slice001_6B_Plastic_Matte_mqm001_0.geometry}
          material={materials['6B_Plastic_Matte_mqm.001']}
          position={[0.031, 0.808, 1.287]}
          rotation={[-0.132, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SurfPatch_Material001_0.geometry}
          material={materials['Material.001']}
          position={[0.031, 1.112, 1.246]}
          rotation={[1.439, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Slice002_6B_Plastic_Matte_mqm_0.geometry}
          material={materials['6B_Plastic_Matte_mqm']}
          position={[0.031, 0.808, 1.287]}
          rotation={[-0.132, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Slice_Material002_0.geometry}
          material={materials['Material.002']}
          position={[0.031, 0.808, 1.287]}
          rotation={[-0.132, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_0D_Metal_Dark_mqm_0.geometry}
          material={materials['0D_Metal_Dark_mqm']}
          position={[0.031, 0.751, 0.2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_0D_Metal_Dark_mqm_0.geometry}
          material={materials['0D_Metal_Dark_mqm']}
          position={[0.031, 0.751, 0.2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cutter053_0V_Metal_Painted_mqm_0.geometry}
          material={materials['0V_Metal_Painted_mqm']}
          position={[0.036, 1.801, 0.112]}
          rotation={[Math.PI / 2, 1.571, 0]}
        />
      </group>
    </group>
  );
};

useGLTF.preload('public/models/retro_computer.glb');

export default DemoComputer;
