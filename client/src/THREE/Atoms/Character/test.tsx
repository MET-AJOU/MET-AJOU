/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { PerspectiveCamera, useAnimations, useFBX, useGLTF } from "@react-three/drei";
import useCharacterMovement from "@Hook/Three/useMovement";
import { useSphere } from "@react-three/cannon";
import { useRef } from "react";

const TestCharacter = ({ src }: { src: string }) => {
  const groupRef = useRef(null);
  const temp = useFBX(src);
  const walkingAnimation = useFBX("Character/common_people@walk.FBX");
  const runningAnimation = useFBX("Character/common_people@run.FBX");
  const dancingAnimation = useFBX("Character/common_people@dance.FBX");
  const jumpingAnimation = useFBX("Character/common_people@jump-up.FBX");

  const { animations: walkingAnimations } = walkingAnimation;
  const { animations: runningAnimations } = runningAnimation;
  const { animations: dancingAnimations } = dancingAnimation;
  const { animations: jumpingAnimations } = jumpingAnimation;
  const { actions: walkingActions } = useAnimations(walkingAnimations, groupRef);
  const { actions: runningActions } = useAnimations(runningAnimations, groupRef);
  const { actions: dancingActions } = useAnimations(dancingAnimations, groupRef);
  const { actions: jumpingActions } = useAnimations(jumpingAnimations, groupRef);

  const [ref, api] = useSphere(() => ({
    mass: 100,
    args: [0.1],
    position: [13, 3.65, 21],
    type: "Dynamic",
  }));
  // console.log(temp);
  useCharacterMovement({ ref, api, actions: { walkingActions, runningActions, dancingActions, jumpingActions } });

  return (
    <PerspectiveCamera>
      <group ref={groupRef}>
        {/* <primitive scale={0.01} object={temp} ref={ref} /> */}
        <primitive scale={0.002} object={temp} ref={ref} />
      </group>
    </PerspectiveCamera>
  );
};

export default TestCharacter;
// const { nodes, animations } = useGLTF(src);
// const keys = Object.keys(nodes);

// <group castShadow receiveShadow ref={ref}>
// {keys.map((key) => (
//   <mesh key={key} scale={0.003} geometry={(nodes[key] as any).geometry} material={(nodes[key] as any).material} />
//   ))}
//   </group>
