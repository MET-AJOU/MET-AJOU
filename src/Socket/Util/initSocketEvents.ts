import { CharacterStates } from "@Store/CharacterStates";
import { changeUserName } from "@Recoils/UserData";
import { routingType } from "@Route/util";
import { CharacterType, ChatType } from "@Type/Three";
import { SetterOrUpdater } from "recoil";
import { Socket } from "socket.io-client";

const initSocketEvents = ({ setOutUser, socket, setCharacters, setMyUserId, setJoinedUserNumber, setChatInfos }: { socket: Socket; setCharacters: SetterOrUpdater<CharacterType[]>; setMyUserId: SetterOrUpdater<string>; setJoinedUserNumber: React.Dispatch<React.SetStateAction<number>>; setOutUser: SetterOrUpdater<routingType | null>; setChatInfos: SetterOrUpdater<ChatType[]> }) => {
  socket.on("joinRoom", (joinUsers: CharacterType[]) => {
    setJoinedUserNumber(joinUsers.length);
    setCharacters(joinUsers);
    CharacterStates.instance = joinUsers;
  });

  socket.on("joinNewUser", (joinUser: CharacterType) => {
    setJoinedUserNumber((prev) => prev + 1);
    setCharacters((joinUsers) => [...(joinUsers as CharacterType[]), joinUser]);
    CharacterStates.instance = [...CharacterStates.instance, joinUser];
    setChatInfos((prev) => [
      ...prev,
      {
        userId: joinUser.userId,
        message: "님이 입장하셨습니다.",
        position: undefined,
        type: "enter",
      },
    ]);
  });
  socket.on("keyDown", (joinUsers: CharacterType[]) => {
    CharacterStates.instance = joinUsers;
  });

  socket.on("keyUp", (joinUsers: CharacterType[]) => {
    CharacterStates.instance = joinUsers;
  });

  socket.on("getUserId", (userId: string) => {
    setMyUserId(userId);
    setOutUser(changeUserName(userId));
  });

  socket.on("leaveUser", ({ joinUsers, leaveUserId }: { joinUsers: CharacterType[]; leaveUserId: string }) => {
    setJoinedUserNumber(joinUsers.length);
    setCharacters(joinUsers);
    CharacterStates.instance = joinUsers;
    setChatInfos((prev) => [
      ...prev,
      {
        userId: leaveUserId,
        message: "님이 퇴장하셨습니다.",
        position: undefined,
        type: "leave",
      },
    ]);
  });

  socket.on("chat", (chatInfo: ChatType) => {
    setChatInfos((prev) => [...prev, chatInfo]);
  });

  socket.on("changeCharacter", ({ joinTime, userId }: { joinTime: string; userId: string }) => {
    setCharacters((prev) =>
      prev.map((character) => {
        return character.userId === userId ? { ...character, joinTime } : character;
      })
    );
  });

  socket.on("changeCameraDirection", (joinUsers: CharacterType[]) => {
    CharacterStates.instance = joinUsers;
  });
};

export default initSocketEvents;
