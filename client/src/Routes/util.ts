import { GET_API_TOKEN_MINE, GET_PROFILE, GET_CHARACTER } from "@Constant/URL";
import ChannelPage from "@Pages/Channel";
import CharacterPage from "@Pages/Character";
import NickNamePage from "@Pages/NickName";
import PrivacyPage from "@Pages/Privacy";
import RegisterPage from "@Pages/Register";
import { Request } from "@Util/Request";
import { NavigateFunction } from "react-router-dom";
import { SetterOrUpdater } from "recoil";

const getUserTokenURL = [GET_API_TOKEN_MINE, GET_PROFILE, GET_CHARACTER];
const getUserToken = async () => {
  console.time("promise All");
  const res = await Promise.all(getUserTokenURL.map((url: string) => Request({ url, method: "GET" })));
  const data = setUserTokenData(res);
  console.log(data);
  console.timeEnd("promise All");
  console.time("동기");
  const { role, verifiedEmail, useable } = await Request({ url: GET_API_TOKEN_MINE, method: "GET" });
  const { userName } = await Request({ url: GET_PROFILE, method: "GET" });
  const { avatarCustomCode } = await Request({ url: GET_CHARACTER, method: "GET" });
  console.timeEnd("동기");
  console.log({
    role,
    verifiedEmail,
    useable,
    userName,
    avatarCustomCode,
  });
  return {
    role,
    verifiedEmail,
    useable,
    userName,
    avatarCustomCode,
  };
};

const setUserTokenData = (arr: any[]) =>
  arr.reduce((acc, cur) => {
    if ("role" in cur) acc.role = cur.role;
    if ("verifiedEmail" in cur) acc.verifiedEmail = cur.verifiedEmail;
    if ("useable" in cur) acc.useable = cur.useable;
    if ("userName" in cur) acc.userName = cur.userName;
    if ("avatarCustomCode" in cur) acc.avatarCustomCode = cur.avatarCustomCode;
    return acc;
  }, {});

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
  avatarCustomCode: string | null;
}

export const setHandleUserData = (setter: SetterOrUpdater<routingType | null>) => async () => {
  const data: routingType = await getUserToken();
  setter(data);
};

export const handlePage = ({ userData }: { userData: routingType | null }) => {
  if (!userData) return null;
  return getComponent(userData);
};

const getComponentName = ({ role, verifiedEmail, useable, userName, avatarCustomCode }: routingType): string => {
  if (role === "ROLE_USER") return "/Channel";
  if (avatarCustomCode) return "/Channel";
  if (userName) return "/character";
  if (useable) return "/nickName";
  if (verifiedEmail) return "/privacy";
  return "/verify";
};

const checkLocation = ({ userData }: { userData: routingType | null }) => {
  if (!userData) return null;
  return getComponentName(userData);
};

export const setHandleLocation = ({ userData, pathname, navigator }: { userData: routingType | null; pathname: string; navigator: NavigateFunction }) => {
  const location = checkLocation({ userData });
  console.log("location : ", location);
  console.log("pathname : ", pathname);
  if (!location) return false;
  if (pathname === location) return false;
  navigator(location);
  return true;
};
