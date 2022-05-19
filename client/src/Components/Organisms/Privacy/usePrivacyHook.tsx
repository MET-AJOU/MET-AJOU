/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkBoxCheck, handleVerifyUseable } from "./util";

const usePrivacyHook = () => {
  const [next, setNext] = useState(true);
  const [checked, setChecked] = useState(INIT_CHECKED);
  const inputRefs = useRef([]);
  const navigator = useNavigate();

  const handleMoveNext = async () => {
    if (!checkBoxCheck(inputRefs)) {
      setNext(false);
      return;
    }
    const data = await handleVerifyUseable();
    if (!data) return;
    navigator("/nickName");
  };
  const handleChecked = (idx: number) => () => {
    const ref = inputRefs.current[idx] as HTMLInputElement;
    setChecked((prev) => ({
      ...prev,
      [idx]: ref?.checked,
    }));
  };
  return { next, inputRefs, handleMoveNext, handleChecked };
};

export default usePrivacyHook;

const INIT_CHECKED: checkedType = {
  0: false,
  1: false,
};

export interface checkedType {
  0: boolean;
  1: boolean;
}
