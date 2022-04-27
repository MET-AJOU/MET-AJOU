import BlueText from "@Atoms/BlueText";
import StartButton from "@Atoms/StartButton";
import { LandingBottomWave2, LandingBottomWave3, LandingBottomWave4, Heart1, Heart2, SeonGu, Moon, LandingBottomWave1 } from "@Atoms/Svgs";
// import BaseImages from "@Molecules/Main/BaseImages";
// import { MAIN_BOTTOM_WAVE_IMAGES } from "@Style/.";
import { Wave1Style, Wave2Style, Wave3Style, Wave4Style, Container, InfoContainer, Title, Text, Heart1Style, Heart2Style, SeonGuStyle, MoonStyle } from "./styles";

const ThirdIndex = () => {
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
      <Heart1 style={Heart1Style} />
      <Heart2 style={Heart2Style} />
      <SeonGu style={SeonGuStyle} />
      <Moon style={MoonStyle} />
      {/* <BaseImages data={MAIN_BOTTOM_WAVE_IMAGES} /> */}
      <LandingBottomWave1 style={Wave1Style} />
      <LandingBottomWave2 style={Wave2Style} />
      <LandingBottomWave3 style={Wave3Style} />
      <LandingBottomWave4 style={Wave4Style} />
    </Container>
  );
};

export default ThirdIndex;
