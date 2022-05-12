import { MapOptionAtomContainer, MapOptionImgContainer, MapOptionTextContainer } from "./styles";

const Controller = () => {
  return (
    <MapOptionAtomContainer>
      <MapOptionImgContainer>
        <img src="./asset/MapOption/MapOption/controller.png" alt="조작가이드" />
      </MapOptionImgContainer>
      <MapOptionTextContainer>
        <div>조작가이드</div>
      </MapOptionTextContainer>
    </MapOptionAtomContainer>
  );
};

export default Controller;
