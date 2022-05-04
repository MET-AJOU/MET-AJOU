import { useInView } from "react-hook-inview";

import { GreyText } from "@Atoms/Text";
import AboutTitle from "@Atoms/AboutTitle";
import useAnimation from "./useAnimation";

import { AboutStoryContainer, Text, TextBoxContainer, CharacterContainer, CharacterImgStyle, ImgStyles } from "./styles";

const AboutStory = () => {
  const [ref, isVisible] = useInView();
  useAnimation(isVisible);

  return (
    <AboutStoryContainer className="About_Story">
      <AboutTitle>Our Story</AboutTitle>
      <GreyText>프로젝트를 시작하게 된 계기를 소개합니다</GreyText>
      <Text>메타버스를 활용하여 대면수업의 여부와 상관없이,</Text>
      <Text>아주대학교 재학생들이 지속적으로 학교생활을 영위할 수 있는 세계를 만들고자 합니다.</Text>
      <TextBoxContainer ref={ref}>
        <img className="scale_down" src="/asset/About/story1.svg" alt="white_text_box" style={ImgStyles} />
        <img className="scale_down" src="/asset/About/story2.svg" alt="blue_text_box" style={ImgStyles} />
        <img className="scale_down" src="/asset/About/story3.svg" alt="white_text_box" style={ImgStyles} />
      </TextBoxContainer>
      <CharacterContainer>
        <img src="/asset/About/character1.svg" alt="character1" style={CharacterImgStyle} />
        <img src="/asset/About/character2.svg" alt="character2" style={CharacterImgStyle} />
        <img src="/asset/About/character3.svg" alt="character3" style={CharacterImgStyle} />
      </CharacterContainer>
    </AboutStoryContainer>
  );
};
export default AboutStory;
