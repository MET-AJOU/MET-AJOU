import { useCallback, useEffect, useState } from "react";
import { routingType, setHandlePage, setHandleUserData } from "./util";

const useCheckUser = (): (() => JSX.Element) | null => {
  const [userData, setUserData] = useState<routingType | null>(null);
  const [page, setPage] = useState<(() => JSX.Element) | null>(null);

  const handleUserData = useCallback(setHandleUserData(setUserData), []);
  const handlePage = useCallback(setHandlePage({ userData, setPage }), [userData]);

  useEffect(() => {
    handleUserData();
  }, []);

  useEffect(() => {
    handlePage();
  }, [handlePage]);
  console.log("page : ", page);
  return page;
};

export default useCheckUser;
