import { CenterAroundStyle } from "@Style/.";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 80%;
  height: 70%;
  margin-top: 2vh;
  ${CenterAroundStyle}
  & .arrow {
    &:hover {
      cursor: pointer;
      opacity: 0.5;
      transition: 0.5s;
    }
  }
  & .slick-slider {
    width: 60%;
    margin-top: 10vh;
    z-index: 3;
  }
  & .slick-slide {
    margin: 0 426px;
    transition: 0.7s;
  }
  & .slick-active {
    margin: 0 !important;
    transition: 0.7s;
  }
  /* & .slick-current > div > img {
    opacity: 1 !important;
    transition: 0.7s;
  }
  & .slick-slide > div > img {
    opacity: 0;
    transition: 0.7s;
  } */
  & .slick-prev {
    &:hover {
      opacity: 0.7;
      transition: 0.7s;
    }
    left: -7vw;
  }

  & .slick-next {
    &:hover {
      opacity: 0.7;
      transition: 0.7s;
    }
    right: -7vw;
  }
  & .slick-dots li.slick-active button:before {
    color: #6096fd;
  }
  & .slick-dots button:before {
    &:hover {
      color: #6096fd;
    }
  }
`;

export const TeamImg = styled.img`
  width: 35vw;
`;

export const CircleContainer = styled.div`
  margin-top: 2vh;
  width: 10%;
  display: flex;
  ${CenterAroundStyle}
`;
