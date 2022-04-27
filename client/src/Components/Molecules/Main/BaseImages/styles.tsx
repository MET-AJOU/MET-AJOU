import styled from "styled-components";
import { BaseImageProps } from "@Type/.";

export const BaseImage = styled.img<BaseImageProps & { idx: number }>`
  position: absolute;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  left: ${({ left }) => left};
  top: ${({ top }) => top};
  z-index: ${({ idx }) => -idx - 4};
  ${({ transform }) => transform && `transform:${transform}`}
  ${({ boxShadow }) => boxShadow && `box-shadow:${boxShadow}`}
`;
