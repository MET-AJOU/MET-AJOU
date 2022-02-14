import ModalItemContainer from "./styles";

interface Props {
    handleMoveEvent: () => void;
    title: string;
}
const ModalItem = ({ handleMoveEvent, title }: Props) => {
    return <ModalItemContainer onClick={handleMoveEvent}>{title}</ModalItemContainer>;
};
export default ModalItem;
