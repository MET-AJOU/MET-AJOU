import { ChangeEvent, useCallback, useState } from "react";
import { handleVerifyEmail } from "./util";

const useEmail = ({ handleCheck }: { handleCheck: () => void }) => {
  const [email, setEmail] = useState<string>("");
  const [next, setNext] = useState<boolean>(true);

  const handleEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const str = e.target.value;
    if (str.length > 20) return;

    setEmail(str);
    if (str.length > 0) setNext(true);
  }, []);

  const handleMoveNext = () => {
    if (email.length > 0) {
      // 비동기로 작성
      handleVerifyEmail(email);
      handleCheck();
    } else {
      setNext(false);
    }
  };
  return { email, next, handleEmailChange, handleMoveNext };
};

export default useEmail;
