/* eslint-disable react/jsx-no-useless-fragment */
import { CharactersAtom, myUserIdAtom } from "@Recoils/Characters";
import { useRecoilValue } from "recoil";
import { getRenderUserCharacter } from "@Organisms/Character/util";
import { useRef } from "react";
import Character from "@THREE/Atoms/Character";
import type { PublicApi } from "@react-three/cannon";
import type { CharacterRefType, MyPositionType } from "@Type/Three";

import useCharacterMovement from "./Characters.hook";

const Characters = ({ myPosition }: { myPosition: MyPositionType }) => {
  const characters = useRecoilValue(CharactersAtom);
  const myUserId = useRecoilValue(myUserIdAtom);
  const myUserIdx = characters?.findIndex(({ userId }) => userId === myUserId);
  const characterRefs = useRef<CharacterRefType[]>([]);
  const actions = useRef([]);
  const apis = useRef<PublicApi[]>([]);

  useCharacterMovement({ characterRefs, apis, actions, characters });

  return (
    <>
      {characters?.map((characterState, idx) => (
        <Character myUserIdx={myUserIdx} myPosition={myPosition} apis={apis} actions={actions} characterRefs={characterRefs} idx={idx} src={getRenderUserCharacter({ characterCode: characterState.userId, joinTime: characterState.joinTime })} characterState={characterState} key={characterState.userId} />
      ))}
    </>
  );
};

export default Characters;
