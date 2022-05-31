/* eslint-disable consistent-return */
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
import { CharactersAtom } from "@Recoils/Characters";
import { useRecoilValue } from "recoil";

const TestCharacter = ({ src, characterState, setCharacterRefs, setActions, setApis, idx }: { src: string; characterState: CharacterType; setCharacterRefs: any; idx: number; setActions: any; setApis: any }) => {
  if (!characterState) return null;
  const {
    position: { x, y, z },
  } = characterState;
  const temp = useFBX(src);

  const characters = useRecoilValue(CharactersAtom);
  const [ref, api] = useSphere(() => ({
    mass: 100,
    args: [0.05],
    position: [x, y, z],
    type: "Dynamic",
  }));
  let animations = useGetAnimations({ animationSrcs, ref });

  useEffect(() => {
    setCharacterRefs((prev: any[]) => {
      if (prev.length === characters.length) return prev.map((prevRef: any, refIdx: number) => (refIdx === idx ? ref : prevRef));
      if (prev.length < characters.length && characters.length - 1 === idx) return [...prev, ref];
    });
    setApis((prev: any) => {
      if (prev.length === characters.length) return prev.map((prevApi: any, apiIdx: number) => (apiIdx === idx ? api : prevApi));
      if (prev.length < characters.length && characters.length - 1 === idx) return [...prev, api];
    });
  }, [api, ref, temp, src]);

  useEffect(() => {
    console.log("in empty deps");
  }, []);
  useEffect(() => {
    console.log("in src deps");
  }, [src]);
  useEffect(() => {
    console.log("in temp deps");
  }, [temp]);
  useEffect(() => {
    console.log("in api deps");
  }, [api]);

  useEffect(() => {
    console.log("in ref deps");
    setActions((prev: any[]) => {
      if (prev.length === characters.length) return prev.map((prevAction: any, actionIdx: number) => (actionIdx === idx ? animations : prevAction));
      if (prev.length < characters.length && characters.length - 1 === idx) return [...prev, animations];
    });
  }, [ref]);

  return (
    <group ref={ref} scale={0.0015}>
      <primitive object={temp} />
    </group>
  );
};

export default TestCharacter;
