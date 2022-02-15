import { useNavigate } from "react-router-dom";
import ModalItem from "@Molecules/Main/ModalItem";
import { Text } from "@Molecules/Main/HeaderRight/styles";
import { ModalContainer, ItemContainer } from "./styles";

const MainModal = () => {
  const navigate = useNavigate();
  const handleMoveEvent = () => navigate("/map");
  const handleMoveEvent2 = () => navigate("/login");
  return (
    <ModalContainer>
      <Text>로그인</Text>
      <ItemContainer>
        <ModalItem handleMoveEvent={handleMoveEvent} title="GUEST" />
        <ModalItem handleMoveEvent={handleMoveEvent2} title="아주인" />
      </ItemContainer>
    </ModalContainer>
  );
};

export default MainModal;
