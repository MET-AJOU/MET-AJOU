import { useInView } from "react-hook-inview";

import BottomWaves from "@Molecules/BottomWaves";
import { BlueText } from "@Atoms/Text";
import StartButton from "@Atoms/StartButton";
import { Heart1, Heart2, SeonGu, Moon } from "@Atoms/Svgs";
import { Container, InfoContainer, Title, Text, SeonGuStyle, MoonStyle } from "./styles";
import useAnimation from "./useAnimation";

const ThirdIndex = () => {
  const [ref, isVisible] = useInView();

  useAnimation(isVisible);

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
      <BottomWaves />
      {/* <BaseImages data={MAIN_BOTTOM_WAVE_IMAGES} /> */}
    </Container>
  );
};

export default ThirdIndex;
