/* eslint-disable prefer-const */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useFBX, useGLTF } from "@react-three/drei";
import { useBox, useSphere } from "@react-three/cannon";
import React, { Suspense, useEffect, useRef } from "react";
import useGetAnimations from "@Hook/Three/useGetAnimations";
import { animationSrcs } from "@Constant/Three";
import { CharacterType } from "@Type/Three";
import { Vector3 } from "three";

const TestCharacter = ({ src, characterState, characterRefs, actions, apis, idx }: { src: string; characterState: CharacterType; characterRefs: any; idx: number; actions: any; apis: any }) => {
  if (!characterState) return null;
  console.log(src);
  const {
    position: { x, y, z },
  } = characterState;
  const temp = useFBX(src);

  const [ref, api] = useSphere(() => ({
    mass: 100,
    args: [0.05],
    position: [x, y, z],
    type: "Dynamic",
  }));

  actions.current[idx] = useGetAnimations({ animationSrcs, ref });

  useEffect(() => {
    characterRefs.current[idx] = ref;
    apis.current[idx] = api;
  }, [api, ref, src]);

  return (
    <group ref={ref} scale={0.0015}>
      <primitive object={temp} />
    </group>
  );
};

export default TestCharacter;
