import { ReactNode, useRef } from 'react';
import { Group } from 'three';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

type Props = {
  children: ReactNode;
  isTablet: boolean;
};

const HeroCamera = ({ children, isTablet }: Props) => {
  const groupRef = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    if (isTablet) {
      easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);
    } else {
      easing.dampE(
        groupRef.current.rotation,
        [-state.pointer.y / 3, state.pointer.x / 5, 0], 0.25, delta);
    }

  });

  return (
    <group ref={groupRef} scale={1}>
      {children}
    </group>
  );
};

export default HeroCamera;
