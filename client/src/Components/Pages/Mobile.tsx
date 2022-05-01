import { useEffect } from "react";
import styled from "styled-components";

const MobileView = () => {
  useEffect(() => {
    window.alert("MET:AJOU는 모바일 환경에서 이용하실 수 없습니다.");
  }, []);

  return <MobileBackgroundImg src="/asset/썸네일.png" alt="썸네일" />;
};

export default MobileView;

const MobileBackgroundImg = styled.img`
  width: 100vw;
  height: 100vh;
`;
