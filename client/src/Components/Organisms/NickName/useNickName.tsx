import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleSetMoveNext, handleSetNickName } from "./util";

const useNickName = () => {
  const [next, setNext] = useState(true);
  const [nickName, setNickName] = useState("");
  const navigator = useNavigate();

  const handleMoveNext = handleSetMoveNext({ setNext, nickName, navigator });
  const handleNickName = useCallback(() => handleSetNickName(setNickName), []);

  return { next, nickName, handleMoveNext, handleNickName };
};

export default useNickName;
