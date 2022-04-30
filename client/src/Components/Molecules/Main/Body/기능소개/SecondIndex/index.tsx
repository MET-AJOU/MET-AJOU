import { MetImage1, MetImage2, Sky1, Sky2, Star1, Star2, JoyStick } from "@Atoms/Svgs";
import { Title, Card1, Card2, Container, MetImage1Style, MetImage2Style, IfameStyle, Sky1Style, Sky2Style, TextRight, TextLeft, Star1Style, Star2Style, JoyStickStyle } from "./styles";

const SecondIndex = () => {
  return (
    <Container>
      <MetImage1 style={MetImage1Style} />
      <MetImage2 style={MetImage2Style} />
      <Sky1 style={Sky1Style} />
      <Sky2 style={Sky2Style} />
      <Card1>
        <Title>Communication</Title>
        <TextRight>
          실시간 문자,음성 채팅,감정표현
          <br />
          목적에 맞는 룸 채널 접속
        </TextRight>
      </Card1>
      <Card2>
        <Title>Experience</Title>
        <TextLeft>
          캐릭터 커스터마이징
          <br />
          건물별 소개영상 시청
          <br />
          캠퍼스 투어
        </TextLeft>
      </Card2>
      <Star1 style={Star1Style} />
      <Star2 style={Star2Style} />
      <JoyStick style={JoyStickStyle} />
      <iframe title="metajou_info_video" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation" style={IfameStyle} src="https://www.youtube.com/embed/WiUvCKbV5gw" />
    </Container>
  );
};
export default SecondIndex;
