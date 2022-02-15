import { HeaderProps } from "@Type/.";
import { Text, MainHeaderRightContainer } from "./styles";

const MainHeaderRight = ({ handleStartClick }: HeaderProps) => {
  return (
    <MainHeaderRightContainer>
      <Text>팀 소개</Text>
      <Text onClick={handleStartClick}>START</Text>
    </MainHeaderRightContainer>
  );
};

export default MainHeaderRight;
