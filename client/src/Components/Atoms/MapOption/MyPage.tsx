import { MapOptionAtomContainer, MapOptionImgContainer, MapOptionTextContainer } from "./styles";

const MyPage = () => {
  return (
    <MapOptionAtomContainer>
      <MapOptionImgContainer>
        <img src="./asset/MapOption/MapOption/mypage.png" alt="마이페이지" />
      </MapOptionImgContainer>
      <MapOptionTextContainer>
        <div>마이페이지</div>
      </MapOptionTextContainer>
    </MapOptionAtomContainer>
  );
};

export default MyPage;
