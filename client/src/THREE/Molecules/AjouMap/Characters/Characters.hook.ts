import { useState, useEffect } from "react";
import useCharacterMovement from "@Hook/Three/useMovement";
import { CharacterType } from "@Type/Three";

const useGetCharacterStates = <T extends CharacterType>(characters: T[]) => {
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
  return [setCharacterRefs, setActions, setApis];
};

export default useGetCharacterStates;
