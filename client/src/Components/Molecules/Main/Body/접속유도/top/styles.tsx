import { InlineStyleType } from "@Type/.";
import styled from "styled-components";

export const HomeInfoContainer = styled.div`
  width: 93vw;
  height: 100vh;
  padding-top: 80px;
  margin: auto;
`;

export const AjouLogoStyle: InlineStyleType = { position: "absolute", width: "25vw", left: "70vw", top: "100px" };

export const AirPlaneStyle: InlineStyleType = { position: "absolute", width: "20vw", left: "77vw", top: "320px" };

export const AirPathStyle: InlineStyleType = { position: "absolute", width: "10vw", left: "89vw", top: "395px" };

export const InfoContainer = styled.div`
  margin-top: -55px;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  width: 52vw;
  height: 400px;
  align-items: flex-start;
  justify-content: space-around;

  & .down {
    transition: 1s;
    position: relative;
    top: 200px;
    opacity: 0;
  }

  & .up_first {
    transition: 1s;
    position: relative;
    top: 0px;
    opacity: 1;
  }
  & .up_second {
    transition: 1s;
    position: relative;
    top: 0px;
    opacity: 0.3;
  }
  & .up_third {
    transition: 1s;
    position: relative;
    top: 0px;
    opacity: 1;
  }
  & .up_forth {
    transition: 1s;
    position: relative;
    top: 0px;
    opacity: 0.3;
  }
  & .up_fifth {
    transition: 1s;
    position: relative;
    top: 0px;
    opacity: 0.3;
  }
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
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 100px;
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
