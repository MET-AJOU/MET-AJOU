import { CharacterType } from "@Type/Three";
import { atom } from "recoil";

export const CharactersAtom = atom<null | CharacterType[]>({
  key: "positionAtom",
  default: null,
});
