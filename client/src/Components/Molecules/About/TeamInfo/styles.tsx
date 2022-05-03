import { CenterAroundStyle } from "@Style/.";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 80%;
  height: 70%;
  margin-top: 2vh;
  ${CenterAroundStyle}
  & .arrow {
    &:hover {
      cursor: pointer;
      opacity: 0.5;
      transition: 0.5s;
    }
  }
`;

export const TeamImg = styled.img`
  width: 35vw;
`;

export const CircleContainer = styled.div`
  margin-top: 2vh;
  width: 20%;
  display: flex;
  ${CenterAroundStyle}
`;
