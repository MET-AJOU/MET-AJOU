import { PositionType } from "@Type/Three";
import { Socket } from "socket.io-client";

const initSocketEvents = ({ socket }: { socket: Socket }) => {
  socket.on("join", ({ userId, characterId, position }: { userId: number; characterId: number; position: PositionType }) => {
    console.log(userId, characterId, position);
  });
};

export default initSocketEvents;
