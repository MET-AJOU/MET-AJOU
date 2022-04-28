import styled from "styled-components";
import { BaseImageProps } from "@Type/.";

export const Container = styled.div``;
export const BaseImage = styled.img<BaseImageProps & { idx: number }>`
  @keyframes waves {
    from {
      height: 900px;
    }
    50% {
      width: 130vw;
      height: 800px;
      top: -20px;
    }
    to {
      height: 900px;
    }
  }

  @-webkit-keyframes waves {
    from {
      height: 900px;
    }
    to {
      height: 800px;
    }
  }

  position: absolute;
  width: ${({ width }) => width};
  top: ${({ top }) => top};
  z-index: ${({ idx }) => -idx - 4};
  ${({ transform }) => transform && `transform:${transform}`}
  ${({ boxShadow }) => boxShadow && `box-shadow:${boxShadow}`}
  left: ${({ left }) => left};
  & .top {
    animation: waves 10s infinite;
    -webkit-animation: waves 10s infinite;
  }
`;
