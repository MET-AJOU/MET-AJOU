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

  const handleMoveNext = async () => {
    if (email.length <= 0) {
      setNext(false);
      return;
    }
    handleCheck();
    const res = await handleVerifyEmail(email);
    if (res) return;
    handleCheck();
  };
  return { email, next, handleEmailChange, handleMoveNext };
};

export default useEmail;
