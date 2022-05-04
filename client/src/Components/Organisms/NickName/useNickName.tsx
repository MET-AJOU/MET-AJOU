import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const useNickName = () => {
  const [next, setNext] = useState(true);
  const [nickName, setNickName] = useState("");
  const navigator = useNavigate();

  const handleMoveNext = () => {
    if (nickName === "") {
      setNext(false);
      return;
    }
    navigator("/character");
  };
  const handleNickName = useCallback(({ target: { value } }: { target: { value: string } }) => {
    setNickName((prev) => {
      if (value.length > 20) return prev;
      return value;
    });
  }, []);

  return { next, nickName, handleMoveNext, handleNickName };
};

export default useNickName;
