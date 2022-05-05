import SelectCharacterItem from "@Atoms/Character/SelectCharacterItem";
import { SelectCharacterContainer } from "./styles";

const SelectCharacter = ({ select, handleSelect }: SelectCharacterType) => {
  return (
    <SelectCharacterContainer>
      {CHARACTER_SET.map((item, idx) => (
        <SelectCharacterItem key={item.id} src={item.src} select={select === idx} handleSelect={handleSelect(idx)} />
      ))}
    </SelectCharacterContainer>
  );
};

export default SelectCharacter;

const CHARACTER_SET = [
  {
    id: 0,
    src: "/asset/Character/boy1.png",
  },
  {
    id: 1,
    src: "/asset/Character/boy2.png",
  },
  {
    id: 2,
    src: "/asset/Character/boy3.png",
  },
  {
    id: 3,
    src: "/asset/Character/boy4.png",
  },
  {
    id: 4,
    src: "/asset/Character/girl1.png",
  },
  {
    id: 5,
    src: "/asset/Character/girl2.png",
  },
  {
    id: 6,
    src: "/asset/Character/girl3.png",
  },
  {
    id: 7,
    src: "/asset/Character/girl4.png",
  },
];

interface SelectCharacterType {
  select: number;
  handleSelect: (idx: number) => () => void;
}
