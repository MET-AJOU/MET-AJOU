import { CharacterType, PositionType } from "@Type/Three";
import { atom, selector } from "recoil";

export const myUserIdAtom = atom<number>({
  key: "myUserIdAtom",
  default: 0,
});

export const myPositionAtom = atom<PositionType>({
  key: "myPositionAtom",
  default: { x: 1, y: 7, z: 1 },
});
export const CharactersAtom = atom<null | CharacterType[]>({
  key: "CharactersAtom",
  default: null,
});

export const CharacterByIdSelector = selector({
  key: "CharacterByIdSelector",
  get: ({ get }) => get(CharactersAtom)?.filter((characterState) => characterState.userId === get(myUserIdAtom)),
});
