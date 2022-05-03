import StartButton from "@Atoms/StartButton";
import { Container, Title, Text } from "./styled";

const AboutMeet = () => {
  return (
    <Container>
      <Title>MEET AJOU in MET:AJOU</Title>
      <Text>MET:AJOU에서 새로워진 AJOU를 만나보세요</Text>
      <StartButton color="blue" />
    </Container>
  );
};

export default AboutMeet;
