import { useInView } from "react-hook-inview";

import ValueCard from "@Molecules/About/ValueCard";
import { GreyText } from "@Atoms/Text";
import AboutTitle from "@Atoms/AboutTitle";
import { CARD_LIST_DATA } from "@Constant/.";
import useAnimation from "./useAnimation";
import { Container, CardContainer } from "./styles";

const AboutValues = () => {
  const [ref, isVisible] = useInView();
  useAnimation(isVisible);

  return (
    <Container className="about_value_cont">
      <AboutTitle>Our Values</AboutTitle>
      <GreyText>프로젝트를 통해 실현시키고자하는 목표와 가치</GreyText>
      <CardContainer ref={ref}>
        {CARD_LIST_DATA.map((data) => (
          <ValueCard data={data} className="slide_down_relative" key={`valueCARD ${data.src}`} />
        ))}
      </CardContainer>
    </Container>
  );
};

export default AboutValues;
