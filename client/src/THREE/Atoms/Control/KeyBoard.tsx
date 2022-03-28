/* eslint-disable no-unused-expressions */
import { keyBoardStateAtom } from "@Recoils/.";
import { keyBoardStateType } from "@Type/Three";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

interface KeyConfig extends KeyMap {
  keys?: string[];
}

interface KeyMap {
  fn: (pressed: boolean) => void;
  up?: boolean;
  pressed?: boolean;
}

function useKeys(keyConfig: KeyConfig[]) {
  useEffect(() => {
    const keyMap = keyConfig.reduce<{ [key: string]: KeyMap }>((out, { keys, fn, up = true }) => {
      keys &&
        keys.forEach((key) => {
          // eslint-disable-next-line no-param-reassign
          out[key] = { fn, pressed: false, up };
        });
      return out;
    }, {});

    const downHandler = ({ key, target }: KeyboardEvent) => {
      if (!keyMap[key] || (target as HTMLElement).nodeName === "INPUT") return;
      const { fn, pressed, up } = keyMap[key];
      keyMap[key].pressed = true;
      if (up || !pressed) fn(true);
    };

    const upHandler = ({ key, target }: KeyboardEvent) => {
      if (!keyMap[key] || (target as HTMLElement).nodeName === "INPUT") return;
      const { fn, up } = keyMap[key];
      keyMap[key].pressed = false;
      if (up) fn(false);
    };

    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler, { passive: true });

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [keyConfig]);
}

const Keyboard = () => {
  const setKeyboardState = useSetRecoilState(keyBoardStateAtom);
  useKeys([
    { keys: ["ArrowUp", "w", "W"], fn: (forward) => setKeyboardState((state: keyBoardStateType) => ({ ...state, forward })) },
    { keys: ["ArrowDown", "s", "S"], fn: (backward) => setKeyboardState((state: keyBoardStateType) => ({ ...state, backward })) },
    { keys: ["ArrowLeft", "a", "A"], fn: (left) => setKeyboardState((state: keyBoardStateType) => ({ ...state, left })) },
    { keys: ["ArrowRight", "d", "D"], fn: (right) => setKeyboardState((state: keyBoardStateType) => ({ ...state, right })) },
    { keys: ["Shift"], fn: (boost) => setKeyboardState((state: keyBoardStateType) => ({ ...state, boost })) },
    { keys: ["Space", " "], fn: (space) => setKeyboardState((state: keyBoardStateType) => ({ ...state, space })) },
    { keys: ["z", "Z"], fn: (dance) => setKeyboardState((state: keyBoardStateType) => ({ ...state, dance })) },
  ]);
  return null;
};

export default Keyboard;
