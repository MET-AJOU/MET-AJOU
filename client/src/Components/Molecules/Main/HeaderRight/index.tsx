import StartButton from "@Atoms/StartButton";
import { ABOUT } from "@Constant/URL";
import useMovePage from "@Hook/useMovePage";
import { Text, MainHeaderRightContainer } from "./styles";

const MainHeaderRight = () => {
  const handleAboutClick = useMovePage(ABOUT);

  return (
    <MainHeaderRightContainer>
      <Text onClick={handleAboutClick}>About us</Text>
      <StartButton color="white" />
    </MainHeaderRightContainer>
  );
};

export default MainHeaderRight;
