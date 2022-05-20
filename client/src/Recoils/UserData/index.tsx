import { routingType } from "@Route/util";
import { atom } from "recoil";

export const userDataAtom = atom<routingType | null>({
  key: "userDataAtom",
  default: null,
});
