/* eslint-disable consistent-return */
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

const useInitSocket = ({ setJoinedUserNumber, roomId, setOutUser, setChatInfos, userData }: { setJoinedUserNumber: React.Dispatch<React.SetStateAction<number>>; roomId: number; setOutUser: SetterOrUpdater<routingType | null>; setChatInfos: SetterOrUpdater<ChatType[]>; userData: routingType | null }) => {
  const setCharacters = useSetRecoilState(CharactersAtom);
  const setMyUserId = useSetRecoilState(myUserIdAtom);

  useEffect(() => {
    if (userData?.userName) setMyUserId(userData.userName);
  }, []);

  useEffect(() => {
    const socket = SocketIo(SOCKET_SERVER, { transports: ["websocket"] });
    initSocketEvents({ socket, setCharacters, setMyUserId, setJoinedUserNumber, setOutUser, setChatInfos });
    joinRoom({ socket, roomId, userId: userData?.userName ?? null });
    Socket.instance = socket;
  }, []);

  useEffect(() => {
    if (!userData) return;
    return () => {
      Socket.instance?.disconnect();
    };
  }, [userData]);
};

export default useInitSocket;
