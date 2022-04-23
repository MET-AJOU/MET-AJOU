import ModalItem from "@Molecules/SelectMode/ModalItem";
import LoginContainer from "@Organisms/Login/LoginContainer";
import { useNavigate } from "react-router-dom";
import { ItemContainer } from "./styles";
// import { ModalContainer, ItemContainer, ModalTitle, ModalLogo, ModalDescription } from "./styles";

const SelectModeTemplate = () => {
  const navigate = useNavigate();
  const handleMoveMap = () => navigate("/map");
  const handleMoveLogin = () => navigate("/login");

  return (
    <LoginContainer title="해당되는 권한을 선택해 주세요">
      <ItemContainer>
        <ModalItem handleMoveEvent={handleMoveMap} title={GUEST_TITLE} />
        <ModalItem handleMoveEvent={handleMoveLogin} title={AJOU_TITLE} />
      </ItemContainer>
    </LoginContainer>
  );
};

export default SelectModeTemplate;

export const GUEST_TITLE = "게스트";
export const AJOU_TITLE = "아주대생";
