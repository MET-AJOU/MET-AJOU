import { Socket } from "socket.io-client";

export const joinRoom = ({ socket, roomId, userId }: { socket: Socket; roomId: number; userId: number }) => socket.emit("join", { roomId, userId });
