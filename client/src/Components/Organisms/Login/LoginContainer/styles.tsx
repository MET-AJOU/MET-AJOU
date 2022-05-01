import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 1000px;
  height: 650px;
  position: fixed;
  top: calc(50% - 325px);
  left: calc(50% - 500px);
  box-shadow: inset 2px 2px 20px rgba(0, 0, 0, 0.1);
  border-radius: 28px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  /* padding-top: 50px; */
`;

export const ChildrenContainer = styled.div`
  width: 100%;
  height: calc(600px - 145px - 200px);
  /* position: relative; */
`;
export const FooterContainer = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 200px;

  img {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    border-radius: 0 0 28px 28px;
    transition-duration: 3s;
  }

  .show {
    height: 70%;
    transition-duration: 3s;
  }
`;
