import styled from "styled-components";

interface Props {
  url: string;
}
export const Container = styled.div<Props>`
  position: fixed;
  left: -50vw;
  top: -50vh;
  width: 100vw;
  height: 100vh;
  background-color: black;
  background-image: url(${({ url }) => url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 10;
`;
