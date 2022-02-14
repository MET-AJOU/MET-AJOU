import MainHeaderLeft from "@Molecules/Main/HeaderLeft/index.jsx";
import MainHeaderRight from "@Molecules/Main/HeaderRight/index.jsx";
import { HeaderContainer } from "./styles.jsx";
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
