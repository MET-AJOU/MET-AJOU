import useInitSocket from "@Socket/Hook/useInitSocket";
import { ChatType } from "@Type/Three";
import { SetterOrUpdater } from "recoil";

const SocketComponent = ({ setJoinedUserNumber, roomId, setUserId, setChatInfos }: { setJoinedUserNumber: React.Dispatch<React.SetStateAction<number>>; roomId: number; setUserId: SetterOrUpdater<number>; setChatInfos: SetterOrUpdater<ChatType[]> }) => {
  useInitSocket(setJoinedUserNumber, roomId, setUserId, setChatInfos);
  return null;
};

export default SocketComponent;
