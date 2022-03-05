import { DefaultKeyboardState } from "@Constant/Three";
import { PositionType } from "@Type/.";
import { keyBoardStateType } from "@Type/Three";
import { atom } from "recoil";

export const hello = () => "hello";

export const positionAtom = atom<PositionType>({
  key: "positionAtom",
  default: { x: -3.5, y: 8, z: 1 },
});

export const keyBoardStateAtom = atom<keyBoardStateType>({
  key: "keyBoardStateAtom",
  default: DefaultKeyboardState,
});
