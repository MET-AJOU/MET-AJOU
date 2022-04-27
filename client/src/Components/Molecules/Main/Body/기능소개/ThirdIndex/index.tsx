import BlueText from "@Atoms/BlueText";
import StartButton from "@Atoms/StartButton";
import { Heart1, Heart2, SeonGu } from "@Atoms/Svgs";
import { Container, InfoContainer, Title, Text, Heart1Style, Heart2Style, SeonGuStyle } from "./styles";

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
    </Container>
  );
};

export default ThirdIndex;
