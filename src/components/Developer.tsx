import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';
import { Group, Material, Object3D, SkinnedMesh } from 'three';

type GLTFResult = GLTF & {
  nodes: {
    Alpha_Joints: SkinnedMesh;
    Alpha_Surface: SkinnedMesh;
    mixamorigHips: Object3D;
  };
  materials: {
    Alpha_Joints_MAT: Material;
    Alpha_Body_MAT: Material;
  };
};

const Developer = ({ animationName = 'idle', ...props }) => {
  const group = useRef<Group>(null);
  const { nodes, materials } = useGLTF('/models/human/developer.glb') as GLTFResult;

  const { animations: idleAnimation } = useFBX('/models/human/idle.fbx');
  const { animations: clappingAnimation } = useFBX('/models/human/clapping.fbx');
  const { animations: saluteAnimation } = useFBX('/models/human/salute.fbx');
  const { animations: victoryAnimation } = useFBX('/models/human/victory.fbx');

  idleAnimation[0].name = 'idle';
  clappingAnimation[0].name = 'clapping';
  saluteAnimation[0].name = 'salute';
  victoryAnimation[0].name = 'victory';

  const { actions } = useAnimations(
    [
      idleAnimation[0],
      saluteAnimation[0],
      clappingAnimation[0],
      victoryAnimation[0],
    ],
    group,
  );

  useEffect(() => {
    if (!actions?.[animationName]) return;
    actions[animationName].reset().fadeIn(0.5).play();

    return () => {
      if (actions?.[animationName]) actions[animationName].fadeOut(0.5);
    };
  }, [animationName]);

  return (
    <group ref={group} {...props} dispose={null} rotation={[0, 0, 0]}>
      <group name="Scene">
        <group name="Armature" scale={0.01}>
          <skinnedMesh
            name="Alpha_Joints"
            geometry={nodes.Alpha_Joints.geometry}
            material={materials.Alpha_Joints_MAT}
            skeleton={nodes.Alpha_Joints.skeleton}
          />
          <skinnedMesh
            name="Alpha_Surface"
            geometry={nodes.Alpha_Surface.geometry}
            material={materials.Alpha_Body_MAT}
            skeleton={nodes.Alpha_Surface.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/models/human/developer.glb');

export default Developer;
