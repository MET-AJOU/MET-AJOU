import { InlineStyleType } from "@Type/.";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 2163px;
`;

export const MetImage1Style: InlineStyleType = {
  position: "absolute",
  left: "35vw",
  top: "1892px",
};

export const MetImage2Style: InlineStyleType = {
  position: "absolute",
  left: "600px",
  top: "2747px",
};

export const Sky1Style: InlineStyleType = {
  position: "absolute",
  left: "55vw",
  top: "2192px",
  zIndex: "1",
};

export const Sky2Style: InlineStyleType = {
  position: "absolute",
  left: "400px",
  top: "3047px",
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
  top: 1952px;
`;

export const Card2 = styled(Card)`
  left: 300px;
  top: 2800px;
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
  top: "3300px",
  left: "600px",
  transform: "rotate3d(0,1,0,720deg)",
  transition: "transform 2s",
};

export const Star2Style: InlineStyleType = {
  position: "absolute",
  top: "3380px",
  left: "650px",
};

export const JoyStickStyle: InlineStyleType = {
  position: "absolute",
  width: "70vw",
  top: "3250px",
  left: "640px",
  minWidth: "70vw",
};

export const IfameStyle: InlineStyleType = {
  position: "absolute",
  minWidth: "29vw",
  width: "29vw",
  top: "3410px",
  left: "950px",
  height: "16.5vw",
  minHeight: "250px",
};
