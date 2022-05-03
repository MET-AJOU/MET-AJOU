import styled from "styled-components";
import { FlexColumnStyle } from "@Style/.";

export const InfoContainer = styled.div`
  width: 80vw;
  height: 90vh;
  margin: auto;
  margin-top: 5vh;
`;

export const WhiteBox = styled.div`
  width: 5vw;
  height: 1vh;
  background: #ffffff;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 20vh;
  margin-top: 5vh;
  ${FlexColumnStyle}
`;
export const Title = styled.p`
  font-weight: 600;
  font-size: 48px;
  line-height: 50px;
  color: #ffffff;
`;

export const SubTitle = styled.span`
  font-weight: 600;
  font-size: 36px;
  line-height: 40px;
  color: #ffffff;
`;
export const BlackSubTitle = styled(SubTitle)`
  color: #000000;
  opacity: 0.7;
`;
export const TextContainer = styled.div`
  width: 100%;
  height: 20vh;
  color: #ffffff;
  ${FlexColumnStyle}
`;
export const Text = styled.span`
  font-size: 16px;
  color: #ffffff;
  line-height: 24px;
`;
