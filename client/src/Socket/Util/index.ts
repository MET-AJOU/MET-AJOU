import { Socket } from "socket.io-client";

export const joinRoom = ({ socket, roomId, userId,characterId }: { socket: Socket; roomId: number; userId: string; characterId : string; }) => socket.emit("join", { roomId, userId,characterId });
