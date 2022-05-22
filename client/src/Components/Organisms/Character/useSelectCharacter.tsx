import { CHANNEL } from "@Constant/URL";
import useMovePage from "@Hook/useMovePage";
import { userDataAtom } from "@Recoils/UserData";
import { useCallback, useState } from "react";
import { useSetRecoilState } from "recoil";
import { getDefaultHairColor, getRenderCharacter, handleSelectFn, setHandleMoveNext } from "./util";

const useSelectCharacter = () => {
  const [select, setSelect] = useState<number>(0);
  const [hairColor, setHairColor] = useState<number>(0);
  const [costumeColor, setCostumeColor] = useState<number>(0);
  const [costumeSelect, setCostumeSelect] = useState<number>(0);
  const nextPage = useMovePage(CHANNEL);
  const setUserData = useSetRecoilState(userDataAtom);

  const handleSelect = (idx: number) => () => {
    setSelect(idx);
    setHairColor(getDefaultHairColor(idx));
    setCostumeColor(0);
    setCostumeSelect(0);
  };
  const handleHairColor = useCallback(handleSelectFn(setHairColor), []);
  const handleCostumeColor = useCallback(handleSelectFn(setCostumeColor), []);
  const handleCostumeSelect = useCallback(handleSelectFn(setCostumeSelect), []);

  const renderCharacter = getRenderCharacter({ select, hairColor, costumeSelect, costumeColor });
  const handleMoveNext = setHandleMoveNext({ setUserData, nextPage, renderCharacter });

  return { select, handleSelect, hairColor, handleHairColor, costumeColor, handleCostumeColor, costumeSelect, handleCostumeSelect, renderCharacter, handleMoveNext };
};

export default useSelectCharacter;
