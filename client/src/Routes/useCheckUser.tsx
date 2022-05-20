import { userDataAtom } from "@Recoils/UserData";
import { useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { setHandleUserData, handlePage, setHandleLocation } from "./util";

const useCheckUser = (): [(() => JSX.Element) | null, Function] => {
  const [userData, setUserData] = useRecoilState(userDataAtom);
  const { pathname } = useLocation();
  const navigator = useNavigate();
  // const [userData, setUserData] = useState<routingType | null>(null);

  const handleUserData = useCallback(setHandleUserData(setUserData), []);
  const page = useCallback(() => handlePage({ userData }), [userData]);
  const handleLocation = useCallback(() => setHandleLocation({ userData, pathname, navigator }), [userData]);

  useEffect(() => {
    handleUserData();
  }, []);

  return [page(), handleLocation];
};

export default useCheckUser;
