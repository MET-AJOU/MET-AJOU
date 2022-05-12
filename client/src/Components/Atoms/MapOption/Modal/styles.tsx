import styled from "styled-components";

export const ControlModalContainer = styled.div`
  position: fixed;
  top: 10%;
  left: 10%;
  width: 80%;
  height: 80%;
`;

export const ControlModalImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const CloseModal = styled.img<{ size: string }>`
  width: 50px;
  height: 50px;
  position: fixed;
  top: calc(10% + 10px);
  right: ${({ size }) => `calc(${size}% + 10px)`};
  cursor: pointer;
`;
