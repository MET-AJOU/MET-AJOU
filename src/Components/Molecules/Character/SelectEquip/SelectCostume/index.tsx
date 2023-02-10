import SelectColorItem from "@Atoms/Character/SelectColor";
import { SelectColorContainer } from "@Atoms/Character/SelectColor/styles";
import SelectCostumeItem from "@Atoms/Character/SelectCostumeItem";
import { SelectCostumeItemBox } from "./styles";
import { getCharacterCostume } from "./util";

const 과잠 = 2;

const SelectCostume = ({ character, costumeColor, costumeSelect, handleCostumeColor, handleCostumeSelect }: SelectCostumeType) => {
  return (
    <>
      <SelectColorContainer>{costumeSelect === 과잠 && 과잠_COLOR.map((item, idx) => <SelectColorItem key={item.id} color={item.color} select={idx === costumeColor} onClick={handleCostumeColor(idx)} />)}</SelectColorContainer>
      <SelectCostumeItemBox>
        {getCharacterCostume(character).map((item, idx) => (
          <SelectCostumeItem select={costumeSelect === idx} src={item.src} key={item.id} onClick={handleCostumeSelect(idx)} />
        ))}
      </SelectCostumeItemBox>
    </>
  );
};

export default SelectCostume;

export interface SelectCostumeType {
  character: number;
  costumeColor: number;
  costumeSelect: number;
  handleCostumeColor: (idx: number) => () => void;
  handleCostumeSelect: (idx: number) => () => void;
}

const 과잠_COLOR = [
  {
    id: 0,
    color: "#2594E4",
  },
  {
    id: 1,
    color: "#B1B1B1",
  },
  {
    id: 2,
    color: "#EAE0CC",
  },
];
