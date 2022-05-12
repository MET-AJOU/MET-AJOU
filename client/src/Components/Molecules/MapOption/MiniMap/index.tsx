import { MiniMapContainer, MapOptionImgContainer, MapOptionTextContainer } from "@Atoms/MapOption/styles";
import useOn from "@Hook/useOn";

const MiniMap = () => {
  const { on, handleToggleOn } = useOn();
  return (
    <MiniMapContainer>
      <MapOptionTextContainer>{on && <div>미니맵</div>}</MapOptionTextContainer>
      <MapOptionImgContainer onMouseEnter={handleToggleOn} onMouseLeave={handleToggleOn}>
        <img src="./asset/MapOption/MiniMap/minimap.png" alt="나가기" />
      </MapOptionImgContainer>
    </MiniMapContainer>
  );
};

export default MiniMap;
