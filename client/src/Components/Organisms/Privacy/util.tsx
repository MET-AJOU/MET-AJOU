/* eslint-disable no-restricted-syntax */
import { POST_VERIFY_USEABLE } from "@Constant/URL";
import { Request } from "@Util/Request";

export const checkBoxCheck = (refs: any): boolean => {
  if (refs?.current.length === 0) return false;
  for (const ref of refs.current) {
    if (!ref.checked) return false;
  }
  return true;
};

export const checkSrc = (v: boolean) => (v ? "/asset/Register/SelectButton.png" : "/asset/Register/unSelectButton.svg");

const postUseable = async () => {
  const res = await Request({ url: POST_VERIFY_USEABLE, body: { useable: true } });
  return res;
};

export const handleVerifyUseable = async () => {
  const res = await postUseable();
  return res?.useable ?? false;
};
