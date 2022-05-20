/* eslint-disable no-restricted-syntax */
import { CHECK_VERIFY_EMAIL } from "@Constant/URL";
import { CHANGE_IDX } from "@Molecules/Register/CheckEmailVerifyInput";
import { changeEmail } from "@Recoils/UserData";
import { routingType } from "@Route/util";
import { Request } from "@Util/Request";
import { SetterOrUpdater } from "recoil";
import { codeType } from "./useCheckVerify";

export const checkFillCode = (code: codeType) => {
  const keys = Object.keys(code);
  for (const key of keys) {
    if (code[key] === "") return false;
  }
  return true;
};

export const makeCodeToString = (code: codeType) => {
  let answer = "";
  const keys = Object.keys(code);
  for (const key of keys) {
    answer += code[key];
  }
  return answer;
};

const postCheckVerify = async (verifyToken: string) => {
  const res = await Request({
    url: CHECK_VERIFY_EMAIL,
    body: {
      verifyToken,
    },
  });
  return res;
};

export const handleCheckVerify = async (verifyToken: string) => {
  const res = await postCheckVerify(verifyToken);
  return res?.verifingTokenSendResult ?? false;
};

export const setHandleMoveNext =
  ({ setNext, code, setUserData, nextPage }: { setNext: (value: React.SetStateAction<boolean>) => void; code: codeType; setUserData: SetterOrUpdater<routingType | null>; nextPage: () => void }) =>
  async () => {
    if (!checkFillCode(code)) {
      setNext(false);
      return;
    }
    const data = await handleCheckVerify(makeCodeToString(code));
    if (!data) {
      setNext(false);
      return;
    }
    setNext(true);
    setUserData(changeEmail);
    nextPage();
  };

export const setHandleCode =
  ({ inputRefs, setCode }: { inputRefs: React.MutableRefObject<never[]>; setCode: React.Dispatch<React.SetStateAction<codeType>> }) =>
  (id: number) =>
  ({ target: { value } }: { target: { value: string } }) => {
    const idx = CHANGE_IDX[id];
    (inputRefs.current[id + 1] as HTMLInputElement)?.focus();
    setCode(setCodeFn(idx, value));
  };

const setCodeFn = (idx: string, value: string) => (prev: codeType) => prev[idx] !== "" ? prev : { ...prev, [idx]: value };
