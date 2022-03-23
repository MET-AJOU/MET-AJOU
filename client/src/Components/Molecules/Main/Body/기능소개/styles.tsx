import styled from "styled-components";

export const TechIntroduceContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 3000px;
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
    z-index: 2;
  }
  .secondIndex {
    position: absolute;
    top: 1050px;
    left: 0px;
    z-index: 1;
  }
  .thirdIndex {
    position: absolute;
    top: 1350px;
    left: 0px;
    z-index: 3;
  }

  .gameBox {
    position: absolute;
    top: 1800px;
    right: 5%;
    z-index: 3;
  }

  .last {
    position: absolute;
    top: 2200px;
    left: 0px;
    z-index: 2;
  }
`;
