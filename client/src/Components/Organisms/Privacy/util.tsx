/* eslint-disable no-restricted-syntax */
import { POST_VERIFY_USEABLE } from "@Constant/URL";
import { Request } from "@Util/Request";
import { NavigateFunction } from "react-router-dom";
import { checkedType } from "./usePrivacyHook";

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

export const handleSetMoveNext =
  ({ inputRefs, setNext, navigator }: { inputRefs: React.MutableRefObject<HTMLInputElement[]>; setNext: (v: boolean) => void; navigator: NavigateFunction }) =>
  async () => {
    if (!checkBoxCheck(inputRefs)) {
      setNext(false);
      return;
    }
    const data = await handleVerifyUseable();
    if (!data) return;
    navigator("/nickName");
  };

export const handleSetChecked =
  ({ inputRefs, setChecked }: { inputRefs: React.MutableRefObject<HTMLInputElement[]>; setChecked: React.Dispatch<React.SetStateAction<checkedType>> }) =>
  (idx: number) =>
  () => {
    const ref = inputRefs.current[idx] as HTMLInputElement;
    setChecked((prev: checkedType) => ({
      ...prev,
      [idx]: ref?.checked,
    }));
  };
