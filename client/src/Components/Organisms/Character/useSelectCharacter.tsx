import { CHANNEL } from "@Constant/URL";
import useMovePage from "@Hook/useMovePage";
import { userDataAtom } from "@Recoils/UserData";
import { routingType } from "@Route/util";
import { useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { getDefaultHairColor, getRenderCharacter, handleCharacterSave, handleSelectFn, setHandleMoveNext } from "./util";

const useSelectCharacter = () => {
  const [select, setSelect] = useState<number>(0);
  const [hairColor, setHairColor] = useState<number>(0);
  const [costumeColor, setCostumeColor] = useState<number>(0);
  const [costumeSelect, setCostumeSelect] = useState<number>(0);
  const nextPage = useMovePage(CHANNEL);
  const [userData, setUserData] = useRecoilState(userDataAtom);
  const { userName, avatarCustomCode: myAvatarCode } = userData as routingType;
  const handleSelect = (idx: number) => () => {
    setSelect(idx);
    setHairColor(getDefaultHairColor(idx));
    setCostumeColor(0);
    setCostumeSelect(0);
  };

  const handleHairColor = useCallback(handleSelectFn(setHairColor), []);
  const handleCostumeColor = useCallback(handleSelectFn(setCostumeColor), []);
  const handleCostumeSelect = useCallback(handleSelectFn(setCostumeSelect), []);

  const characterCode = [select, ".", hairColor, ".", costumeSelect, ".", costumeColor].join("");
  const renderCharacter = getRenderCharacter({ characterCode: myAvatarCode || characterCode });
  const handleMoveNext = setHandleMoveNext({ setUserData, nextPage, characterCode });
  const handleSave = handleCharacterSave({ userName: String(userName), setUserData, characterCode });

  return { select, handleSelect, hairColor, handleHairColor, costumeColor, handleCostumeColor, costumeSelect, handleCostumeSelect, renderCharacter, handleMoveNext, handleSave };
};

export default useSelectCharacter;
