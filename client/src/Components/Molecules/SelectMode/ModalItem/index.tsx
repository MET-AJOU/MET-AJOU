import { GUEST_TITLE } from "@Templates/SelectMode";
import ModalCharacter from "../ModalCharacter";
import { ModalItemContainer, ModalItemTitle } from "./styles";

interface Props {
  handleMoveEvent: () => void;
  title: string;
}
const ModalItem = ({ handleMoveEvent, title }: Props) => {
  return (
    <ModalItemContainer onClick={handleMoveEvent}>
      <ModalItemTitle>{title}</ModalItemTitle>
      <ModalCharacter src={checkSrc(title)} />
    </ModalItemContainer>
  );
};
export default ModalItem;

const checkSrc = (title: string) => (title === GUEST_TITLE ? "asset/StartModal/Guest.fbx" : "asset/StartModal/Ajou.fbx");
