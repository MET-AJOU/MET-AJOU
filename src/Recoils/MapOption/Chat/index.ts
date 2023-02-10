import { ChatType } from "@Type/Three";
import { atom } from "recoil";

export const chatAtom = atom<ChatType[]>({
  key: "chatAtom",
  default: [],
});
