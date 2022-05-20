import { CHARACTER } from "@Constant/URL";
import useMovePage from "@Hook/useMovePage";
import { userDataAtom } from "@Recoils/UserData";
import { useCallback, useState } from "react";
import { useSetRecoilState } from "recoil";
import { setHandleMoveNext, setHandleNickName } from "./util";

const useNickName = () => {
  const setUserData = useSetRecoilState(userDataAtom);
  const [next, setNext] = useState(true);
  const [nickName, setNickName] = useState("");
  const nextPage = useMovePage(CHARACTER);
  const handleMoveNext = setHandleMoveNext({ setNext, nickName, nextPage, setUserData });
  const handleNickName = useCallback(setHandleNickName(setNickName), []);

  return { next, nickName, handleMoveNext, handleNickName };
};

export default useNickName;
