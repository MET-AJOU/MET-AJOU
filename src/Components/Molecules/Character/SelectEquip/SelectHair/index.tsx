import SelectColorItem from "@Atoms/Character/SelectColor";
import { SelectColorContainer } from "@Atoms/Character/SelectColor/styles";

const SelectHair = ({ hairColor, handleHairColor }: SelectHairType) => {
  return (
    <div>
      <SelectColorContainer>
        {HAIR_COLOR.map((item, idx) => (
          <SelectColorItem key={item.id} color={item.color} select={idx === hairColor} onClick={handleHairColor(idx)} />
        ))}
      </SelectColorContainer>
    </div>
  );
};

export default SelectHair;

export interface SelectHairType {
  hairColor: number;
  handleHairColor: (idx: number) => () => void;
}
export const HAIR_COLOR = [
  {
    id: 0,
    color: "#EA8044",
  },
  {
    id: 1,
    color: "#F7D93C",
  },
  {
    id: 2,
    color: "#6C462A",
  },
  {
    id: 3,
    color: "#000000",
  },
];
