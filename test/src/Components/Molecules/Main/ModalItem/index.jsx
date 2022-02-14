import ModalItemContainer from "./styles";

const ModalItem = ({ handleMoveEvent, title }) => {
  return (
    <ModalItemContainer onClick={handleMoveEvent}>{title}</ModalItemContainer>
  );
};
export default ModalItem;
