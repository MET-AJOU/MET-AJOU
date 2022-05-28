import styled from "styled-components";

export const ExitModalContainer = styled.div`
  flex-direction: column;
  position: fixed;
  background: #ffffff;
  top: 30%;
  left: 37%;
  width: 27vw;
  height: 33vh;
  border-radius: 16px;
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

export const ContentContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 65%;
  top: 20%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

interface Props {
  color: string;
}

export const Button = styled.button<Props>`
  cursor: pointer;
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  width: 150px;
  height: 48px;
  background: ${({ color }) => (color === "blue" ? "#6096FD" : "rgba(255, 255, 255, 0.3)")};
  ${({ color }) => color === "blue" && "box-shadow: 0px 10px 20px rgba(96, 150, 253, 0.3);"}
  border-radius: 30px;
  transition: 0.5s;
  &:hover {
    width: 172px;
    height: 56px;
    transition: 0.5s;
    text-align: center;
    box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
  }
`;
