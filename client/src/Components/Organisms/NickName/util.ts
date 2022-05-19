import { POST_PROFILE } from "@Constant/URL";
import { Request } from "@Util/Request";
import { NavigateFunction } from "react-router-dom";

export const handleSetNickName =
  (setter: Function) =>
  ({ target: { value } }: { target: { value: string } }) => {
    setter((prev: string) => {
      if (value.length > 20) return prev;
      return value;
    });
  };

export const handleSetMoveNext =
  ({ setNext, nickName, navigator }: { setNext: (v: boolean) => void; nickName: string; navigator: NavigateFunction }) =>
  async () => {
    if (nickName === "") {
      setNext(false);
      return;
    }
    const res = await postUserNickName(nickName);
    if (!res) return;
    navigator("/character");
  };

const postUserNickName = async (userName: string) => {
  const res = await Request({ url: POST_PROFILE, body: { userName } });
  return res;
};
