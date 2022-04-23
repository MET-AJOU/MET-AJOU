import styled from "styled-components";

export const ChildrenContainer = styled.div`
  width: 100%;
  height: calc(600px - 145px - 200px);
  position: relative;
`;
export const FooterContainer = styled.div`
  width: 100%;
  height: 200px;
  position: relative;

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
