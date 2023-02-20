import styled from "styled-components";

export const RegisterButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 66px;
  height: 66px;
  margin-top: 17px;
`;
export const RegisterNextButton = styled.img`
  width: 56px;
  height: 56px;
  transition-duration: 1s;
  cursor: pointer;
  z-index: 2;
  :hover {
    width: 66px;
    height: 66px;
    transition-duration: 1s;
  }
`;
