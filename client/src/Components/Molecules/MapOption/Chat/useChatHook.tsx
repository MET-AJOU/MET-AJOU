import { myUserIdAtom, myPositionAtom } from "@Recoils/Characters";
import Socket from "@Socket/.";
import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";

const useChatHook = () => {
  const userId = useRecoilValue(myUserIdAtom);
  const position = useRecoilValue(myPositionAtom);
  const [on, setOn] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const ChatRef = useRef<HTMLDivElement>(null);

  const handleFocusInput = () => {
    setOn((prev) => !prev);
  };

  const handleSendChat = ({ keyCode }: { keyCode: any }) => {
    if (!inputRef.current) return;
    if (keyCode !== 13) return;
    const message = inputRef.current.value;
    console.log(userId);
    Socket.instance?.emit("chat", { userId, message, position });
    inputRef.current.value = "";
  };

  useEffect(() => {
    if (!ChatRef.current) return;
    if (on) {
      ChatRef.current.classList.add("on");
    } else {
      ChatRef.current.classList.remove("on");
    }
  }, [on]);

  return { inputRef, ChatRef, handleFocusInput, handleSendChat };
};

export default useChatHook;
