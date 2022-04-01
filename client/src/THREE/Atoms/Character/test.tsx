/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { PerspectiveCamera, useAnimations, useFBX, useGLTF } from "@react-three/drei";
import useCharacterMovement from "@Hook/Three/useMovement";
import { useSphere } from "@react-three/cannon";
import React, { useRef } from "react";
import useGetAnimations from "@Hook/Three/useGetAnimations";
import { animationSrcs } from "@Constant/Three";
import { CharacterType } from "@Type/Three";

const TestCharacter = ({ src, characterState }: { src: string; characterState: CharacterType }) => {
  if (!characterState) return null;
  const {
    position: { x, y, z },
  } = characterState;
  const groupRef = useRef(null);
  const temp = useFBX(src);
  const actions = useGetAnimations({ animationSrcs, groupRef });

  const [ref, api] = useSphere(() => ({
    mass: 100,
    args: [0.1],
    position: [x, y, z],
    type: "Dynamic",
  }));

  useCharacterMovement({ ref, api, actions, characterState });

  return (
    <group ref={groupRef}>
      <primitive scale={0.002} object={temp} ref={ref} />
    </group>
  );
};

// function propsCompareFn(prev: any, next: any): boolean {
//   // const {
//   //   src: prevSrc,
//   //   characterState: { characterId: prevCharacterId, keyState, position, userId },
//   // } = prev;
//   // const {
//   //   src,
//   //   characterState: { characterId, keyState, position, userId },
//   // } = prev;
//   console.log(prev);
//   console.log(next);
//   return true;
// }
export default React.memo(TestCharacter);
// export default React.memo(TestCharacter, propsCompareFn);
