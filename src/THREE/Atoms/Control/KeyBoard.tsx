/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { myUserIdAtom } from "@Recoils/Characters";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import Socket from "@Socket/.";
import { DefaultKeyboardState } from "@Constant/Three";
import type { MyPositionType } from "@Type/Three";

interface KeyConfig extends KeyMap {
  keys?: string[];
}

interface KeyMap {
  fn: (pressed: boolean) => object;
  up?: boolean;
  pressed?: boolean;
}

let keyMap: { [key: string]: KeyMap };

function useKeys(keyConfig: KeyConfig[], myPosition: MyPositionType) {
  const userId = useRecoilValue(myUserIdAtom);
  const [isPressed, setPressed] = useState(false);

  useEffect(() => {
    keyMap = keyConfig.reduce<{ [key: string]: KeyMap }>((out, { keys, fn, up = true }) => {
      keys &&
        keys.forEach((key) => {
          out[key] = { fn, pressed: false, up };
        });
      return out;
    }, {});
  }, []);

  useEffect(() => {
    if (isPressed) return;
    if (!userId) return;
    Socket.instance?.emit("keyDown", { userId, keyState: DefaultKeyboardState, position: myPosition.current });
  }, []);

  useEffect(() => {
    const downHandler = ({ key, target }: KeyboardEvent) => {
      if (!keyMap[key] || (target as HTMLElement).nodeName === "INPUT") return;
      const { pressed, up } = keyMap[key];
      keyMap[key].pressed = true;
      setPressed(true);
      const keyState = Object.values(keyMap).reduce((state, { fn: _fn, pressed: _pressed }) => {
        if (_pressed) return { ...state, ..._fn(true) };
        return state;
      }, DefaultKeyboardState);

      if (up || !pressed) Socket.instance?.emit("keyDown", { userId, keyState, position: myPosition.current });
    };

    const upHandler = ({ key, target }: KeyboardEvent) => {
      if (!keyMap[key] || (target as HTMLElement).nodeName === "INPUT") return;
      const { fn, up } = keyMap[key];
      keyMap[key].pressed = false;
      Object.values(keyMap).every(({ pressed }) => !pressed) && setPressed(false);

      if (up) Socket.instance?.emit("keyUp", { userId, keyState: fn(false), position: myPosition.current });
    };

    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler, { passive: true });

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [keyConfig]);
}

const Keyboard = ({ myPosition }: { myPosition: MyPositionType }) => {
  useKeys(
    [
      { keys: ["ArrowUp", "w", "W"], fn: (forward) => ({ forward }) },
      { keys: ["ArrowDown", "s", "S"], fn: (backward) => ({ backward }) },
      { keys: ["ArrowLeft", "a", "A"], fn: (left) => ({ left }) },
      { keys: ["ArrowRight", "d", "D"], fn: (right) => ({ right }) },
      { keys: ["Shift"], fn: (boost) => ({ boost }) },
      { keys: ["Space", " "], fn: (space) => ({ space }) },
      { keys: ["1"], fn: (hello) => ({ hello }) },
      { keys: ["2"], fn: (dance) => ({ dance }) },
      { keys: ["3"], fn: (happy) => ({ happy }) },
      { keys: ["4"], fn: (question) => ({ question }) },
      { keys: ["5"], fn: (lose) => ({ lose }) },
    ],
    myPosition
  );
  return null;
};

export default Keyboard;
