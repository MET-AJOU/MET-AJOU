/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useInView } from "react-hook-inview";
import { Text, BlackSubTitle, InfoContainer, SubTitle, TextContainer, Title, TitleContainer, WhiteBox } from "./styles";
import useAnimation from "./useAnimation";

const AboutInfo = () => {
  const [ref, isVisible] = useInView();
  useAnimation(isVisible);
  return (
    <InfoContainer className="About_Info" ref={ref}>
      <WhiteBox />
      <TitleContainer className="slide_down">
        <Title>MET:AJOU</Title>
        <SubTitle>
          Meet <BlackSubTitle>Ajou</BlackSubTitle>
        </SubTitle>
        <SubTitle>
          Meet <BlackSubTitle>Ajou</BlackSubTitle>
        </SubTitle>
      </TitleContainer>
      <TextContainer className="slide_down">
        <Text>MET:AJOU는</Text>
        <Text>메타버스 환경에서 누구나 쉽게 만날 수 있다는 'meet'의 의미와</Text>
        <Text>시공간을 초월한 공간이라는 'meta'의 의미를 담고있습니다.</Text>
      </TextContainer>
    </InfoContainer>
  );
};

export default AboutInfo;
