import styled from "styled-components";
import { FlexColumnStyle, CenterAroundStyle } from "@Style/.";

export const Container = styled.div`
  width: 80vw;
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
  filter: drop-shadow(20px 10px 10px rgba(0, 0, 0, 0.1));
  ${CenterAroundStyle};
`;
