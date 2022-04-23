import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const useEmail = () => {
  const [email, setEmail] = useState<any>("");
  const [next, setNext] = useState<boolean>(true);
  const navigator = useNavigate();

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const str = e.target.value;
    if (str.length > 20) return;

    setEmail(str);
    if (str.length > 0) setNext(true);
  };

  const handleMoveNext = () => {
    if (email.length > 0) navigator("/checkToken");
    setNext(false);
  };
  return [email, next, onChangeEmail, handleMoveNext];
};

export default useEmail;
