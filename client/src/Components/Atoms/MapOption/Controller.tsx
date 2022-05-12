import useOn from "@Hook/useOn";
import { MapOptionAtomContainer, MapOptionImgContainer, MapOptionTextContainer } from "./styles";

const Controller = () => {
  const { on, handleToggleOn } = useOn();
  return (
    <MapOptionAtomContainer>
      <MapOptionImgContainer onMouseEnter={handleToggleOn} onMouseLeave={handleToggleOn}>
        <img src="./asset/MapOption/MapOption/controller.png" alt="조작가이드" />
      </MapOptionImgContainer>
      <MapOptionTextContainer type="Down">{on && <div>조작가이드</div>}</MapOptionTextContainer>
    </MapOptionAtomContainer>
  );
};

export default Controller;
