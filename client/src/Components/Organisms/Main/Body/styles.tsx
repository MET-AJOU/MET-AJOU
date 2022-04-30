import styled from "styled-components";

export const Container = styled.div`
  .air {
    transform: rotate3d(0, 0, 1, -65deg);
  }
  .air_plane {
  }
  .air_path {
  }
`;

export const TechIntroduceContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 3300px;
  .first {
    position: absolute;
    top: -300px;
    left: 0;
    z-index: -1;
  }
  .second {
    position: absolute;
    top: 200px;
    left: 0px;
    z-index: -2;
  }

  .third {
    position: absolute;
    top: 200px;
    left: 0px;
    z-index: 0;

    opacity: 0;
    transition: opacity 4s;
  }

  .third.show {
    opacity: 1;
  }

  .firstPlanet {
    position: absolute;
    top: 450px;
    right: 0px;
    z-index: 0;

    width: 0px;
    height: 0px;
    opacity: 0;
    transform: rotate(180deg);
    transition: right 2s, width 2s, height 2s;
  }

  .firstPlanet.show {
    opacity: 1;
    right: 70%;
    width: 400px;
    height: 400px;
    transform: rotate(180deg);
  }

  .secondPlanet {
    position: absolute;
    opacity: 0;
    top: 440px;
    right: 0px;
    z-index: 0;

    width: 0px;
    height: 0px;
    opacity: 0;
    transition: right 3s, width 3s, height 3s;
  }

  .secondPlanet.show {
    opacity: 1;
    right: 35%;
    width: 450px;
    height: 450px;
    transform: rotate(180deg);
  }

  .thirdPlanet {
    position: absolute;
    opacity: 0;
    top: 380px;
    right: 0px;
    z-index: 0;

    width: 0px;
    height: 0px;
    opacity: 0;
    transition: right 4s, width 4s, height 4s;
  }

  .thirdPlanet.show {
    opacity: 1;
    right: -10%;
    width: 500px;
    height: 500px;
  }

  .firstIndex {
    position: absolute;
    top: 810px;
    left: 0px;
    width: 100%;
    height: 500px;
    z-index: 2;

    .FirstIndex_Text_Container {
      position: absolute;
      z-index: 2;
      top: 100px;
      left: 50px;

      .title {
        font-size: 48px;
        margin-bottom: 50px;
        color: #ffffff;
        text-shadow: 0px 6px 6px rgba(0, 0, 0, 0.5);
      }
      p {
        font-size: 24px;
        color: #ffffff;
        text-shadow: 0px 6px 6px rgba(0, 0, 0, 0.5);
      }

      .FirstIndex_Img_Container {
        display: flex;
        margin-left: 50px;
        justify-content: center;
      }
    }
  }
  .secondIndex {
    position: absolute;
    top: 1050px;
    left: 0px;
    width: 100%;
    height: 500px;
    z-index: 1;

    .SecondIndex_Text_Container {
      position: absolute;
      z-index: 1;
      top: 170px;
      right: 100px;

      .title {
        font-size: 48px;
        margin-bottom: 50px;
        color: #ffffff;
        text-shadow: 0px 6px 6px rgba(0, 0, 0, 0.5);
        text-align: right;
      }
      p {
        font-size: 24px;
        color: #ffffff;
        text-shadow: 0px 6px 6px rgba(0, 0, 0, 0.5);
        text-align: right;
      }
    }
  }
  .thirdIndex {
    position: absolute;
    top: 1380px;
    left: 0px;
    z-index: 3;

    width: 100%;
    height: 500px;

    .ThirdIndex_Text_Container {
      position: absolute;
      z-index: 2;
      top: 130px;
      left: 50px;

      .title {
        font-size: 48px;
        margin-bottom: 50px;
        color: #ffffff;
        text-shadow: 0px 6px 6px rgba(0, 0, 0, 0.5);
      }
      p {
        font-size: 24px;
        color: #ffffff;
        text-shadow: 0px 6px 6px rgba(0, 0, 0, 0.5);
      }
    }
  }
  .gameBox {
    position: absolute;
    top: 1730px;
    right: 5%;
    z-index: 3;
  }

  .last {
    position: absolute;
    top: 2300px;
    width: 100%;
    height: 1000px;
    left: 0px;
    z-index: 2;

    .last_Text_Container {
      position: absolute;
      z-index: 2;
      top: 650px;
      left: 50px;

      .colorFont {
        color: #6096fd;
      }

      .title {
        font-size: 36px;
        line-height: 1.5;
      }

      .text {
        font-size: 24px;
        line-height: 1.5;
      }

      .container {
        span {
          margin-left: 30px;
        }
      }
    }
  }
`;
