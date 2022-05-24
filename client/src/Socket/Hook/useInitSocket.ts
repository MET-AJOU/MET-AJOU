/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
import SocketIo from "socket.io-client";
import { SOCKET_SERVER } from "@Constant/URL";
import { joinRoom } from "@Socket/Util";
import initSocketEvents from "@Socket/Util/initSocketEvents";
import { SetterOrUpdater, useSetRecoilState } from "recoil";
import { CharactersAtom, myUserIdAtom } from "@Recoils/Characters";
import { ChatType } from "@Type/Three";
import { routingType } from "@Route/util";
import Socket from "..";

const useInitSocket = (setJoinedUserNumber: React.Dispatch<React.SetStateAction<number>>, roomId: number, setOutUserId: SetterOrUpdater<string>, setChatInfos: SetterOrUpdater<ChatType[]>, userData: routingType | null) => {
  const setCharacters = useSetRecoilState(CharactersAtom);
  const setMyUserId = useSetRecoilState(myUserIdAtom);

  useEffect(() => {
    // 게스트라면 없음
    console.log(userData?.userName);
    if (!userData?.userName) return;
    setMyUserId(userData.userName);
  }, []);

  useEffect(() => {
    // const socket = SocketIo(SOCKET_SERVER, { transports: ["websocket"] });
    const socket = SocketIo(SOCKET_SERVER);
    initSocketEvents({ socket, setCharacters, setMyUserId, setJoinedUserNumber, setOutUserId, setChatInfos });
    joinRoom({ socket, roomId, userId: userData?.userName ?? null });
    Socket.instance = socket;
    return () => {
      Socket.instance?.disconnect();
    };
  }, [userData]);
};

export default useInitSocket;
