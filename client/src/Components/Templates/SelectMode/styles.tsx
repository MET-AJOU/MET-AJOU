import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 1000px;
  height: 650px;
  position: fixed;
  top: 75px;
  left: calc(50% - 500px);
  box-shadow: inset 2px 2px 20px rgba(0, 0, 0, 0.1);
  border-radius: 28px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;

export const ItemContainer = styled.div`
  width: 650px;
  height: 400px;
  position: absolute;
  top: 0px;
  left: 175px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ModalTitle = styled.h1`
  font-family: "NanumBarunGothic";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 48px;
  text-align: center;
  margin-top: 26px;
  height: 50px;
`;

export const ModalDescription = styled.p`
  font-family: "NanumBarunGothic";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  padding: 10px;
  color: #000000;
  height: 47px;
`;

export const ModalLogo = styled.img`
  width: 200px;
  height: 60px;
  padding: 10px;
`;
