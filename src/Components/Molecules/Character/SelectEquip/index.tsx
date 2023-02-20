import SelectCostume from "./SelectCostume";
import SelectHair from "./SelectHair";
import { SelectEquipContainer, SelectEquipTitleContainer, SeletEqupTitle } from "./styles";
import useSelectEquip, { useSelectEquipType } from "./useSelectEquip";

const SelectEquip = ({ character, hairColor, handleHairColor, costumeColor, handleCostumeColor, costumeSelect, handleCostumeSelect }: SelectEquipType) => {
  const { select, handleSelect }: useSelectEquipType = useSelectEquip();
  return (
    <SelectEquipContainer>
      <SelectEquipTitleContainer>
        <SeletEqupTitle dir="left" select={select === 0} onClick={handleSelect(0)}>
          의상
        </SeletEqupTitle>
        <SeletEqupTitle dir="right" select={select === 1} onClick={handleSelect(1)}>
          머리
        </SeletEqupTitle>
      </SelectEquipTitleContainer>
      {select ? <SelectHair hairColor={hairColor} handleHairColor={handleHairColor} /> : <SelectCostume character={character} costumeColor={costumeColor} costumeSelect={costumeSelect} handleCostumeColor={handleCostumeColor} handleCostumeSelect={handleCostumeSelect} />}
    </SelectEquipContainer>
  );
};

export default SelectEquip;

interface SelectEquipType {
  // SelectCostumeType && SelectHairType
  character: number;
  hairColor: number;
  handleHairColor: (idx: number) => () => void;
  costumeColor: number;
  handleCostumeColor: (idx: number) => () => void;
  costumeSelect: number;
  handleCostumeSelect: (idx: number) => () => void;
}
