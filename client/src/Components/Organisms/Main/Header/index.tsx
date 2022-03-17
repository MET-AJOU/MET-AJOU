import MainHeaderLeft from "@Molecules/Main/HeaderLeft/index";
import MainHeaderRight from "@Molecules/Main/HeaderRight/index";
import { HeaderContainer } from "./styles";

const MainHeader = () => {
  return (
    <HeaderContainer>
      <MainHeaderLeft />
      <MainHeaderRight />
    </HeaderContainer>
  );
};

export default MainHeader;
