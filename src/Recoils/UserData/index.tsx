import { routingType } from "@Route/util";
import { atom } from "recoil";

export const userDataAtom = atom<routingType | null>({
  key: "userDataAtom",
  default: null,
});

export const changeAvatarCode = (avatarCustomCode: string) => (prev: any) => ({
  ...prev,
  avatarCustomCode,
});

export const changeUserName = (userName: string) => (prev: any) => ({
  ...prev,
  userName,
});
