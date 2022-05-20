import Messages from "./Messages";
import { ChatContainer } from "./styles";
import useChatHook from "./useChatHook";

const Chat = () => {
  const { inputRef, ChatRef, handleFocusInput, handleSendChat }: useChatHook = useChatHook();
  return (
    <ChatContainer>
      <Messages chatRef={ChatRef} />
      <input ref={inputRef} onFocus={handleFocusInput} onBlur={handleFocusInput} onKeyDown={handleSendChat} />
    </ChatContainer>
  );
};

export default Chat;

interface useChatHook {
  inputRef: React.RefObject<HTMLInputElement>;
  ChatRef: React.RefObject<HTMLDivElement>;
  handleFocusInput: () => void;
  handleSendChat: ({ keyCode }: { keyCode: any }) => void;
}
