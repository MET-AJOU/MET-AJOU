import { atom } from "recoil";

export const ModalState = atom<string>({
  key: "ModalState",
  default: "",
});
