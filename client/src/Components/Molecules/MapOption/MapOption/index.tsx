import Controller from "@Atoms/MapOption/Controller";
import Exit from "@Atoms/MapOption/Exit";
import MyPage from "@Atoms/MapOption/MyPage";
import { MapOptionContainer } from "./styles";

const MapOption = () => {
  return (
    <MapOptionContainer>
      <MyPage />
      <Controller />
      <Exit />
    </MapOptionContainer>
  );
};

export default MapOption;
