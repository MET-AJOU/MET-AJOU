/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { CHANGE_IDX } from "@Molecules/Register/CheckEmailVerifyInput";
import { useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkFillCode, handleCheckVerify, makeCodeToString } from "./util";

const useCheckVerify = () => {
  const [next, setNext] = useState(true);
  const [code, setCode] = useState<codeType>(INIT_CODE);
  const inputRefs = useRef([]);
  const navigator = useNavigate();

  const handleMoveNext = useCallback(async () => {
    if (!checkFillCode(code)) setNext(false);
    else if (!(await handleCheckVerify(makeCodeToString(code)))) setNext(false);
    else {
      setNext(true);
      navigator("/privacy");
    }
  }, [code]);

  const handleCode = useCallback(
    (id: number) =>
      ({ target: { value } }: { target: { value: string } }) => {
        const idx = CHANGE_IDX[id];

        (inputRefs.current[id + 1] as HTMLInputElement)?.focus();

        setCode((prev) => {
          if (prev[idx] !== "") return prev;
          return {
            ...prev,
            [idx]: value,
          };
        });
      },
    []
  );

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
