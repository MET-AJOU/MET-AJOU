import useMovePage from "@Hook/useMovePage";
import { userDataAtom } from "@Recoils/UserData";
import { useCallback, useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import { setHandleCode, setHandleMoveNext } from "./util";

const useCheckVerify = () => {
  const setUserData = useSetRecoilState(userDataAtom);
  const [next, setNext] = useState(true);
  const [code, setCode] = useState<codeType>(INIT_CODE);
  const inputRefs = useRef([]);
  const nextPage = useMovePage("PRIVACY");

  const handleMoveNext = useCallback(setHandleMoveNext({ setNext, code, setUserData, nextPage }), [code]);
  const handleCode = useCallback(setHandleCode({ inputRefs, setCode }), []);

  return { code, next, inputRefs, handleMoveNext, handleCode };
};

export default useCheckVerify;

const INIT_CODE: codeType = {
  one: "",
  two: "",
  three: "",
  four: "",
  five: "",
  six: "",
};

export interface codeType {
  [index: string]: string;
  one: string;
  two: string;
  three: string;
  four: string;
  five: string;
  six: string;
}
