import { GET_API_TOKEN_MINE, GET_PROFILE, GET_CHARACTER, CHARACTER, NICKNAME, PRIVACY, VERIFY, CHANNEL } from "@Constant/URL";
import ChannelPage from "@Pages/Channel";
import CharacterPage from "@Pages/Character";
import NickNamePage from "@Pages/NickName";
import PrivacyPage from "@Pages/Privacy";
import RegisterPage from "@Pages/Register";
import { Request } from "@Util/Request";
import { NavigateFunction } from "react-router-dom";
import { SetterOrUpdater } from "recoil";

const getUserTokenURL = [GET_API_TOKEN_MINE, GET_PROFILE, GET_CHARACTER];

export const updateUserData = async ({ postData, setUserData }: { postData: object; setUserData: SetterOrUpdater<routingType | null> }) => {
  await Request({ url: GET_PROFILE, body: postData, method: "POST" });
  setUserData(await getUserToken());
};

const setUserTokenData = (arr: any[]) =>
  arr.reduce((acc, cur) => {
    console.log(cur);
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

const getComponent = ({ role, verifiedEmail, useable, userName, avatarCustomCode }: routingType): (() => JSX.Element) => {
  if (role === "ROLE_USER") return ChannelPage;
  if (avatarCustomCode) return ChannelPage;
  if (userName) return CharacterPage;
  if (useable) return NickNamePage;
  if (verifiedEmail) return PrivacyPage;
  return RegisterPage;
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

const getComponentName = ({ role, verifiedEmail, useable, userName, avatarCustomCode }: routingType): string => {
  if (role === "ROLE_USER") return CHANNEL;
  if (avatarCustomCode) return CHANNEL;
  if (userName) return CHARACTER;
  if (useable) return NICKNAME;
  if (verifiedEmail) return PRIVACY;
  return VERIFY;
};

export const handlePage = ({ userData }: { userData: routingType | null }) => {
  if (!userData) return null;
  return getComponent(userData);
};

const checkLocation = ({ userData }: { userData: routingType | null }) => {
  if (!userData) return null;
  return getComponentName(userData);
};

export const setHandleLocation = ({ userData, pathname, navigator }: { userData: routingType | null; pathname: string; navigator: NavigateFunction }) => {
  const location = checkLocation({ userData });
  if (!location) return false;
  if (pathname === location) return false;
  navigator(location);
  return true;
};
