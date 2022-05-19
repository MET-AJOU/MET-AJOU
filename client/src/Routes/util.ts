import { GET_API_TOKEN_MINE, GET_CHARACTER, GET_PROFILE } from "@Constant/URL";
import ChannelPage from "@Pages/Channel";
import CharacterPage from "@Pages/Character";
import NickNamePage from "@Pages/NickName";
import PrivacyPage from "@Pages/Privacy";
import RegisterPage from "@Pages/Register";
import { Request } from "@Util/Request";

export const getUserToken = async () => {
  const { role, verifiedEmail, useable } = await Request({ url: GET_API_TOKEN_MINE, method: "GET" });
  const { userName } = await Request({ url: GET_PROFILE, method: "GET" });
  const { avatarCustomCode } = await Request({ url: GET_CHARACTER, method: "GET" });
  return {
    role,
    verifiedEmail,
    useable,
    userName,
    avatarCustomCode,
  };
};

export const getComponent = ({ role, verifiedEmail, useable, userName, avatarCustomCode }: routingType): (() => JSX.Element) => {
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
