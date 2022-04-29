import styled from "styled-components";
import { BaseImageProps } from "@Type/.";

export const Container = styled.div`
  @keyframes waves {
    from {
      height: 900px;
    }
    50% {
      height: 800px;
      margin-top: -100px;
    }
    to {
      height: 900px;
      margin-top: 0px;
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
  & .top {
    animation: waves 7s infinite;
    -webkit-animation: waves 7s infinite;
  }
`;

export const BaseImage = styled.img<BaseImageProps & { idx: number }>`
  position: absolute;
  width: ${({ width }) => width};
  top: ${({ top }) => top};
  z-index: ${({ idx }) => -idx - 8};
  ${({ transform }) => transform && `transform:${transform}`}
  ${({ boxShadow }) => boxShadow && `box-shadow:${boxShadow}`}
  left: ${({ left }) => left};
`;
