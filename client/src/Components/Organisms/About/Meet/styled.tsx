import styled from "styled-components";
import BlueText from "@Atoms/Text";
import { CenterAroundStyle, FlexColumnStyle } from "@Style/.";

export const Container = styled.div`
  width: 60vw;
  height: 15vh;
  ${FlexColumnStyle}
  ${CenterAroundStyle}
  text-align: center;
  margin: auto;
  margin-top: 40vh;
  margin-bottom: 40vh;
  font-weight: 600;
`;
export const Title = styled(BlueText)`
  font-size: 1.8rem;
`;
export const Text = styled.p`
  font-size: 0.8rem;
`;
