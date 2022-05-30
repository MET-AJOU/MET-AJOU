/* eslint-disable prefer-const */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useFBX } from "@react-three/drei";
import { useSphere } from "@react-three/cannon";
import { useEffect } from "react";
import useGetAnimations from "@Hook/Three/useGetAnimations";
import { animationSrcs } from "@Constant/Three";
import { CharacterType } from "@Type/Three";

const TestCharacter = ({ src, characterState, setCharacterRefs, setActions, setApis, idx }: { src: string; characterState: CharacterType; setCharacterRefs: any; idx: number; setActions: any; setApis: any }) => {
  if (!characterState) return null;
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
  let animations = useGetAnimations({ animationSrcs, ref });

  useEffect(() => {
    setCharacterRefs((prev: any[]) => prev.map((prevRef: any, refIdx: number) => (refIdx === idx ? ref : prevRef)));
    setApis((prev: any) => prev.map((prevApi: any, apiIdx: number) => (apiIdx === idx ? api : prevApi)));
  }, [api, ref, temp, src]);

  useEffect(() => {
    setActions((prev: any[]) => prev.map((prevAction: any, actionIdx: number) => (actionIdx === idx ? animations : prevAction)));
  }, [ref]);

  return (
    <group ref={ref} scale={0.0015}>
      <primitive object={temp} />
    </group>
  );
};

export default TestCharacter;
