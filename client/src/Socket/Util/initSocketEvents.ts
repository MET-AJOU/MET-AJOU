import { CharacterType, ChatType } from "@Type/Three";
import { SetterOrUpdater } from "recoil";
import { Socket } from "socket.io-client";

const initSocketEvents = ({ setOutUserId, socket, setCharacters, setMyUserId, setJoinedUserNumber, setChatInfos }: { socket: Socket; setCharacters: SetterOrUpdater<CharacterType[] | null>; setMyUserId: SetterOrUpdater<number>; setJoinedUserNumber: React.Dispatch<React.SetStateAction<number>>; setOutUserId: SetterOrUpdater<number>; setChatInfos: SetterOrUpdater<ChatType[]> }) => {
  socket.on("joinRoom", (joinUsers: CharacterType[]) => {
    setJoinedUserNumber(joinUsers.length);
    setCharacters(joinUsers);
  });
  socket.on("joinNewUser", (joinUser: CharacterType) => {
    setJoinedUserNumber((prev) => prev + 1);
    setCharacters((joinUsers) => [...(joinUsers as CharacterType[]), joinUser]);
  });
  socket.on("keyDown", (joinUsers: CharacterType[]) => setCharacters(joinUsers));
  socket.on("keyUp", (joinUsers: CharacterType[]) => setCharacters(joinUsers));
  socket.on("getUserId", (userId: number) => {
    setMyUserId(userId);
    setOutUserId(userId);
  });
  socket.on("leaveUser", (joinUsers: CharacterType[]) => {
    setJoinedUserNumber(joinUsers.length);
    setCharacters(joinUsers);
  });
  socket.on("chat", (chatInfo: ChatType) => {
    setChatInfos((prev) => [...prev, chatInfo]);
  });
};

export default initSocketEvents;
