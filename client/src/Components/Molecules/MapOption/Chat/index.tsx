import Messages from "./Messages";
import { ChatContainer } from "./styles";
import useChatHook from "./useChatHook";

const Chat = () => {
  const { inputRef, ChatRef, handleFocusInput }: useChatHook = useChatHook();
  return (
    <ChatContainer>
      <Messages chatRef={ChatRef} />
      <input ref={inputRef} onFocus={handleFocusInput} onBlur={handleFocusInput} />
    </ChatContainer>
  );
};

export default Chat;

interface useChatHook {
  inputRef: React.RefObject<HTMLInputElement>;
  ChatRef: React.RefObject<HTMLDivElement>;
  handleFocusInput: () => void;
}
