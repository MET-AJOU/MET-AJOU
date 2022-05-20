/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useEffect, useState } from "react";
import { routingType, setHandleUserData, testHandlePage } from "./util";

const useCheckUser = (): (() => JSX.Element) | null => {
  const [userData, setUserData] = useState<routingType | null>(null);

  const handleUserData = useCallback(setHandleUserData(setUserData), []);
  const page = useCallback(() => testHandlePage({ userData }), [userData]);

  useEffect(() => {
    handleUserData();
  }, []);
  // const [page, setPage] = useState<(() => JSX.Element) | null>(null);
  // const handlePage = useCallback(setHandlePage({ userData, setPage }), [userData]);
  // useEffect(handlePage, [handlePage]);

  return page();
};

export default useCheckUser;
