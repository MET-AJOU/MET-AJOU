import { Socket } from "socket.io-client";

export interface keyBoardStateType {
  backward: boolean;
  forward: boolean;
  left: boolean;
  right: boolean;
  boost: boolean;
  space: boolean;
  dance: boolean;
}

export interface PositionType {
  x: number;
  y: number;
  z: number;
}

export interface SocketObjectType {
  instance: null | Socket;
}

export interface CharacterType {
  userId: number;
  characterId: number;
  position: PositionType;
  keyState: keyBoardStateType;
}

export interface ChatType {
  userId: number;
  message: string;
  position: PositionType;
}
