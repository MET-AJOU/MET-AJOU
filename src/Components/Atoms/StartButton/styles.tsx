/* eslint-disable no-nested-ternary */
import styled from "styled-components";

interface Props {
  color: string;
}

export const Button = styled.button<Props>`
  cursor: pointer;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  width: 89px;
  height: 26px;
  background: ${({ color }) => (color === "blue" ? "#6096FD" : color === "grey" ? "#C4C4C4" : "rgba(255, 255, 255, 0.3)")};
  ${({ color }) => color === "blue" && "box-shadow: 0px 10px 20px rgba(96, 150, 253, 0.3);"}
  border-radius: 30px;
  transition: 0.5s;
  ${({ color }) =>
    color === "blue" &&
    `&:hover {
    width: 100px;
    height: 30px;
    transition: 0.5s;
    text-align: center;
  }`}
`;
