/* eslint-disable react/jsx-no-useless-fragment */
import { useRef } from "react";
import useCharacterMovement from "@Hook/Three/useMovement";
import { CharactersAtom } from "@Recoils/Characters";
import TestCharacter from "@THREE/Atoms/Character/test";
import { useRecoilValue } from "recoil";
import { getRenderUserCharacter } from "@Organisms/Character/util";

const Characters = () => {
  const characters = useRecoilValue(CharactersAtom);
  const characterRefs = useRef([]);
  const actions = useRef([]);
  const apis = useRef([]);

  useCharacterMovement({ characterRefs, apis, actions, characters });

  return (
    <>
      {characters?.map((characterState, idx) => (
        // <TestCharacter apis={apis} actions={actions} characterRefs={characterRefs} idx={idx} src={getRenderUserCharacter({ characterCode: "minshigee" })} characterState={characterState} key={characterState.userId} />
        <TestCharacter apis={apis} actions={actions} characterRefs={characterRefs} idx={idx} src={getRenderUserCharacter({ characterCode: characterState.userId })} characterState={characterState} key={characterState.userId} />
      ))}
    </>
  );
};

export default Characters;
