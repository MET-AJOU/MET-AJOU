/* eslint-disable no-plusplus */
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
    if (value.length + id <= 6) (inputRefs.current[id + value.length] as HTMLInputElement)?.focus();
    setCode(setCodeFn(id, value));
  };

const setCodeFn = (id: number, value: string) => (prev: codeType) => {
  const idx = CHANGE_IDX[id];
  if (value.length === 0) return { ...prev, [idx]: value };
  return Array.from(makeValue(value, id)).reduce(
    (acc, cur, i) => {
      return { ...acc, [CHANGE_IDX[i + id]]: cur };
    },
    { ...prev }
  );
};

const MAX_INPUT_LENGTH = 6;

const makeValue = (value: string, id: number) => {
  let answer = "";
  const l = value.length + id;
  if (l <= MAX_INPUT_LENGTH) return value;
  for (let i = 0; i < MAX_INPUT_LENGTH - id; i++) answer += value[i];
  return answer;
};
