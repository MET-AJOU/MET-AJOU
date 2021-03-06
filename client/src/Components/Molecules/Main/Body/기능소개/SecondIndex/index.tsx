/* eslint-disable @typescript-eslint/no-unused-vars */
import { useInView } from "react-hook-inview";

import { MetImage1, MetImage2, Sky1, Sky2, Star1, Star2, JoyStick, AirplaneBig } from "@Atoms/Svgs";
import AirPlane from "@Atoms/Svgs/AirPlane";
import useAnimation from "./useAnimation";
import { Title, Card1, Card2, Container, MetImage1Style, MetImage2Style, IfameStyle, Sky1Style, Sky2Style, TextRight, TextLeft, Star1Style, Star2Style, JoyStickStyle } from "./styles";

const SecondIndex = () => {
  const [ref, isVisible] = useInView();
  const [joyStickref, joyStickVisible] = useInView();

  useAnimation(isVisible, joyStickVisible);

  return (
    <Container className="second_cont" ref={ref}>
      <AirPlane className={`air_middle ${isVisible && "air_plane_middle"}`} style={{ opacity: 0 }} />
      <MetImage1 className="first slide_down_middle" style={MetImage1Style} />
      <MetImage2 className="second slide_down_middle" style={MetImage2Style} />
      <Sky1 className="first slide_down_middle" style={Sky1Style} />
      <Sky2 className="second slide_down_middle" style={Sky2Style} />
      <Card1 className="first slide_down_middle">
        <Title className="first slide_down_middle">Communication</Title>
        <TextRight className="first slide_down_middle">
          실시간 문자,음성 채팅,감정표현
          <br />
          목적에 맞는 룸 채널 접속
        </TextRight>
      </Card1>
      <Card2 className="second slide_down_middle">
        <Title className="second slide_down_middle">Experience</Title>
        <TextLeft className="second slide_down_middle">
          캐릭터 커스터마이징
          <br />
          건물별 소개영상 시청
          <br />
          캠퍼스 투어
        </TextLeft>
      </Card2>
      <AirplaneBig className={`air_bottom ${joyStickVisible && "air_plane_bottom"}`} style={{ opacity: 0 }} />
      <Star1 className="third slide_down_bottom" style={Star1Style} />
      <Star2 className="third slide_down_bottom" style={Star2Style} />
      <JoyStick ref={joyStickref} style={JoyStickStyle} />
      <iframe title="metajou_info_video" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation" style={IfameStyle} src="https://www.youtube.com/embed/WiUvCKbV5gw" />
    </Container>
  );
};
export default SecondIndex;
