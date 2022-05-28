import { routingType } from "@Route/util";
import useInitSocket from "@Socket/Hook/useInitSocket";
import { ChatType } from "@Type/Three";
import { SetterOrUpdater } from "recoil";

const SocketComponent = ({ setJoinedUserNumber, roomId, setOutUser, setChatInfos, userData }: { setJoinedUserNumber: React.Dispatch<React.SetStateAction<number>>; roomId: number; setOutUser: SetterOrUpdater<routingType | null>; setChatInfos: SetterOrUpdater<ChatType[]>; userData: routingType | null }) => {
  useInitSocket({ setJoinedUserNumber, roomId, setOutUser, setChatInfos, userData });
  return null;
};

export default SocketComponent;
