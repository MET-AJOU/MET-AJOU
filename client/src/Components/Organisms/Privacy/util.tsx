/* eslint-disable no-restricted-syntax */
import { POST_VERIFY_USEABLE } from "@Constant/URL";
import { changeUseable } from "@Recoils/UserData";
import { routingType } from "@Route/util";
import { Request } from "@Util/Request";
import { SetterOrUpdater } from "recoil";
// import { checkedType } from "./usePrivacyHook";

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

const handleVerifyUseable = async () => {
  const res = await postUseable();
  return res?.useable ?? false;
};

export const setHandleMoveNext =
  ({ inputRefs, setNext, nextPage, setUserData }: { inputRefs: React.MutableRefObject<HTMLInputElement[]>; setNext: (v: boolean) => void; nextPage: () => void; setUserData: SetterOrUpdater<routingType | null> }) =>
  async () => {
    if (!checkBoxCheck(inputRefs)) {
      setNext(false);
      return;
    }
    const data = await handleVerifyUseable();
    if (!data) return;
    setUserData(changeUseable);
    nextPage();
  };

// export const setHandleChecked =
//   ({ inputRefs, setChecked }: { inputRefs: React.MutableRefObject<HTMLInputElement[]>; setChecked: React.Dispatch<React.SetStateAction<checkedType>> }) =>
//   (idx: number) =>
//   () => {
//     const ref = inputRefs.current[idx] as HTMLInputElement;
//     setChecked((prev: checkedType) => ({
//       ...prev,
//       [idx]: ref?.checked,
//     }));
//   };
