import { useCallback, useEffect, useState } from "react";
import { getComponent, getUserToken, routingType } from "./util";

const useCheckUser = (): (() => JSX.Element) | null => {
  const [userData, setUserData] = useState<routingType | null>(null);
  const [page, setPage] = useState<(() => JSX.Element) | null>(null);
  const handleUserData = async () => {
    const data: routingType = await getUserToken();
    setUserData(data);
  };

  const handlePage = useCallback(() => {
    if (!userData) return;
    const data = getComponent(userData);
    setPage(data);
  }, [userData]);

  useEffect(() => {
    handleUserData();
  }, []);

  useEffect(() => {
    handlePage();
  }, [userData, handlePage]);

  return page;
};

export default useCheckUser;
