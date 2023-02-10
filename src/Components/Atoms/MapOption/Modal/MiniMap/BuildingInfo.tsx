import useOpenModal from "@Atoms/MapOption/useOpenModal";
import { Button } from "@Atoms/StartButton/styles";
import { DEFAULT_BUILDING_INFO, MiniMapBuildingSrc, MINIMAP_INFO } from "@Constant/MiniMap";
import { InfoContainer, BuildingImg, BuildingInfoContainer, BuildingTitle, Text } from "./styles";

const BuildingInfo = ({ clickState }: { clickState: number }) => {
  const { building, info, video } = clickState !== -1 ? MINIMAP_INFO[clickState] : DEFAULT_BUILDING_INFO;
  const { handleVideoOpen } = useOpenModal();
  return (
    <BuildingInfoContainer>
      <BuildingTitle>{building}</BuildingTitle>
      <InfoContainer>
        {building && <BuildingImg src={`${MiniMapBuildingSrc}${building}.svg`} alt="빌딩이미지" />}
        <Text>{info}</Text>
        {building && video && (
          <Button onClick={() => handleVideoOpen(video)} color="blue">
            영상 재생
          </Button>
        )}
      </InfoContainer>
    </BuildingInfoContainer>
  );
};

export default BuildingInfo;
