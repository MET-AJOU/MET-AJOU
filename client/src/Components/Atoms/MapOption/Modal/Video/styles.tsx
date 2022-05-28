import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0px;
  width: 100vw;
  height: 100vh;
  background: #9b9a97;
`;

export const VideoContainer = styled.div`
  width: 45vw;
  height: 55vh;
  margin: 20vh auto;
`;

export const VideoFrame = styled.img`
  position: absolute;
  top: 10vh;
  z-index: -1;
`;
