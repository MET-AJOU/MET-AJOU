import { MiniMapContainer, MapOptionImgContainer, MapOptionTextContainer } from "@Atoms/MapOption/styles";
import useOn from "@Hook/useOn";

const MiniMap = ({ handleMiniMapOpen }: { handleMiniMapOpen: () => void }) => {
  const { on, handleToggleOn } = useOn();
  return (
    <MiniMapContainer>
      <MapOptionTextContainer type="Up">{on && <div>미니맵</div>}</MapOptionTextContainer>
      <MapOptionImgContainer onMouseEnter={handleToggleOn} onMouseLeave={handleToggleOn} onClick={handleMiniMapOpen}>
        <img src="./asset/MapOption/MiniMap/minimap.png" alt="미니맵" />
      </MapOptionImgContainer>
    </MiniMapContainer>
  );
};

export default MiniMap;
