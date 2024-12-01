import { useGLTF, useTexture } from '@react-three/drei';
import { Material, Mesh } from 'three';
import { GroupProps } from '@react-three/fiber';

type GLTFResult = {
  nodes: {
    computer_computer_mat_0: Mesh;
    server_server_mat_0: Mesh;
    vhs_vhsPlayer_mat_0: Mesh;
    shelf_stand_mat_0: Mesh;
    keyboard_mat_mat_mat_0: Mesh;
    arm_arm_mat_0: Mesh;
    Tv_tv_mat_0: Mesh;
    table_table_mat_0: Mesh;
    Cables_cables_mat_0: Mesh;
    props_props_mat_0: Mesh;
    screen_screens_0: Mesh;
    screen_glass_glass_0: Mesh;
    Ground_ground_mat_0: Mesh;
    peripherals_key_mat_0: Mesh;
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

type Props = {
  scale: number;
  position: number[];
  rotation: [number, number, number];
};

const MyRoom = (props: Props) => {
  const { nodes, materials } = useGLTF('/models/hacker-room.glb') as unknown as GLTFResult;

  const screenTxt = useTexture('textures/desk/screen.png');

  return (
    <group {...props as unknown as GroupProps} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.computer_computer_mat_0.geometry}
        material={materials.computer_mat}
      >
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.server_server_mat_0.geometry}
        material={materials.server_mat}
      >
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.vhs_vhsPlayer_mat_0.geometry}
        material={materials.vhsPlayer_mat}
      >
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shelf_stand_mat_0.geometry}
        material={materials.stand_mat}
      >
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.keyboard_mat_mat_mat_0.geometry}
        material={materials.mat_mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.arm_arm_mat_0.geometry}
        material={materials.arm_mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tv_tv_mat_0.geometry}
        material={materials.tv_mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.table_table_mat_0.geometry}
        material={materials.table_mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cables_cables_mat_0.geometry}
        material={materials.cables_mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.props_props_mat_0.geometry}
        material={materials.props_mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screen_screens_0.geometry}
        material={materials.screens}
      >
        <meshMatcapMaterial map={screenTxt} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screen_glass_glass_0.geometry}
        material={materials.glass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ground_ground_mat_0.geometry}
        material={materials.ground_mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.peripherals_key_mat_0.geometry}
        material={materials.key_mat}
      />
    </group>
  );
};

useGLTF.preload('/models/hacker-room.glb');

export default MyRoom;
