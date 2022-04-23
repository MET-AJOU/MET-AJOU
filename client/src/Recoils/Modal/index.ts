import { atom } from "recoil";

export const checkModalOpenState = atom<boolean>({
  key: "checkModalOpenState",
  // default: false,
  default: true,
});
