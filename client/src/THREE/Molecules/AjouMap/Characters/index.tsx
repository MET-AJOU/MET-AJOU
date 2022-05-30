/* eslint-disable react/jsx-no-useless-fragment */
import { useEffect, useState } from "react";
import useCharacterMovement from "@Hook/Three/useMovement";
import { CharactersAtom } from "@Recoils/Characters";
import TestCharacter from "@THREE/Atoms/Character/test";
import { useRecoilValue } from "recoil";
import { getRenderUserCharacter } from "@Organisms/Character/util";

const Characters = () => {
  const characters = useRecoilValue(CharactersAtom);
  const [characterRefs, setCharacterRefs] = useState(new Array(characters.length).fill(0));
  const [actions, setActions] = useState(new Array(characters.length).fill(0));
  const [apis, setApis] = useState(new Array(characters.length).fill(0));
  useCharacterMovement({ characterRefs, apis, actions, characters });

  useEffect(() => {
    if (characterRefs[0] === 0) return;

    const leaveUser = characterRefs.findIndex((ref) => ref.current === null);

    setCharacterRefs((prev) => prev.filter((ref, idx) => idx !== leaveUser));
    setApis((prev) => prev.filter((ref, idx) => idx !== leaveUser));
    setActions((prev) => prev.filter((ref, idx) => idx !== leaveUser));
  }, [characters.length]);

  return (
    <>
      {characters?.map((characterState, idx) => (
        // <TestCharacter apis={apis} actions={actions} characterRefs={characterRefs} idx={idx} src={getRenderUserCharacter({ characterCode: "minshigee" })} characterState={characterState} key={characterState.userId} />
        <TestCharacter setApis={setApis} setActions={setActions} setCharacterRefs={setCharacterRefs} idx={idx} src={getRenderUserCharacter({ characterCode: characterState.userId, joinTime: characterState.joinTime })} characterState={characterState} key={characterState.userId} />
      ))}
    </>
  );
};

export default Characters;
