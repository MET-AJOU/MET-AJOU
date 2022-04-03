/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-useless-fragment */
import useCharacterMovement from "@Hook/Three/useMovement";
import { CharactersAtom } from "@Recoils/Characters";
import TestCharacter from "@THREE/Atoms/Character/test";
import { Ref, useEffect, useRef } from "react";

import { useRecoilValue } from "recoil";

const Characters = () => {
  const characters = useRecoilValue(CharactersAtom);
  const characterRefs = useRef([]);
  const actions = useRef([]);
  const apis = useRef([]);

  // useEffect(() => {
  //   // if (!characters) return;
  //   // // console.log(characters, (characterRefs.current[characters.length - 1] as any).current);
  //   // if (!(characterRefs.current[characters.length - 1] as any).current) return;
  // }, [characters]);
  useCharacterMovement({ characterRefs, apis, actions, characters });

  // useEffect(() => {
  //   console.log(characterRefs);
  //   console.log(apis);
  // }, []);
  return (
    <>
      {characters?.map((characterState, idx) => (
        <TestCharacter apis={apis} actions={actions} characterRefs={characterRefs} idx={idx} src="Character/common_people_male_1.fbx" characterState={characterState} key={characterState.userId} />
      ))}
    </>
  );
};

export default Characters;
