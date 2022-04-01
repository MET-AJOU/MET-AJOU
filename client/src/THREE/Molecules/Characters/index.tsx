/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-useless-fragment */
import { CharactersAtom } from "@Recoils/Characters";
import TestCharacter from "@THREE/Atoms/Character/test";

import { useRecoilValue } from "recoil";

const Characters = () => {
  const characters = useRecoilValue(CharactersAtom);
  console.log(characters);
  return (
    <>
      {characters?.map((characterState) => (
        <TestCharacter src="Character/common_people_male_1.fbx" characterState={characterState} key={characterState.userId} />
      ))}
    </>
  );
};

export default Characters;
