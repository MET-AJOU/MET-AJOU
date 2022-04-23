import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 800px;
  height: 600px;
  position: fixed;
  top: 100px;
  left: calc(50% - 400px);
  box-shadow: 0px 0px 50px #00000029;
  border-radius: 28px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;

export const ItemContainer = styled.div`
  width: 80%;
  height: 400px;
  position: absolute;
  top: 0px;
  left: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ModalTitle = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 48px;
  text-align: center;
  margin-top: 10px;
  height: 50px;
`;

export const ModalDescription = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  padding: 10px;
  color: #000000;
  height: 35px;
`;

export const ModalLogo = styled.img`
  width: 150px;
  height: 50px;
  padding: 10px;
`;
