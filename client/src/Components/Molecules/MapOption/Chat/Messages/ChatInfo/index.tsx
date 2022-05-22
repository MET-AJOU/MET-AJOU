/* eslint-disable @typescript-eslint/no-unused-vars */
import { PositionType } from "@Type/Three";
import { ChatContainer } from "../styles";

const ChatInfo = ({ userId, message, position, type }: { userId: number; message: string; position: PositionType | undefined; type: string }) => {
  return (
    <ChatContainer type={type}>
      {userId} : {message}
    </ChatContainer>
  );
};

export default ChatInfo;
