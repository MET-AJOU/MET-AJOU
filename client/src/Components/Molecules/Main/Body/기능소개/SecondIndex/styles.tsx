import { InlineStyleType } from "@Type/.";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 2163px;
`;

export const MetImage1Style: InlineStyleType = {
  position: "absolute",
  left: "35vw",
  top: "230vh",
};

export const MetImage2Style: InlineStyleType = {
  position: "absolute",
  left: "600px",
  top: "330vh",
};

export const Sky1Style: InlineStyleType = {
  position: "absolute",
  left: "55vw",
  top: "265vh",
  zIndex: "1",
};

export const Sky2Style: InlineStyleType = {
  position: "absolute",
  left: "400px",
  top: "370vh",
  zIndex: "1",
};

const Card = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 334px;
  height: 376px;

  background: #ffffff;
  box-shadow: inset 20px 20px 10px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
`;

export const Card1 = styled(Card)`
  left: 65vw;
  top: 235vh;
`;

export const Card2 = styled(Card)`
  left: 300px;
  top: 335vh;
`;

export const Title = styled.p`
  color: #4173d3;
  font-size: 36px;
  font-weight: 600;
  margin-top: 30px;
`;

export const Text = styled.p`
  margin-top: 40px;
  line-height: 24px;
  font-size: 16px;
  font-weight: 600;
`;
export const TextLeft = styled(Text)`
  text-align: left;
`;
export const TextRight = styled(Text)`
  text-align: right;
`;

export const Star1Style: InlineStyleType = {
  position: "absolute",
  top: "417vh",
  left: "600px",
  // transform: "rotate3d(0,1,0,720deg)",
  // transition: "transform 2s",
};

export const Star2Style: InlineStyleType = {
  position: "absolute",
  top: "424vh",
  left: "650px",
};

export const JoyStickStyle: InlineStyleType = {
  position: "absolute",
  width: "80vw",
  top: "430vh",
  left: "600px",
  minWidth: "70vw",
};

export const IfameStyle: InlineStyleType = {
  position: "absolute",
  minWidth: "33vw",
  width: "33vw",
  top: "448vh",
  left: "960px",
  height: "18vw",
  minHeight: "250px",
};
