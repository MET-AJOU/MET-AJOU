import { MessagesContainer } from "./styles";
import useChat from "./useChat";

const Messages = ({ chatRef }: { chatRef: React.RefObject<HTMLDivElement> | null }) => {
  const { ref, chatInfos } = useChat();
  return (
    <MessagesContainer ref={chatRef}>
      {chatInfos.map(({ userId, message }) => (
        <div>
          {userId} : {message}
        </div>
      ))}
      <div ref={ref} />
    </MessagesContainer>
  );
};

export default Messages;
