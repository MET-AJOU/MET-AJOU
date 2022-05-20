import ChatInfo from "./ChatInfo";
import { MessagesContainer } from "./styles";
import useChat from "./useChat";

const Messages = ({ chatRef }: { chatRef: React.RefObject<HTMLDivElement> | null }) => {
  const { ref, chatInfos } = useChat();
  return (
    <MessagesContainer ref={chatRef}>
      {chatInfos.map((chat) => (
        <ChatInfo {...chat} />
      ))}
      <div ref={ref} />
    </MessagesContainer>
  );
};

export default Messages;
