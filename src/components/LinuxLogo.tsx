import { useGLTF } from '@react-three/drei';
import { GroupProps, useFrame } from '@react-three/fiber';
import { Group, Material, Mesh } from 'three';
import { useRef } from 'react';

type GLTFResult = {
  nodes: {
    'Tux-printable_0': Mesh;
    'Tux-printable_1': Mesh;
    'Tux-printable_2': Mesh;
  };
  materials: {
    black: Material;
    white: Material;
    orange: Material;
  };
};

type Props = {
  position: number[];
};

const LinuxLogo = (props: Props) => {
  const groupRef = useRef<Group>(null);
  const { nodes, materials } = useGLTF('/models/tux.glb') as unknown as GLTFResult;

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.z += 0.01;
    }
  });

  return (

    <group
      ref={groupRef}
      scale={0.018}
      dispose={null}
      rotation={[-Math.PI / 2, 0, 0]}
      {...(props as GroupProps)}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Tux-printable_0'].geometry}
        material={materials.black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Tux-printable_1'].geometry}
        material={materials.white}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Tux-printable_2'].geometry}
        material={materials.orange}
      />
    </group>
  );
};

useGLTF.preload('/models/tux.glb');

export default LinuxLogo;
