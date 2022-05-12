import Controller from "@Atoms/MapOption/Controller";
import Exit from "@Atoms/MapOption/Exit";
import MyPage from "@Atoms/MapOption/MyPage";
import useOpenModal from "@Atoms/MapOption/useOpenModal";
import { MapOptionContainer } from "./styles";

const MapOption = () => {
  const { handleControllerOpen, handleMyPageOpen, handleExitOpen } = useOpenModal();
  return (
    <MapOptionContainer>
      <MyPage handleMyPageOpen={handleMyPageOpen} />
      <Controller handleControllerOpen={handleControllerOpen} />
      <Exit handleExitOpen={handleExitOpen} />
    </MapOptionContainer>
  );
};

export default MapOption;
