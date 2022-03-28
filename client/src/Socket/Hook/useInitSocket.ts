/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
import SocketIo from "socket.io-client";
import { SOCKET_SERVER } from "@Constant/URL";
import { joinRoom } from "@Socket/Util";
import initSocketEvents from "@Socket/Util/initSocketEvents";
import Socket from "..";

const useInitSocket = () => {
  useEffect(() => {
    const socket = SocketIo(SOCKET_SERVER);
    initSocketEvents({ socket });
    joinRoom({ socket, roomId: 1, userId: 1 });
    Socket.instance = socket;
  }, []);
};

export default useInitSocket;
