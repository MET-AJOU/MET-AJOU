/* eslint-disable @typescript-eslint/no-unused-vars */
import { GET_SELECT_CHARACTER_URL, GET_USER_CHARACTER_URL, POST_CHARACTER } from "@Constant/URL";
import { changeAvatarCode } from "@Recoils/UserData";
import { routingType } from "@Route/util";
import { Request } from "@Util/Request";
import Socket from "@Socket/.";

export const handleSelectFn = (setter: React.Dispatch<React.SetStateAction<number>>) => (idx: number) => () => {
  setter(idx);
};

export const getRenderCharacter = ({ characterCode }: { characterCode: string }): string => `${GET_SELECT_CHARACTER_URL}${characterCode}.fbx`;
export const getRenderUserCharacter = ({ characterCode, joinTime }: { characterCode: string; joinTime?: string }): string => `${GET_USER_CHARACTER_URL}${characterCode}.fbx?${joinTime}`;

export const getDefaultHairColor = (character: number): number => {
  switch (character) {
    case 0:
    case 5:
      return 갈;
    case 1:
    case 4:
    case 7:
      return 노;
    case 3:
    case 6:
      return 검;
    case 2:
      return 주;
    default:
      return 0;
  }
};

const 갈 = 0;
const 주 = 1;
const 노 = 2;
const 검 = 3;

const postUserCharacter = async (avatarCustomCode: string) => {
  const res = await Request({ url: POST_CHARACTER, body: { avatarCustomCode } });
  return res;
};

export const setHandleMoveNext =
  ({ setUserData, nextPage, characterCode }: { setUserData: (valOrUpdater: routingType | ((currVal: routingType | null) => routingType | null) | null) => void; nextPage: () => void; characterCode: string }) =>
  async () => {
    const res = await postUserCharacter(characterCode);
    if (!res) return;
    setUserData(changeAvatarCode(characterCode));
    nextPage();
  };

export const handleCharacterSave =
  ({ userName, setUserData, characterCode }: { userName: string; setUserData: (valOrUpdater: routingType | ((currVal: routingType | null) => routingType | null) | null) => void; characterCode: string }) =>
  async () => {
    console.log(characterCode);
    const res = await postUserCharacter(characterCode);
    if (!res) return;
    // setUserData(changeAvatarCode(characterCode));
    Socket.instance?.emit("changeCharacter", { userId: userName });
  };
