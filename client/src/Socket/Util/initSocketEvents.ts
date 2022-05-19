import { CharacterType } from "@Type/Three";
import { SetterOrUpdater } from "recoil";
import { Socket } from "socket.io-client";

const initSocketEvents = ({ socket, setCharacters, setMyUserId }: { socket: Socket; setCharacters: SetterOrUpdater<CharacterType[] | null>; setMyUserId: SetterOrUpdater<number> }) => {
  socket.on("joinRoom", (joinUsers: CharacterType[]) => setCharacters(joinUsers));
  socket.on("joinNewUser", (joinUser: CharacterType) => setCharacters((joinUsers) => [...(joinUsers as CharacterType[]), joinUser]));
  socket.on("keyDown", (joinUsers: CharacterType[]) => setCharacters(joinUsers));
  socket.on("keyUp", (joinUsers: CharacterType[]) => setCharacters(joinUsers));
  socket.on("getUserId", (userId: number) => setMyUserId(userId));
  socket.on("leaveUser", (joinUsers: CharacterType[]) => setCharacters(joinUsers));
};

export default initSocketEvents;
