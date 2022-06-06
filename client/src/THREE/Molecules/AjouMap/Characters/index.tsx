/* eslint-disable react/jsx-no-useless-fragment */
import { CharactersAtom } from "@Recoils/Characters";
import { useRecoilValue } from "recoil";
import { getRenderUserCharacter } from "@Organisms/Character/util";
import Character from "@THREE/Atoms/Character";
import { useRef } from "react";
import useCharacterMovement from "./Characters.hook";

const Characters = () => {
  const characters = useRecoilValue(CharactersAtom);
  const characterRefs = useRef([]);
  const actions = useRef([]);
  const apis = useRef([]);
  useCharacterMovement({ characterRefs, apis, actions, characters });
  return (
    <>
      {characters?.map((characterState, idx) => (
        // <Test2Character temps={temps} characterRefs={characterRefs} idx={idx} key={characterState.userId} />
        <Character apis={apis} actions={actions} characterRefs={characterRefs} idx={idx} src={getRenderUserCharacter({ characterCode: characterState.userId, joinTime: characterState.joinTime })} characterState={characterState} key={characterState.userId} />
      ))}
    </>
  );
};

export default Characters;
