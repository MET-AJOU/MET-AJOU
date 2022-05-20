/* eslint-disable @typescript-eslint/no-unused-vars */
import { NICKNAME } from "@Constant/URL";
import useMovePage from "@Hook/useMovePage";
import { userDataAtom } from "@Recoils/UserData";
import { useCallback, useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import { setHandleMoveNext } from "./util";
// import { checkBoxCheck, setHandleChecked, setHandleMoveNext, handleVerifyUseable } from "./util";

const usePrivacyHook = () => {
  const setUserData = useSetRecoilState(userDataAtom);
  const [next, setNext] = useState(true);
  // const [checked, setChecked] = useState(INIT_CHECKED);
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const nextPage = useMovePage(NICKNAME);

  const handleMoveNext = useCallback(setHandleMoveNext({ inputRefs, setNext, nextPage, setUserData }), []);
  // const handleChecked = useCallback(setHandleChecked({ inputRefs, setChecked }), []);

  return { next, inputRefs, handleMoveNext };
  // return { next, inputRefs, handleMoveNext, handleChecked };
};

export default usePrivacyHook;

// const INIT_CHECKED: checkedType = {
//   0: false,
//   1: false,
// };

// export interface checkedType {
//   0: boolean;
//   1: boolean;
// }
