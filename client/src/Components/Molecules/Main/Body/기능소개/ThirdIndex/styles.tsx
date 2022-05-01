import { InlineStyleType } from "@Type/.";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 600px;
  & .waves {
    animation: bottom_waves 13s infinite;
    -webkit-animation: bottom_waves 13s infinite;
  }
  & .hearts {
    position: relative;
    left: 110px;
    transition: 1s;
  }
  & .hearts1 {
    top: -135px;
    transition: 0.5s;
  }
  & .hearts2 {
    top: -175px;
    transition: 0.5s;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  margin: auto;
  margin-top: 300px;
  height: 200px;
  justify-content: space-around;
  align-items: center;
`;
export const Title = styled.span`
  font-size: 32px;
  font-weight: 600;
  line-height: 37px;
`;

export const Text = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
`;

export const Heart1Style: InlineStyleType = {
  position: "relative",
  top: "0px",
  left: "120px",
  transition: "1s",
};

export const Heart2Style: InlineStyleType = {
  position: "relative",
  top: "-135px",
  left: "120px",
  transition: "1s",
};

export const SeonGuStyle: InlineStyleType = {
  position: "relative",
  top: "-590px",
  left: "150px",
  animation: "rotate_45 3s infinite",
};

export const MoonStyle: InlineStyleType = {
  position: "relative",
  top: "-50px",
  height: "700px",
  left: "-250px",
  zIndex: "-2",
};

export const Wave1Style: InlineStyleType = {
  position: "relative",
  top: "-600px",
  zIndex: "-6",
  width: "120vw",
};

export const Wave2Style: InlineStyleType = {
  position: "relative",
  top: "-950px",
  zIndex: "-5",
  width: "120vw",
};
export const Wave3Style: InlineStyleType = {
  position: "relative",
  top: "-1250px",
  zIndex: "-4",
  width: "120vw",
};
export const Wave4Style: InlineStyleType = {
  position: "relative",
  top: "-1452px",
  zIndex: "-3",
  width: "120vw",
};
