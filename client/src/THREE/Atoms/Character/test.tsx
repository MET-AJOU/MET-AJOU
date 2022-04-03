/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useFBX } from "@react-three/drei";
import { useSphere } from "@react-three/cannon";
import React, { useEffect, useRef } from "react";
import useGetAnimations from "@Hook/Three/useGetAnimations";
import { animationSrcs } from "@Constant/Three";
import { CharacterType } from "@Type/Three";

const TestCharacter = ({ src, characterState, characterRefs, actions, apis, idx }: { src: string; characterState: CharacterType; characterRefs: any; idx: number; actions: any; apis: any }) => {
  if (!characterState) return null;
  const {
    position: { x, y, z },
  } = characterState;
  const groupRef = useRef(null);
  const temp = useFBX(src);

  const [ref, api] = useSphere(() => ({
    mass: 100,
    args: [0.1],
    position: [x, y, z],
    type: "Dynamic",
  }));

  useEffect(() => {
    console.log(ref);
    console.log(api);
    characterRefs.current[idx] = ref;
    apis.current[idx] = api;
    console.log(characterRefs);
    console.log(apis);
    // actions.crreunt[idx] = useGetAnimations({ animationSrcs, groupRef });
  }, [api, ref]);

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
