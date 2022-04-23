import { useNavigate } from "react-router-dom";
import ModalItem from "@Molecules/Main/ModalItem";
import { checkModalOpenState } from "@Recoils/Modal";
import { useRecoilValue } from "recoil";
import { ModalContainer, ItemContainer, ModalTitle, ModalLogo, ModalDescription } from "./styles";

const MainModal = () => {
  const on = useRecoilValue(checkModalOpenState);
  const navigate = useNavigate();
  if (!on) return null;
  const handleMoveMap = () => navigate("/map");
  const handleMoveLogin = () => navigate("/login");
  return (
    <ModalContainer>
      <ModalLogo src="/asset/StartModal/ModalLogo.png" alt="모달로고" width="150px" />
      <ModalTitle>Welcome to MET:AJOU</ModalTitle>
      <ModalDescription>Please complete yout Social Login!</ModalDescription>
      <ItemContainer>
        <ModalItem handleMoveEvent={handleMoveMap} title={GUEST_TITLE} />
        <ModalItem handleMoveEvent={handleMoveLogin} title={AJOU_TITLE} />
      </ItemContainer>
    </ModalContainer>
  );
};

export default MainModal;

export const GUEST_TITLE = "Guest";
export const AJOU_TITLE = "Ajou Univ Student";
