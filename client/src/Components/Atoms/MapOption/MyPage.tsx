import useOn from "@Hook/useOn";
import { MapOptionAtomContainer, MapOptionImgContainer, MapOptionTextContainer } from "./styles";

const MyPage = () => {
  const { on, handleToggleOn } = useOn();
  return (
    <MapOptionAtomContainer>
      <MapOptionImgContainer onMouseEnter={handleToggleOn} onMouseLeave={handleToggleOn}>
        <img src="./asset/MapOption/MapOption/mypage.png" alt="마이페이지" />
      </MapOptionImgContainer>
      <MapOptionTextContainer type="Down">
        <div>{on && "마이페이지"}</div>
      </MapOptionTextContainer>
    </MapOptionAtomContainer>
  );
};

export default MyPage;
