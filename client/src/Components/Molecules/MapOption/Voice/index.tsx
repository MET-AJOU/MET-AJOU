import { MapOptionTextContainer, MapOptionImgContainer } from "@Atoms/MapOption/styles";
import useOn from "@Hook/useOn";
import { VoiceContainer } from "./styles";
import useOnVoice from "./useOnVoice";

const Voice = () => {
  const { on, handleToggleOn } = useOn();
  const { imgSrc, handleVoiceToggle } = useOnVoice();

  return (
    <VoiceContainer onClick={handleVoiceToggle}>
      <MapOptionTextContainer>{on && <div>음소거</div>}</MapOptionTextContainer>
      <MapOptionImgContainer onMouseEnter={handleToggleOn} onMouseLeave={handleToggleOn}>
        <img src={imgSrc} alt="나가기" />
      </MapOptionImgContainer>
    </VoiceContainer>
  );
};

export default Voice;
