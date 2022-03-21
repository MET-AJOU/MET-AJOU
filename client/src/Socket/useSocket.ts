import { useEffect } from "react";
import Socket from "socket.io-client";
import { SOCKET_SERVER } from "@Constant/URL";

const useSocket = () => {
  let socket;
  useEffect(() => {
    socket = Socket(SOCKET_SERVER);
  }, []);

  return [socket];
};

export default useSocket;
