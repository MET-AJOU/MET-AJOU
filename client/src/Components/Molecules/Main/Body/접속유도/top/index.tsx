import { useInView } from "react-hook-inview";
import { useEffect } from "react";

import AjouLogo from "@Atoms/AjouLogo";
import AirPlane from "@Atoms/AirPlane";
import AirPath from "@Atoms/AirPath";
import BlueText from "@Atoms/BlueText";
import StartButton from "@Atoms/StartButton";
import { InfoText, TextContainer, HomeInfoContainer, AjouLogoStyle, AirPlaneStyle, AirPathStyle, InfoTitle, BlueBox, InfoContainer } from "./styles";

const HomeInfo = () => {
  const [ref, isVisible] = useInView();

  useEffect(() => {
    if (!isVisible) return;
    const childrens = document.querySelector(".cont")?.querySelectorAll(".slide_down");
    if (!childrens) return;

    setTimeout(() => {
      childrens[0].classList.add("slide_up");
      childrens[0].classList.remove("slide_down");
    }, 1000);

    setTimeout(() => {
      childrens[1].classList.add("slide_up_opacity");
      childrens[1].classList.remove("slide_down");
    }, 2000);
    setTimeout(() => {
      childrens[2].classList.add("slide_up");
      childrens[2].classList.remove("slide_down");
    }, 3000);
  }, [isVisible]);

  return (
    <HomeInfoContainer className="cont" ref={ref}>
      <AjouLogo style={AjouLogoStyle} />
      <AirPlane className="air air_plane" style={AirPlaneStyle} />
      <AirPath className="air air_path" style={AirPathStyle} />
      <InfoContainer>
        <BlueBox />
        <InfoTitle className="slide_down">
          <BlueText>아주대학교</BlueText>
          <span>의 가상세계로</span>
          <p>여정을 떠날 준비가 되었나요?</p>
        </InfoTitle>
        <TextContainer className="slide_down">
          <InfoText>펜데믹 시대에 우리는 소중한 공간과 추억 그리고 그것에 관한 수 많은 의미들을</InfoText>
          <InfoText>느껴보지 못한 채 답답하고 지루한 일상을 살아가고 있을지도 모릅니다.</InfoText>
          <InfoText>그렇다면, 저희와 함께 학교를 돌아다녀보는 모험을 하는 것은 어떤가요?</InfoText>
        </TextContainer>
        <StartButton color="blue" className="slide_down" />
      </InfoContainer>
    </HomeInfoContainer>
  );
};

export default HomeInfo;
