import { atom } from "recoil";

export const ModalState = atom<string | object>({
  key: "ModalState",
  default: "",
});
