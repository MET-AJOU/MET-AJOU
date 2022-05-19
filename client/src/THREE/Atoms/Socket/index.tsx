import useInitSocket from "@Socket/Hook/useInitSocket";

const SocketComponent = ({ setJoinedUserNumber, roomId }: { setJoinedUserNumber: React.Dispatch<React.SetStateAction<number>>; roomId: number }) => {
  useInitSocket(setJoinedUserNumber, roomId);
  return null;
};

export default SocketComponent;
