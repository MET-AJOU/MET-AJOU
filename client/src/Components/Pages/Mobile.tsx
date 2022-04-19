import { useEffect } from "react";
import { MobileBackgroundImg } from "./MobileStyle";

const MobileView = () => {
  useEffect(() => {
    window.alert("MET:AJOU는 모바일 및 테블릿 환경에서 지원하지 않습니다.");
  }, []);

  return <MobileBackgroundImg src="/asset/썸네일.png" alt="썸네일" />;
};

export default MobileView;
