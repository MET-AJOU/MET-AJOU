import { MapOptionAtomContainer, MapOptionImgContainer, MapOptionTextContainer } from "./styles";

const Exit = () => {
  return (
    <MapOptionAtomContainer>
      <MapOptionImgContainer>
        <img src="./asset/MapOption/MapOption/exit.png" alt="나가기" />
      </MapOptionImgContainer>
      <MapOptionTextContainer>
        <div>나가기</div>
      </MapOptionTextContainer>
    </MapOptionAtomContainer>
  );
};

export default Exit;
