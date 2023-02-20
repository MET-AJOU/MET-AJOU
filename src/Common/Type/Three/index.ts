import type { PublicApi } from "@react-three/cannon";
import type { Socket } from "socket.io-client";
import type { Object3D } from "three";

export type keyBoardStateType = {
  backward: boolean;
  forward: boolean;
  left: boolean;
  right: boolean;
  boost: boolean;
  space: boolean;
  hello: boolean;
  dance: boolean;
  happy: boolean;
  question: boolean;
  lose: boolean;
};

export type PositionType = {
  x: number;
  y: number;
  z: number;
};

export type SocketObjectType = {
  instance: null | Socket;
};

export type CharacterType = {
  userId: string;
  characterId: string;
  position: PositionType;
  keyState: keyBoardStateType;
  joinTime?: string;
  cameraDirection: PositionType;
};

export type ChatType = {
  userId: string;
  message: string;
  position: PositionType | undefined;
  type: string;
};

export type CharacterRefType = React.MutableRefObject<Object3D<Event>>;

export type CharacterRefsType = React.MutableRefObject<CharacterRefType[]>;

export type CharacterAPIRefsType = React.MutableRefObject<PublicApi[]>;

export type MyPositionType = React.MutableRefObject<PositionType>;
