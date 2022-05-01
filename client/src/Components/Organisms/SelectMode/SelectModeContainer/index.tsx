import ModalItem from "@Molecules/SelectMode/ModalItem";
import { AJOU_TITLE, GUEST_TITLE } from "@Templates/SelectMode";
import { useNavigate } from "react-router-dom";
import { ItemsContainer } from "./styles";

const SelectModeContainer = () => {
  const navigate = useNavigate();
  const handleMoveMap = () => navigate("/map");
  const handleMoveLogin = () => navigate("/login");

  return (
    <ItemsContainer>
      <ModalItem handleMoveEvent={handleMoveMap} title={GUEST_TITLE} />
      <ModalItem handleMoveEvent={handleMoveLogin} title={AJOU_TITLE} />
    </ItemsContainer>
  );
};

export default SelectModeContainer;
