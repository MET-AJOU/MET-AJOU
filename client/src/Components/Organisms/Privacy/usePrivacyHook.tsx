/* eslint-disable @typescript-eslint/no-unused-vars */
import { userDataAtom } from "@Recoils/UserData";
import { useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { checkBoxCheck, handleSetChecked, handleSetMoveNext, handleVerifyUseable } from "./util";

const usePrivacyHook = () => {
  const setUserData = useSetRecoilState(userDataAtom);
  const [next, setNext] = useState(true);
  const [checked, setChecked] = useState(INIT_CHECKED);
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const navigator = useNavigate();

  const handleMoveNext = useCallback(handleSetMoveNext({ inputRefs, setNext, navigator, setUserData }), []);
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
