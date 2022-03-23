import styled from "styled-components";

export const AboutValuesContainer = styled.div`
  width: 100vw;
  height: 750px;
  background-image: url("/asset/About/02중단원과별.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
`;

export const AboutValuesTitle = styled.p`
  position: absolute;
  top: 130px;
  font-size: 32px;
  p {
    font-size: 16px;
    text-align: center;
    margin-top: 30px;
  }
`;

export const ListContainer = styled.div`
  position: absolute;
  top: 180px;
  width: 800px;
  height: 500px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ItemContainer = styled.div`
  width: 185px;
  height: 355px;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 50px 25px;
  img {
    background: grey;
    border-radius: 50%;
    width: 100%;
    height: 50%;
  }

  p {
    font-size: 24px;
    margin: 0 auto;
    margin-top: 10px;
    text-align: center;
  }
  span {
    width: 135px;
    word-break: break-all;
  }
`;
