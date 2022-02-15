import MainHeaderLeft from "@Molecules/Main/HeaderLeft/index";
import MainHeaderRight from "@Molecules/Main/HeaderRight/index";
import { HeaderContainer } from "./styles";
import { HeaderProps } from "@Type/.";

const MainHeader = ({ handleStartClick }: HeaderProps) => {
    return (
        <HeaderContainer>
            <MainHeaderLeft />
            <MainHeaderRight handleStartClick={handleStartClick} />
        </HeaderContainer>
    );
};

export default MainHeader;
