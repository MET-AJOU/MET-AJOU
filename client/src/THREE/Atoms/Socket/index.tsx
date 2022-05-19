import useInitSocket from "@Socket/Hook/useInitSocket";

const SocketComponent = ({ roomId }: { roomId: number }) => {
  useInitSocket(roomId);
  return null;
};

export default SocketComponent;
