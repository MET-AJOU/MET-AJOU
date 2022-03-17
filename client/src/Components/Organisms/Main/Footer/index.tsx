/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import MainFooterContainer from "./styles";

const MainFooter = () => {
  const handleInstaClick = () => window.open("https://www.instagram.com/0325_youngjin/");
  return (
    <MainFooterContainer>
      <img src="/asset/Main/insta.png" alt="instaLogo" onClick={handleInstaClick} />
      <div>©METAJOU2022.</div>
    </MainFooterContainer>
  );
};

export default MainFooter;
