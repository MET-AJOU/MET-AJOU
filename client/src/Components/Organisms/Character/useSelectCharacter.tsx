import { useCallback, useState } from "react";
import { getDefaultHairColor, getRenderCharacter, handleSelectFn } from "./util";

const useSelectCharacter = () => {
  const [select, setSelect] = useState<number>(0);
  const [hairColor, setHairColor] = useState<number>(0);
  const [costumeColor, setCostumeColor] = useState<number>(0);
  const [costumeSelect, setCostumeSelect] = useState<number>(0);

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
  return { select, handleSelect, hairColor, handleHairColor, costumeColor, handleCostumeColor, costumeSelect, handleCostumeSelect, renderCharacter };
};

export default useSelectCharacter;
