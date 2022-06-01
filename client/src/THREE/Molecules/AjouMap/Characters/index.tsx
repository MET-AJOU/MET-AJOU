/* eslint-disable react/jsx-no-useless-fragment */
import { CharactersAtom } from "@Recoils/Characters";
import Character from "@THREE/Atoms/Character";
import { useRecoilValue } from "recoil";
import { getRenderUserCharacter } from "@Organisms/Character/util";
import useGetCharacterStates from "./Characters.hook";

const Characters = () => {
  const characters = useRecoilValue(CharactersAtom);
  const [setCharacterRefs, setActions, setApis] = useGetCharacterStates(characters);

  return (
    <>
      {characters?.map((characterState, idx) => (
        <Character setApis={setApis} setActions={setActions} setCharacterRefs={setCharacterRefs} idx={idx} src={getRenderUserCharacter({ characterCode: characterState.userId, joinTime: characterState.joinTime })} characterState={characterState} key={characterState.userId} />
      ))}
    </>
  );
};

export default Characters;
