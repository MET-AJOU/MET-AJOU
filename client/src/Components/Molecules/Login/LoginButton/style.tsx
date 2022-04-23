import styled from "styled-components";

export const LoginButtonContainer = styled.div`
  width: 250px;
  height: 50px;
  border: 1px solid rgba(161, 161, 161, 0.3);
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  box-sizing: border-box;
  padding: 5px 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition-duration: 1s;

  :hover {
    width: 270px;
    height: 55px;
    transition-duration: 1s;

    img {
      width: 30px;
      height: 30px;
      transition-duration: 1s;
    }
    div {
      font-size: 22px;
      transition-duration: 1s;
    }
  }
  img {
    width: 25px;
    height: 25px;
    transition-duration: 1s;
  }

  div {
    transition-duration: 1s;
    text-align: center;
    width: 100%;
    font-family: "NanumBarunGothic";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
  }
`;
