/* eslint-disable no-restricted-syntax */
import { CHECK_VERIFY_EMAIL } from "@Constant/URL";
import { Request } from "@Util/Request";
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

export const handleCheckVerify = async (verifyToken: string) => {
  const res = await Request({
    url: CHECK_VERIFY_EMAIL,
    body: {
      verifyToken,
    },
  });
  // const res = await axios.post(CHECK_VERIFY_EMAIL, {
  //   verifyToken,
  // });
  return !!res;
};
