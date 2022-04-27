import AjouLogo from "@Atoms/AjouLogo";
import AirPlane from "@Atoms/AirPlane";
import AirPath from "@Atoms/AirPath";
import BlueText from "@Atoms/BlueText";
import StartButton from "@Atoms/StartButton";
import { TOP_MAIN_IMAGE_STYLES } from "@Style/.";
import { BaseImageProps } from "@Type/.";
import { HomeInfoContainer, BaseImage, AjouLogoStyle, AirPlaneStyle, AirPathStyle, InfoTitle, BlueBox, InfoContainer } from "./styles";

const HomeInfo = () => {
  return (
    <HomeInfoContainer>
      {TOP_MAIN_IMAGE_STYLES.map((ImageStyle: BaseImageProps, idx) => (
        <BaseImage alt={`baseimage${idx}`} src={ImageStyle.url} {...{ ...ImageStyle, idx }} />
      ))}
      <AjouLogo style={AjouLogoStyle} />
      <AirPlane style={AirPlaneStyle} />
      <AirPath style={AirPathStyle} />
      <InfoContainer>
        <BlueBox />
        <InfoTitle>
          <BlueText>아주대학교</BlueText>
          <span>의 가상세계로</span>
          <p>여정을 떠날 준비가 되었나요?</p>
        </InfoTitle>
        <StartButton color="blue" />
      </InfoContainer>
      {/* <div>
        <span>아주대학교</span>의 가상세계로
        <p>여정을 떠날 준비가 되었나요?</p>
      </div>
      <p>펜데믹 시대에 우리는 소중한 공간과 추억 그리고 그것에 관한 수 많은 의미들을</p>
      <p>느껴보지 못한 채 답답하고 지루한 일상을 살아가고 있을지도 모릅니다.</p>
      <p>그렇다면, 저희와 함께 학교를 돌아다녀보는 모험을 하는 것은 어떤가요?</p>
      */}
    </HomeInfoContainer>
  );
};

export default HomeInfo;
