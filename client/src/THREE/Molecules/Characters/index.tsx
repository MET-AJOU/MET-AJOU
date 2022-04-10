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

  useCharacterMovement({ characterRefs, apis, actions, characters });

  return (
    <>
      {characters?.map((characterState, idx) => (
        <TestCharacter apis={apis} actions={actions} characterRefs={characterRefs} idx={idx} src="Character/common_people_male_1.gltf" characterState={characterState} key={characterState.userId} />
      ))}
    </>
  );
};

export default Characters;
