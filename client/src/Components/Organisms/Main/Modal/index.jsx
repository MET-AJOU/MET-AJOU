import { withRouter } from "react-router-dom";
import { ModalContainer, ItemContainer } from "./styles";
import ModalItem from "@Molecules/Main/ModalItem";
import { Text } from "@Molecules/Main/HeaderRight/styles";

const MainModal = ({ history }) => {
  const handleMoveEvent = () => {
    history.push("/map");
  };
  const handleMoveEvent2 = () => {
    history.push("/login");
  };
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

export default withRouter(MainModal);
