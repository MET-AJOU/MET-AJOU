/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-useless-fragment */
import { useRef } from "react";
import useCharacterMovement from "@Hook/Three/useMovement";
import { CharactersAtom } from "@Recoils/Characters";
import TestCharacter from "@THREE/Atoms/Character/test";
import { useRecoilValue } from "recoil";

const Characters = () => {
  const characters = useRecoilValue(CharactersAtom);
  const characterRefs = useRef([]);
  const actions = useRef([]);
  const apis = useRef([]);

  useCharacterMovement({ characterRefs, apis, actions, characters });

  return (
    <>
      {characters?.map((characterState, idx) => (
        <TestCharacter apis={apis} actions={actions} characterRefs={characterRefs} idx={idx} src={getCharacterTest(idx)} characterState={characterState} key={`${characterState.userId}/${idx}`} />
      ))}
    </>
  );
};

export default Characters;

const getCharacter = (idx: number) => `Character/common_people_male_${idx + 1}.fbx`;
const getCharacterTest = (idx: number) => (idx === 0 ? `Character/boy_tshirt_1.fbx` : `Character/boy_tshirt_2.fbx`);
