import { POST_PROFILE } from "@Constant/URL";
import { changeUserName } from "@Recoils/UserData";
import { routingType } from "@Route/util";
import { Request } from "@Util/Request";
import { SetterOrUpdater } from "recoil";

export const setHandleNickName =
  (setter: Function) =>
  ({ target: { value } }: { target: { value: string } }) => {
    setter((prev: string) => {
      if (value.length > 20) return prev;
      return value;
    });
  };

export const setHandleMoveNext =
  ({ setNext, nickName, nextPage, setUserData }: { setNext: (v: boolean) => void; nickName: string; nextPage: () => void; setUserData: SetterOrUpdater<routingType | null> }) =>
  async () => {
    if (nickName === "") {
      setNext(false);
      return;
    }
    const res = await postUserNickName(nickName);
    if (!res) return;
    setUserData(changeUserName(nickName));
    nextPage();
  };

const postUserNickName = async (userName: string) => {
  const res = await Request({ url: POST_PROFILE, body: { userName } });
  return res;
};
