import { useGLTF, useTexture } from '@react-three/drei';
import { Material, Mesh } from 'three';
import { GroupProps } from '@react-three/fiber';

type Props = {
  scale: number;
  position: number[];
  rotation: [number, number, number];
};

type GLTFResult = {
  nodes: {
    screen_screens_0: Mesh;
    screen_glass_glass_0: Mesh;
    table_table_mat_0_1: Mesh;
    table_table_mat_0_2: Mesh;
    table_table_mat_0_3: Mesh;
    table_table_mat_0_4: Mesh;
    table_table_mat_0_5: Mesh;
    table_table_mat_0_6: Mesh;
    table_table_mat_0_7: Mesh;
    table_table_mat_0_8: Mesh;
    table_table_mat_0_9: Mesh;
    table_table_mat_0_10: Mesh;
    table_table_mat_0_11: Mesh;
    table_table_mat_0_12: Mesh;
  };
  materials: {
    screens: Material;
    glass: Material;
    table_mat: Material;
    computer_mat: Material;
    server_mat: Material;
    vhsPlayer_mat: Material;
    stand_mat: Material;
    mat_mat: Material;
    arm_mat: Material;
    tv_mat: Material;
    cables_mat: Material;
    props_mat: Material;
    ground_mat: Material;
    key_mat: Material;
  };
};

const MyRoom = (props: Props) => {
  const { nodes, materials } = useGLTF('/models/hacker-room.glb') as unknown as GLTFResult;

  const screenTxt = useTexture('textures/desk/screen.png');

  return (
    <group {...props as unknown as GroupProps} dispose={null}>
      <mesh geometry={nodes.screen_screens_0.geometry} material={materials.screens}>
        <meshMatcapMaterial map={screenTxt} />
      </mesh>
      <mesh geometry={nodes.screen_glass_glass_0.geometry} material={materials.glass} />
      <mesh geometry={nodes.table_table_mat_0_1.geometry} material={materials.table_mat} />
      <mesh geometry={nodes.table_table_mat_0_2.geometry} material={materials.computer_mat}>
      </mesh>
      <mesh geometry={nodes.table_table_mat_0_3.geometry} material={materials.server_mat} />
      <mesh geometry={nodes.table_table_mat_0_4.geometry} material={materials.vhsPlayer_mat} />
      <mesh geometry={nodes.table_table_mat_0_5.geometry} material={materials.stand_mat} />
      <mesh geometry={nodes.table_table_mat_0_6.geometry} material={materials.mat_mat} />
      <mesh geometry={nodes.table_table_mat_0_7.geometry} material={materials.arm_mat} />
      <mesh geometry={nodes.table_table_mat_0_8.geometry} material={materials.tv_mat}>
      </mesh>
      <mesh geometry={nodes.table_table_mat_0_9.geometry} material={materials.cables_mat} />
      <mesh geometry={nodes.table_table_mat_0_10.geometry} material={materials.props_mat} />
      <mesh geometry={nodes.table_table_mat_0_11.geometry} material={materials.ground_mat} />
      <mesh geometry={nodes.table_table_mat_0_12.geometry} material={materials.key_mat} />
    </group>
  );
};

useGLTF.preload('/models/hacker-room.glb');

export default MyRoom;
