import { Float, useGLTF } from '@react-three/drei'

const GolangLogo = (props) => {
  const { nodes, materials } = useGLTF('/models/golang.glb')
  return (
    <Float  dispose={null}>
      <group position ={[8,8,0]}rotation={[-Math.PI / 2, 0, 4.5]} scale={2} {...props}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.main_celeste}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials.piel_material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials.nariz}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7.geometry}
            material={materials.dientes}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8.geometry}
            material={materials.ojos}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_9.geometry}
            material={materials.pupila}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_10.geometry}
            material={materials.orejas_black}
            
          />
        </group>
      </group>
    </Float>
  )
}

useGLTF.preload('/models/golang.glb')

export default GolangLogo;