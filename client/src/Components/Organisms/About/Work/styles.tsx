import { FlexColumnStyle } from "@Style/.";
import styled from "styled-components";

export const Container = styled.div`
  width: 90vw;
  ${FlexColumnStyle}
  height: 80vh;
  margin: auto;
  margin-top: 60vh;
  align-items: center;
`;

export const InstaContainer = styled.div`
  display: grid;
  width: 55%;
  height: 70%;
  margin-top: 2vh;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 1vw;
  grid-column-gap: 2vh;
  padding-top: 1vh;

  background: #eff3ff;
  border-radius: 24px;
`;

export const Seongu = styled.img`
  position: relative;
  width: 10vw;
  left: -25vw;
  top: -14vh;
  transition: 1.5s;
`;
