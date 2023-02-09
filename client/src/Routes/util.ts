import { GET_API_TOKEN_MINE, GET_PROFILE, GET_CHARACTER } from "@Constant/URL";
import { Request } from "@Util/Request";
import { SetterOrUpdater } from "recoil";

const getUserTokenURL = [GET_API_TOKEN_MINE, GET_PROFILE, GET_CHARACTER];

export const updateUserData = async ({ postData, setUserData }: { postData: object; setUserData: SetterOrUpdater<routingType | null> }) => {
  await Request({ url: GET_PROFILE, body: postData, method: "POST" });
  setUserData(await getUserToken());
};

const setUserTokenData = (arr: any[]) =>
  arr.reduce((acc, cur) => {
    if ("role" in cur) acc.role = cur.role;
    if ("verifiedEmail" in cur) acc.verifiedEmail = cur.verifiedEmail;
    if ("useable" in cur) acc.useable = cur.useable;
    if ("nickname" in cur) acc.userName = cur.nickname;
    if ("avatarCustomCode" in cur) acc.avatarCustomCode = cur.avatarCustomCode;
    if ("userName" in cur) acc.userNickName = cur.userName;
    if ("department" in cur) acc.userDepartment = cur.department;
    if ("schoolCode" in cur) acc.userStudentCode = cur.schoolCode;
    if ("userEmail" in cur) acc.userEmail = cur.userEmail;
    if ("description" in cur) acc.userMessage = cur.description;
    return acc;
  }, {});

const getUserToken = async () => {
  const res = await Promise.all(getUserTokenURL.map((url: string) => Request({ url, method: "GET" })));
  return setUserTokenData(res);
};

export interface routingType {
  role: "ROLE_USER" | "ROLE_GUEST";
  verifiedEmail: string | null;
  useable: boolean | null;
  userName: string | null;
  userNickName: string | null;
  userDepartment: string | null;
  userStudentCode: string | null;
  userEmail: string | null;
  userMessage: string | null;
  avatarCustomCode: string | null;
}

export const setHandleUserData = (setter: SetterOrUpdater<routingType | null>) => async () => {
  const data: routingType = await getUserToken();
  setter(data);
};
