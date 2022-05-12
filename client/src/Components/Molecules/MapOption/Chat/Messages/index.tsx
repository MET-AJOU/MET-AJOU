import { MessagesContainer } from "./styles";

const Messages = ({ chatRef }: { chatRef: React.RefObject<HTMLDivElement> | null }) => {
  return <MessagesContainer ref={chatRef} />;
};

export default Messages;
