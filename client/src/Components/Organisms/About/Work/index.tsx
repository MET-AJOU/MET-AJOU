import { useInView } from "react-hook-inview";

import AboutTitle from "@Atoms/AboutTitle";
import { GreyText } from "@Atoms/Text";
import InstaCard from "@Molecules/About/InstaCard";
import useAnimation from "./useAnimation";
import { Container, InstaContainer, Seongu } from "./styles";

const AboutWork = () => {
  const [ref, isVisible] = useInView();
  const [seonguRef, seonguVisible] = useInView();
  useAnimation(seonguVisible);
  return (
    <Container className="about_work_cont">
      <AboutTitle>How we work</AboutTitle>
      <GreyText>실시간으로 업데이트 되는 소식들을 만나보세요</GreyText>
      <InstaContainer ref={ref}>
        {Contents.map(() => (
          <InstaCard className={isVisible ? "" : `slide_down_relative`} />
        ))}
      </InstaContainer>
      <Seongu ref={seonguRef} className="stand_left" src="/asset/About/seongu.svg" alt="about_seongu" />
    </Container>
  );
};

export default AboutWork;

const Contents = ["", "", "", "", "", "", ""];
