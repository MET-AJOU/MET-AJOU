import useOn from "@Hook/useOn";
import { MapOptionAtomContainer, MapOptionImgContainer, MapOptionTextContainer } from "./styles";

const Exit = () => {
  const { on, handleToggleOn } = useOn();
  return (
    <MapOptionAtomContainer>
      <MapOptionImgContainer onMouseEnter={handleToggleOn} onMouseLeave={handleToggleOn}>
        <img src="./asset/MapOption/MapOption/exit.png" alt="나가기" />
      </MapOptionImgContainer>
      <MapOptionTextContainer type="Down">{on && <div>나가기</div>}</MapOptionTextContainer>
    </MapOptionAtomContainer>
  );
};

export default Exit;
