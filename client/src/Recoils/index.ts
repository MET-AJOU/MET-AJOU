import { PositionType } from "@Type/.";
import { atom } from "recoil";

export const hello = () => "hello";

export const positionAtom = atom<PositionType>({
  key: "positionAtom",
  default: { x: -3.5, y: 8, z: 1 },
});
