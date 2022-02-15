import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackGround = styled.img`
  width: 100%;
  height: 100%;
  background-image: url("/asset/Login/loginBg.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;

export { BackGround, Container };
