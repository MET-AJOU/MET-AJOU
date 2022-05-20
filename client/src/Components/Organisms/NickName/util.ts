import { CHARACTER, POST_PROFILE } from "@Constant/URL";
import { routingType } from "@Route/util";
import { Request } from "@Util/Request";
import { NavigateFunction } from "react-router-dom";
import { SetterOrUpdater } from "recoil";

export const handleSetNickName =
  (setter: Function) =>
  ({ target: { value } }: { target: { value: string } }) => {
    setter((prev: string) => {
      if (value.length > 20) return prev;
      return value;
    });
  };

export const handleSetMoveNext =
  ({ setNext, nickName, navigator, setUserData }: { setNext: (v: boolean) => void; nickName: string; navigator: NavigateFunction; setUserData: SetterOrUpdater<routingType | null> }) =>
  async () => {
    if (nickName === "") {
      setNext(false);
      return;
    }
    const res = await postUserNickName(nickName);
    if (!res) return;
    setUserData((prev: any) => {
      return {
        ...prev,
        userName: nickName,
      };
    });
    navigator(CHARACTER);
  };

const postUserNickName = async (userName: string) => {
  const res = await Request({ url: POST_PROFILE, body: { userName } });
  return res;
};
