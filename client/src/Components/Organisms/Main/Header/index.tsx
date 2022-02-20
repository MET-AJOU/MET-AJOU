import MainHeaderLeft from "@Molecules/Main/HeaderLeft/index";
import MainHeaderRight from "@Molecules/Main/HeaderRight/index";
import { HeaderProps } from "@Type/.";
import { HeaderContainer } from "./styles";

const MainHeader = ({ handleStartClick }: HeaderProps) => {
  return (
    <HeaderContainer>
      <MainHeaderLeft />
      <MainHeaderRight handleStartClick={handleStartClick} />
    </HeaderContainer>
  );
};

export default MainHeader;
