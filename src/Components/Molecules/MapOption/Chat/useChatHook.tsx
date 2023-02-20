import { userDataAtom } from "@Recoils/UserData";
import Socket from "@Socket/.";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { routingType } from "@Route/util";

const useChatHook = () => {
  const userData = useRecoilValue(userDataAtom) as routingType;
  const userId = useMemo(() => userData?.userName ?? "nn", [userData]);
  const [on, setOn] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const ChatRef = useRef<HTMLDivElement>(null);

  const handleFocusInput = useCallback(() => {
    setOn((prev) => !prev);
  }, []);

  const handleSendChat = useCallback(
    ({ keyCode }: { keyCode: any }) => {
      if (!inputRef.current) return;
      if (keyCode !== 13) return;
      const message = inputRef.current.value;
      Socket.instance?.emit("chat", { userId, message });
      inputRef.current.value = "";
    },
    [userId]
  );

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
