import { userDataAtom } from "@Recoils/UserData";
import { routingType } from "@Route/util";
import useInitSocket from "@Socket/Hook/useInitSocket";
import { ChatType } from "@Type/Three";
import { SetterOrUpdater, useRecoilValue } from "recoil";

const SocketComponent = ({ setJoinedUserNumber, roomId, setOutUser, setChatInfos }: { setJoinedUserNumber: React.Dispatch<React.SetStateAction<number>>; roomId: number; setOutUser: SetterOrUpdater<routingType | null>; setChatInfos: SetterOrUpdater<ChatType[]> }) => {
  const userData = useRecoilValue(userDataAtom);
  console.log(userData);
  useInitSocket({ setJoinedUserNumber, roomId, setOutUser, setChatInfos, userData });
  return null;
};

export default SocketComponent;
