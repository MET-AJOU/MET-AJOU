import { useEffect } from "react";
import { MobileBackgroundImg } from "./MobileStyle";

const MobileView = () => {
  useEffect(() => {
    window.alert("MET:AJOU는 데스크탑에서 이용하실 수 있습니다.");
  }, []);

  return <MobileBackgroundImg src="/asset/썸네일.png" alt="썸네일" />;
};

export default MobileView;
