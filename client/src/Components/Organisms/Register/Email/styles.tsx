import styled from "styled-components";

export const RegisterInputFormContainer = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
`;
export const RegisterTitle = styled.h1`
  font-family: "NanumBarunGothic";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 48px;

  text-align: center;
  letter-spacing: 0.02em;

  color: #000000;

  margin-bottom: 24px;
`;

export const RegisterInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  margin-bottom: 2px;
  span {
    font-family: "NanumBarunGothic";
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 48px;
    text-align: center;
    letter-spacing: -0.02em;

    color: #475083;
  }
`;
export const RegisterInput = styled.input`
  width: 190px;
  height: 50px;
  font-family: "NanumBarunGothic";
  font-style: Bold;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;

  text-align: end;
  text-decoration-line: underline;
  text-underline-offset: 7px;
  color: #6096fd;
  cursor: pointer;

  :focus {
    outline: none;
  }
`;

export const Br = styled.p`
  height: 27px;
`;
export const RegisterDescript = styled.p`
  height: 27px;
  font-family: "NanumBarunGothic";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 229.69%;

  text-align: center;

  color: #ff7c5f;
`;

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
