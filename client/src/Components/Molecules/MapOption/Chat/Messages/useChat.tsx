import { chatAtom } from "@Recoils/MapOption/Chat";
import { useRef, useEffect } from "react";
import { useRecoilValue } from "recoil";

const useChat = () => {
  const chatInfos = useRecoilValue(chatAtom);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    ref.current.scrollIntoView();
  }, [chatInfos]);

  return { chatInfos, ref };
};

export default useChat;
