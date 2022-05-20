import { userDataAtom } from "@Recoils/UserData";
import { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";
import { setHandleUserData, handlePage } from "./util";

const useCheckUser = (): (() => JSX.Element) | null => {
  const [userData, setUserData] = useRecoilState(userDataAtom);
  // const [userData, setUserData] = useState<routingType | null>(null);

  const handleUserData = useCallback(setHandleUserData(setUserData), []);
  const page = useCallback(() => handlePage({ userData }), [userData]);

  useEffect(() => {
    handleUserData();
  }, []);

  return page();
};

export default useCheckUser;
