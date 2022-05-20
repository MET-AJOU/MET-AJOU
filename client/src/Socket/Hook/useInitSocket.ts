/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
import SocketIo from "socket.io-client";
import { SOCKET_SERVER } from "@Constant/URL";
import { joinRoom } from "@Socket/Util";
import initSocketEvents from "@Socket/Util/initSocketEvents";
import { SetterOrUpdater, useRecoilValue, useSetRecoilState } from "recoil";
import { CharactersAtom, myUserIdAtom } from "@Recoils/Characters";
import { ChatType } from "@Type/Three";
import Socket from "..";

const useInitSocket = (setJoinedUserNumber: React.Dispatch<React.SetStateAction<number>>, roomId: number, setOutUserId: SetterOrUpdater<number>, setChatInfos: SetterOrUpdater<ChatType[]>) => {
  const setCharacters = useSetRecoilState(CharactersAtom);
  const setMyUserId = useSetRecoilState(myUserIdAtom);
  useEffect(() => {
    const socket = SocketIo(SOCKET_SERVER);
    // const socket = SocketIo(SOCKET_SERVER, { transports: ["websocket"] });
    initSocketEvents({ socket, setCharacters, setMyUserId, setJoinedUserNumber, setOutUserId, setChatInfos });
    joinRoom({ socket, roomId, userId: 1 });
    Socket.instance = socket;
    return () => {
      Socket.instance?.disconnect();
    };
  }, []);
};

export default useInitSocket;
