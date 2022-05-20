/* eslint-disable @typescript-eslint/no-unused-vars */
import { NICKNAME } from "@Constant/URL";
import useMovePage from "@Hook/useMovePage";
import { userDataAtom } from "@Recoils/UserData";
import { useCallback, useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import { setHandleMoveNext } from "./util";

const usePrivacyHook = () => {
  const setUserData = useSetRecoilState(userDataAtom);
  const [next, setNext] = useState(true);
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const nextPage = useMovePage(NICKNAME);

  const handleMoveNext = useCallback(setHandleMoveNext({ inputRefs, setNext, nextPage, setUserData }), []);

  return { next, inputRefs, handleMoveNext };
};

export default usePrivacyHook;
