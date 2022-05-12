import { useEffect, useRef, useState } from "react";

const useChatHook = () => {
  const [on, setOn] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const ChatRef = useRef<HTMLDivElement>(null);

  const handleFocusInput = () => {
    setOn((prev) => !prev);
  };

  useEffect(() => {
    if (!ChatRef.current) return;
    if (on) {
      ChatRef.current.classList.add("on");
    } else {
      ChatRef.current.classList.remove("on");
    }
  }, [on]);

  return { inputRef, ChatRef, handleFocusInput };
};

export default useChatHook;
