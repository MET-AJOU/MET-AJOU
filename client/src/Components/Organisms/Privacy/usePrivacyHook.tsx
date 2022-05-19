/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkBoxCheck, handleSetChecked, handleSetMoveNext, handleVerifyUseable } from "./util";

const usePrivacyHook = () => {
  const [next, setNext] = useState(true);
  const [checked, setChecked] = useState(INIT_CHECKED);
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const navigator = useNavigate();

  const handleMoveNext = useCallback(() => handleSetMoveNext({ inputRefs, setNext, navigator }), []);
  const handleChecked = useCallback(handleSetChecked({ inputRefs, setChecked }), []);

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
