/* eslint-disable consistent-return */
import { useEffect } from "react";
import { Group, Object3D } from "three";
import { useRecoilValue } from "recoil";
import { useFBX } from "@react-three/drei";

import useGetAnimations from "@Hook/Three/useGetAnimations";
import { useSphere } from "@react-three/cannon";
import { CharactersAtom } from "@Recoils/Characters";
import { CharacterType } from "@Type/Three";
import { animationSrcs } from "@Constant/Three";

export const useGetCharacterStates = ({ characterState, src, setCharacterRefs, setActions, setApis, idx }: { characterState: CharacterType; src: string; setCharacterRefs: any; setActions: any; setApis: any; idx: number }): [Group, React.RefObject<Object3D>] => {
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

  const animations = useGetAnimations({ animationSrcs, ref });
  useEffect(() => {
    if (!characters.length) return;
    setCharacterRefs((prev: any[]) => {
      if (prev.length === characters.length) return prev.map((prevRef: any, refIdx: number) => (refIdx === idx ? ref : prevRef));
      if (prev.length < characters.length && characters.length - 1 === idx) return [...prev, ref];
    });
    setApis((prev: any) => {
      if (prev.length === characters.length) return prev.map((prevApi: any, apiIdx: number) => (apiIdx === idx ? api : prevApi));
      if (prev.length < characters.length && characters.length - 1 === idx) return [...prev, api];
    });
  }, [src, temp]);

  useEffect(() => {
    setActions((prev: any[]) => {
      if (prev.length === characters.length) return prev.map((prevAction: any, actionIdx: number) => (actionIdx === idx ? animations : prevAction));
      if (prev.length < characters.length && characters.length - 1 === idx) return [...prev, animations];
    });
  }, [ref.current]);

  return [temp, ref];
};
