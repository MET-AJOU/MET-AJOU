import { useNavigate } from "react-router-dom";
import ModalItem from "@Molecules/Main/ModalItem";
import { checkModalOpenState } from "@Recoils/Modal";
import { useRecoilValue } from "recoil";
import { ModalContainer, ItemContainer } from "./styles";

const MainModal = () => {
  const on = useRecoilValue(checkModalOpenState);
  const navigate = useNavigate();
  if (!on) return null;
  const handleMoveMap = () => navigate("/map");
  const handleMoveLogin = () => navigate("/login");
  return (
    <ModalContainer>
      <ItemContainer>
        <ModalItem handleMoveEvent={handleMoveMap} title="GUEST" />
        <ModalItem handleMoveEvent={handleMoveLogin} title="아주인" />
      </ItemContainer>
    </ModalContainer>
  );
};

export default MainModal;
