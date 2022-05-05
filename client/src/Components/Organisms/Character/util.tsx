export const handleSelectFn = (setter: React.Dispatch<React.SetStateAction<number>>) => (idx: number) => () => {
  setter(idx);
};

export const getRenderCharacter = ({ select, hairColor, costumeSelect, costumeColor }: getRenderCharacterType): string => {
  const title = `${[select, "-", hairColor, "-", costumeSelect, "-", costumeColor].join("")}.fbx`;
  return title;
};

interface getRenderCharacterType {
  select: number;
  hairColor: number;
  costumeSelect: number;
  costumeColor: number;
}
