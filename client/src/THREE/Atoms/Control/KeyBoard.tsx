/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-expressions */
import { myUserIdAtom } from "@Recoils/Characters";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import Socket from "@Socket/.";
import { DefaultKeyboardState } from "@Constant/Three";

interface KeyConfig extends KeyMap {
  keys?: string[];
}

interface KeyMap {
  fn: (pressed: boolean) => void;
  up?: boolean;
  pressed?: boolean;
}

function useKeys(keyConfig: KeyConfig[]) {
  const userId = useRecoilValue(myUserIdAtom);

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
      if (up || !pressed) Socket.instance?.emit("keyDown", { userId, keyState: fn(true) });
    };

    const upHandler = ({ key, target }: KeyboardEvent) => {
      if (!keyMap[key] || (target as HTMLElement).nodeName === "INPUT") return;
      const { fn, up } = keyMap[key];
      keyMap[key].pressed = false;
      if (up) Socket.instance?.emit("keyUp", { userId, keyState: fn(false) });
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
  useKeys([
    { keys: ["ArrowUp", "w", "W"], fn: (forward) => ({ ...DefaultKeyboardState, forward }) },
    { keys: ["ArrowDown", "s", "S"], fn: (backward) => ({ ...DefaultKeyboardState, backward }) },
    { keys: ["ArrowLeft", "a", "A"], fn: (left) => ({ ...DefaultKeyboardState, left }) },
    { keys: ["ArrowRight", "d", "D"], fn: (right) => ({ ...DefaultKeyboardState, right }) },
    { keys: ["Shift"], fn: (boost) => ({ ...DefaultKeyboardState, boost }) },
    { keys: ["Space", " "], fn: (space) => ({ ...DefaultKeyboardState, space }) },
    { keys: ["z", "Z"], fn: (dance) => ({ ...DefaultKeyboardState, dance }) },
  ]);
  return null;
};

export default Keyboard;
