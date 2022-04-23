import styled from "styled-components";

export const ModalItemContainer = styled.div`
  height: 75%;
  width: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  opacity: 1;
  z-index: 1;
  cursor: pointer;
  transition-duration: 1s;

  :hover {
    width: 310px;
    height: 80%;
    transition-duration: 1s;
  }
`;

export const ModalItemTitle = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 42px;
  text-align: center;
  letter-spacing: -0.02em;
  padding: 23px;
  height: 75px;
  color: #000000;
`;
