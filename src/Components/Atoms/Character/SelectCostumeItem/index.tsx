import { SelectCostumeItemContainer } from "./styles";

const SelectCostumeItem = ({ select, src, onClick }: SelectCostumeItemType) => {
  return (
    <SelectCostumeItemContainer select={select} onClick={onClick}>
      <img src={src} alt="의상" />
    </SelectCostumeItemContainer>
  );
};

export default SelectCostumeItem;

interface SelectCostumeItemType {
  select: boolean;
  src: string;
  onClick: () => void;
}
