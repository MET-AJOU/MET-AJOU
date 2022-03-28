/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
import SocketIo from "socket.io-client";
import { SOCKET_SERVER } from "@Constant/URL";
import { joinRoom } from "@Socket/Util";
import initSocketEvents from "@Socket/Util/initSocketEvents";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { CharactersAtom, myUserIdAtom } from "@Recoils/Characters";
import Socket from "..";

const useInitSocket = () => {
  const setCharacters = useSetRecoilState(CharactersAtom);
  const setMyUserId = useSetRecoilState(myUserIdAtom);
  useEffect(() => {
    const socket = SocketIo(SOCKET_SERVER);
    initSocketEvents({ socket, setCharacters });
    joinRoom({ socket, roomId: 1, userId: 1 });
    setMyUserId(1);
    Socket.instance = socket;
  }, []);
};

export default useInitSocket;
