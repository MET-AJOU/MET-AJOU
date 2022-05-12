import { MiniMapContainer, MapOptionImgContainer, MapOptionTextContainer } from "@Atoms/MapOption/styles";

const MiniMap = () => {
  return (
    <MiniMapContainer>
      <MapOptionTextContainer>
        <div>미니맵</div>
      </MapOptionTextContainer>
      <MapOptionImgContainer>
        <img src="./asset/MapOption/MiniMap/minimap.png" alt="나가기" />
      </MapOptionImgContainer>
    </MiniMapContainer>
  );
};

export default MiniMap;
