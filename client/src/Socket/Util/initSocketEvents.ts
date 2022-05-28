import { changeUserName } from "@Recoils/UserData";
import { routingType } from "@Route/util";
import { CharacterType, ChatType } from "@Type/Three";
import { SetterOrUpdater } from "recoil";
import { Socket } from "socket.io-client";

const initSocketEvents = ({ setOutUser, socket, setCharacters, setMyUserId, setJoinedUserNumber, setChatInfos }: { socket: Socket; setCharacters: SetterOrUpdater<CharacterType[] | null>; setMyUserId: SetterOrUpdater<string>; setJoinedUserNumber: React.Dispatch<React.SetStateAction<number>>; setOutUser: SetterOrUpdater<routingType | null>; setChatInfos: SetterOrUpdater<ChatType[]> }) => {
  socket.on("joinRoom", (joinUsers: CharacterType[]) => {
    setJoinedUserNumber(joinUsers.length);
    setCharacters(joinUsers);
  });
  socket.on("joinNewUser", (joinUser: CharacterType) => {
    setJoinedUserNumber((prev) => prev + 1);
    setCharacters((joinUsers) => [...(joinUsers as CharacterType[]), joinUser]);
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
  socket.on("keyDown", (joinUsers: CharacterType[]) => setCharacters(joinUsers));
  socket.on("keyUp", (joinUsers: CharacterType[]) => setCharacters(joinUsers));
  socket.on("getUserId", (userId: string) => {
    // 게스트일때만 받자
    setMyUserId(userId);
    setOutUser(changeUserName(userId));
  });
  socket.on("leaveUser", ({ joinUsers, leaveUserId }: { joinUsers: CharacterType[]; leaveUserId: string }) => {
    setJoinedUserNumber(joinUsers.length);
    setCharacters(joinUsers);
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
};

export default initSocketEvents;
