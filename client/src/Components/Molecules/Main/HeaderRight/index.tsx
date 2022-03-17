import StartButton from "@Atoms/StartButton";
import { useNavigate } from "react-router-dom";
import { Text, MainHeaderRightContainer } from "./styles";

const MainHeaderRight = () => {
  const navigator = useNavigate();
  const handleAboutClick = () => navigator("/about");

  return (
    <MainHeaderRightContainer>
      <Text onClick={handleAboutClick}>About us</Text>
      <StartButton />
    </MainHeaderRightContainer>
  );
};

export default MainHeaderRight;
