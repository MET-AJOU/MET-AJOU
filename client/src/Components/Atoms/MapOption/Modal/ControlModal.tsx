import { MODALCONTAINER } from "@Organisms/MapOption/Modal/useGetModal";
import { CloseModal, ControlModalContainer, ControlModalImg } from "./styles";
import useCloseModal from "./useCloseModal";

const ControlModal = ({ targetRef }: { targetRef: any }) => {
  const handleCloseModal = useCloseModal();
  return (
    <ControlModalContainer ref={targetRef} id={MODALCONTAINER}>
      <ControlModalImg src="./asset/MapOption/Modal/control.png" alt="컨트롤 모달" />
      <CloseModal size="10" src="./asset/MapOption/Modal/closeModal.png" alt="close" onClick={handleCloseModal} />
    </ControlModalContainer>
  );
};

export default ControlModal;
