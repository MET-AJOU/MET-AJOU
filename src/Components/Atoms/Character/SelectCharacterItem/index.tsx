import { SelectCharacterItemContainer } from "./styles";

const SelectCharacterItem = ({ src, select, handleSelect }: SelectCharacterItemProps) => {
  return (
    <SelectCharacterItemContainer select={select} onClick={handleSelect}>
      <img src={src} alt="캐릭터" />
    </SelectCharacterItemContainer>
  );
};

export default SelectCharacterItem;

interface SelectCharacterItemProps {
  src: string;
  select: boolean;
  handleSelect: () => void;
}
