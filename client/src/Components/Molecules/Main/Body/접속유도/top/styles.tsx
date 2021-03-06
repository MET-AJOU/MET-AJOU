import { InlineStyleType } from "@Type/.";
import styled from "styled-components";

export const HomeInfoContainer = styled.div`
  width: 93vw;
  height: 70vh;
  padding-top: 80px;
  margin: auto;
`;

export const AjouLogoStyle: InlineStyleType = { position: "absolute", width: "25vw", left: "66vw", top: "15vh" };

export const AirPlaneStyle: InlineStyleType = { position: "absolute", width: "20vw", left: "45vw", top: "15vh", zIndex: "-14", opacity: "0" };

export const InfoContainer = styled.div`
  margin-top: -55px;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  width: 52vw;
  height: 400px;
  min-height: 400px;
  align-items: flex-start;
  /* justify-content: space-around; */
`;

export const BlueBox = styled.div`
  width: 65px;
  height: 7px;
  background: #6096fd;
`;

export const InfoTitle = styled.div`
  width: 110%;
  height: 100px;
  font-size: 48px;
  font-weight: 600;
  line-height: 55px;
  margin-top: 60px;
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const InfoText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  margin-top: 10px;
  margin-left: 5px;
  color: #000000;
`;
