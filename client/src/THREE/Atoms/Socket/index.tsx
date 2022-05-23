import { routingType } from "@Route/util";
import useInitSocket from "@Socket/Hook/useInitSocket";
import { ChatType } from "@Type/Three";
import { SetterOrUpdater } from "recoil";

const SocketComponent = ({ setJoinedUserNumber, roomId, setUserId, setChatInfos, userData }: { setJoinedUserNumber: React.Dispatch<React.SetStateAction<number>>; roomId: number; setUserId: SetterOrUpdater<string>; setChatInfos: SetterOrUpdater<ChatType[]>; userData: routingType | null }) => {
  useInitSocket(setJoinedUserNumber, roomId, setUserId, setChatInfos, userData);
  return null;
};

export default SocketComponent;
