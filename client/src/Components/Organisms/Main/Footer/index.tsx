/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Sign, FaceBook, Insta } from "@Atoms/Svgs/";
import { InlineHover } from "@Style/.";
import { MainFooterContainer, LogoContainer } from "./styles";

const MainFooter = () => {
  const handleInstaClick = () => window.open("https://www.instagram.com/0325_youngjin/");
  const handleFacebookClick = () => window.open("https://www.facebook.com/");

  return (
    <MainFooterContainer>
      <LogoContainer>
        <FaceBook style={InlineHover} onClick={handleFacebookClick} />
        <Insta style={InlineHover} onClick={handleInstaClick} />
        <Sign />
      </LogoContainer>
    </MainFooterContainer>
  );
};

export default MainFooter;
