import { SelectColorItemContainer, SelectColorItemContainerType } from "./styles";

const SelectColorItem = ({ select, onClick, color }: SelectColorItemType) => {
  return <SelectColorItemContainer select={select} onClick={onClick} color={color} />;
};

export default SelectColorItem;

interface SelectColorItemType extends SelectColorItemContainerType {
  onClick: () => void;
}
