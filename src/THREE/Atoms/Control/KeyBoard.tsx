/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { myUserIdAtom } from "@Recoils/Characters";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import Socket from "@Socket/.";
import { DefaultKeyboardState } from "@Constant/Three";
import type { MyPositionType } from "@Type/Three";
import { KEYS } from "./KeyBoard.const";

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
  const myUserId = useRecoilValue(myUserIdAtom);

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
    const downHandler = ({ key, target }: KeyboardEvent) => {
      if (!keyMap[key] || (target as HTMLElement).nodeName === "INPUT") return;

      keyMap[key].pressed = true;
      const keyState = getKeyState();

      if (!keyMap[key].up) return;
      keyMap[key].up = false;
      Socket.instance?.emit("keyDown", { userId: myUserId, keyState, position: myPosition.current });
    };

    const upHandler = ({ key, target }: KeyboardEvent) => {
      if (!keyMap[key] || (target as HTMLElement).nodeName === "INPUT") return;
      keyMap[key].up = true;
      keyMap[key].pressed = false;

      const keyState = getKeyState();

      Socket.instance?.emit("keyUp", { userId: myUserId, keyState, position: myPosition.current });
    };

    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler, { passive: true });

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [keyConfig]);
}

const getKeyState = () => {
  const keyState = Object.values(keyMap).reduce((state, { fn: _fn, pressed: _pressed }) => {
    if (_pressed) return { ...state, ..._fn(true) };
    return state;
  }, DefaultKeyboardState);
  return keyState;
};

const Keyboard = ({ myPosition }: { myPosition: MyPositionType }) => {
  const keyConfig = Object.entries(KEYS).map(([order, keys]) => ({ keys, fn: (v: boolean) => ({ [order]: v }) }));
  useKeys(keyConfig, myPosition);
  return null;
};

export default Keyboard;
