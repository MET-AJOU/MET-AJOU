import styled from "styled-components";

import { FlexColumnStyle, CenterAroundStyle } from "@Style/.";
import { InlineStyleType } from "@Type/.";

export const AboutStoryContainer = styled.div`
  width: 90vw;
  height: 70vh;
  margin: auto;
  margin-top: 30vh;
  ${FlexColumnStyle}
  align-items: center;
  justify-content: space-around;
`;

export const Text = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 40px;
`;

export const TextBoxContainer = styled.div`
  width: 80%;
  display: flex;
  margin: auto;
  ${CenterAroundStyle}
`;

export const CharacterContainer = styled.div`
  width: 80%;
  display: flex;
  margin: auto;
  margin-top: -4vh;
  ${CenterAroundStyle}
`;
export const ImageTextContainer = styled.div`
  width: 80%;
  display: flex;
  margin: auto;
  margin-top: -20vh;
  text-align: center;
  min-height: 1vh;
  ${CenterAroundStyle}
`;
export const SmallText = styled.span`
  font-size: 0.7rem;
  font-weight: 600;
  line-height: 2vh;
  transition: 1s;
`;

export const ImgStyles: InlineStyleType = {
  width: "20%",
  transition: "1s",
};

export const CharacterImgStyle: InlineStyleType = {
  width: "10%",
};
