/* eslint-disable @typescript-eslint/no-unused-vars */
import { PositionType } from "@Type/Three";
import { ChatContainer, ChatEnterContainer } from "../styles";

const ChatInfo = ({ userId, message, position }: { userId: number; message: string | undefined; position: PositionType | undefined }) => {
  if (message) {
    return (
      <ChatContainer>
        {userId} : {message}
      </ChatContainer>
    );
  }
  return <ChatEnterContainer>{userId} 님이 접속하셨습니다.</ChatEnterContainer>;
};

export default ChatInfo;
