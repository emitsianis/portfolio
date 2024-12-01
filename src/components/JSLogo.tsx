import { useGLTF, Float } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import { Material, Mesh } from 'three';

type GLTFResult = {
  nodes: {
    Object_2: Mesh;
  };
  materials: {
    mat_3220964: Material;
  };
};

type Props = {
  position: number[];
};

const JSLogo = (props: Props) => {
  const { nodes, materials } = useGLTF('/models/js.glb') as unknown as GLTFResult;

  return (
    <Float speed={2} rotationIntensity={0} floatIntensity={10}>
      <group {...(props as GroupProps)} scale={0.1} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.mat_3220964}
          rotation={[-Math.PI / 8, Math.PI / 4, Math.PI / 2]}
        />
      </group>
    </Float>
  );
};

useGLTF.preload('/models/js.glb');

export default JSLogo;
