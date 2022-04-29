import { useInView } from "react-hook-inview";
import { useEffect } from "react";

import BlueText from "@Atoms/BlueText";
import StartButton from "@Atoms/StartButton";
import { LandingBottomWave2, LandingBottomWave3, LandingBottomWave4, Heart1, Heart2, SeonGu, Moon, LandingBottomWave1 } from "@Atoms/Svgs";
// import BaseImages from "@Molecules/Main/BaseImages";
// import { MAIN_BOTTOM_WAVE_IMAGES } from "@Style/.";
import { Wave1Style, Wave2Style, Wave3Style, Wave4Style, Container, InfoContainer, Title, Text, SeonGuStyle, MoonStyle } from "./styles";

const ThirdIndex = () => {
  const [ref, isVisible] = useInView();

  useEffect(() => {
    if (!isVisible) return;
    const childrens = document.querySelectorAll(".hearts");
    if (!childrens) return;

    setTimeout(() => {
      childrens[0].classList.add("hearts1");
      childrens[0].classList.remove("hide_up");
    }, 0);

    setTimeout(() => {
      childrens[1].classList.add("hearts2");
      childrens[1].classList.remove("hide_up");
    }, 1000);
  }, [isVisible]);

  return (
    <Container>
      <InfoContainer>
        <Title>여러분이 상상하는</Title>
        <Title>
          <BlueText>메타버스 속 아주대학교</BlueText>는 어떤 모습인가요?
        </Title>
        <Text>Met:Ajou는 현실의 경험 그 이상을 제공합니다!</Text>
        <Text>지금 바로 접속해보세요!</Text>
        <StartButton color="blue" />
      </InfoContainer>
      <div ref={ref}>
        <Heart1 className="hearts hide_up" />
        <Heart2 className="hearts hide_up" />
      </div>
      <SeonGu style={SeonGuStyle} />
      <Moon style={MoonStyle} />
      {/* <BaseImages data={MAIN_BOTTOM_WAVE_IMAGES} /> */}
      <LandingBottomWave1 className="waves" style={Wave1Style} />
      <LandingBottomWave2 className="waves" style={Wave2Style} />
      <LandingBottomWave3 className="waves" style={Wave3Style} />
      <LandingBottomWave4 className="waves" style={Wave4Style} />
    </Container>
  );
};

export default ThirdIndex;
