import styled from "styled-components";
import { FlexColumnStyle, CenterAroundStyle } from "@Style/.";

export const Container = styled.div`
  width: 90vw;
  height: 65vh;
  margin: auto;
  margin-top: 50vh;
  align-items: center;
  ${FlexColumnStyle}
`;

export const CardContainer = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
  margin: auto;
  ${CenterAroundStyle}
`;
