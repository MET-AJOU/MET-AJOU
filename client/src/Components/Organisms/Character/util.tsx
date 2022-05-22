import { GET_SELECT_CHARACTER_URL, POST_CHARACTER } from "@Constant/URL";
import { changeAvatarCode } from "@Recoils/UserData";
import { routingType } from "@Route/util";
import { Request } from "@Util/Request";

export const handleSelectFn = (setter: React.Dispatch<React.SetStateAction<number>>) => (idx: number) => () => {
  setter(idx);
};

export const getRenderCharacter = ({ select, hairColor, costumeSelect, costumeColor }: getRenderCharacterType): string => `${GET_SELECT_CHARACTER_URL}${[select, ".", hairColor, ".", costumeSelect, ".", costumeColor].join("")}.fbx`;

interface getRenderCharacterType {
  select: number;
  hairColor: number;
  costumeSelect: number;
  costumeColor: number;
}

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
  ({ setUserData, nextPage, renderCharacter }: { setUserData: (valOrUpdater: routingType | ((currVal: routingType | null) => routingType | null) | null) => void; nextPage: () => void; renderCharacter: string }) =>
  async () => {
    const res = await postUserCharacter(renderCharacter);
    if (!res) return;
    setUserData(changeAvatarCode(renderCharacter));
    nextPage();
  };
