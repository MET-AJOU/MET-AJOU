import { BaseImageProps } from "@Type/.";
import styled from "styled-components";

export const HomeInfoContainer = styled.div`
  width: 93vw;
  height: 100vh;
  padding-top: 80px;
  margin: auto;

  div {
    font-size: 48px;
    font-style: bold;
    padding: 20px 0;
    span {
      color: #5f96fd;
    }
  }
  p:nth-child(4) {
    margin-bottom: 30px;
  }
`;

export const BaseImage = styled.img<BaseImageProps & { idx: number }>`
  position: absolute;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  left: ${({ left }) => left};
  top: ${({ top }) => top};
  z-index: ${({ idx }) => -idx - 1};
`;
