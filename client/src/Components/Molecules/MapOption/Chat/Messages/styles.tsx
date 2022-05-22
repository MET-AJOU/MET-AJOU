import styled, { css } from "styled-components";

export const MessagesContainer = styled.div`
  width: 413px;
  height: 0px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  box-sizing: border-box;
  overflow: auto;
  transition-duration: 2s;

  &.on {
    transition-duration: 2s;
    width: 413px;
    height: 190px;
    padding: 10px;
  }
`;

export const ChatContainer = styled.div<ChatType>`
  color: #ffffff;
  padding: 5px;
  display: flex;
  align-items: center;
  ${({ type }) => type === "chat" && ChatStyle}
  ${({ type }) => type !== "chat" && EnterAndExitStyle}
`;

const ChatStyle = css`
  color: #ffffff;
`;
const EnterAndExitStyle = css`
  color: #6096fd;
`;

interface ChatType {
  type: string;
}
