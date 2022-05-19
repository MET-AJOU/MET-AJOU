import { Button } from "@Atoms/StartButton/styles";
import { DEFAULT_BUILDING_INFO, MiniMapBuildingSrc, MINIMAP_INFO } from "@Constant/MiniMap";
import { BuildingImg, BuildingInfoContainer, BuildingTitle, Text } from "./styles";

const BuildingInfo = ({ clickState }: { clickState: number }) => {
  const { building, info } = clickState !== -1 ? MINIMAP_INFO[clickState] : DEFAULT_BUILDING_INFO;
  return (
    <BuildingInfoContainer>
      <BuildingTitle>{building}</BuildingTitle>
      <BuildingInfoContainer>
        <BuildingImg src={`${MiniMapBuildingSrc}${building}`} alt="빌딩이미지" />
        <Text>{info}</Text>
        <Button color="blue">영상 재생</Button>
      </BuildingInfoContainer>
    </BuildingInfoContainer>
  );
};

export default BuildingInfo;
