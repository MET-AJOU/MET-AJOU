/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-expressions */
import { myPositionAtom, myUserIdAtom } from "@Recoils/Characters";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import Socket from "@Socket/.";
import { DefaultKeyboardState } from "@Constant/Three";

interface KeyConfig extends KeyMap {
  keys?: string[];
}

interface KeyMap {
  fn: (pressed: boolean) => object;
  up?: boolean;
  pressed?: boolean;
}

function useKeys(keyConfig: KeyConfig[]) {
  const userId = useRecoilValue(myUserIdAtom);
  const position = useRecoilValue(myPositionAtom);
  const [isPressed, setPressed] = useState(false);

  useEffect(() => {
    if (isPressed) return;
    if (!userId) return;
    Socket.instance?.emit("keyDown", { userId, keyState: DefaultKeyboardState, position });
  }, [position]);

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
      setPressed(true);
      const keyState = Object.values(keyMap).reduce((state, { fn: _fn, pressed: _pressed }) => {
        if (_pressed) return { ...state, ..._fn(true) };
        return state;
      }, DefaultKeyboardState);
      console.log(keyMap);
      console.log(keyState);
      if (up || !pressed) Socket.instance?.emit("keyDown", { userId, keyState, position });
    };

    const upHandler = ({ key, target }: KeyboardEvent) => {
      if (!keyMap[key] || (target as HTMLElement).nodeName === "INPUT") return;
      const { fn, up } = keyMap[key];
      keyMap[key].pressed = false;
      setPressed(false);
      if (up) Socket.instance?.emit("keyUp", { userId, keyState: fn(false), position });
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
    { keys: ["ArrowUp", "w", "W"], fn: (forward) => ({ forward }) },
    { keys: ["ArrowDown", "s", "S"], fn: (backward) => ({ backward }) },
    { keys: ["ArrowLeft", "a", "A"], fn: (left) => ({ left }) },
    { keys: ["ArrowRight", "d", "D"], fn: (right) => ({ right }) },
    { keys: ["Shift"], fn: (boost) => ({ boost }) },
    { keys: ["Space", " "], fn: (space) => ({ space }) },
    { keys: ["z", "Z"], fn: (dance) => ({ dance }) },
  ]);
  return null;
};

export default Keyboard;
