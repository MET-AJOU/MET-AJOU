import styled from "styled-components";
import { BaseImageProps } from "@Type/.";

export const Container = styled.div`
  & .top {
    animation: waves 7s infinite;
    -webkit-animation: waves 7s infinite;
  }
`;

export const BaseImage = styled.img<BaseImageProps & { idx: number }>`
  position: absolute;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  top: ${({ top }) => top};
  z-index: ${({ idx }) => -idx - 8};
  ${({ transform }) => transform && `transform:${transform}`}
  ${({ boxShadow }) => boxShadow && `box-shadow:${boxShadow}`}
  left: ${({ left }) => left};
`;
