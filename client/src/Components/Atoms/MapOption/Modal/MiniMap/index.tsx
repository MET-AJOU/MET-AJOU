import { MODALCONTAINER } from "@Organisms/MapOption/Modal/useGetModal";
import { CloseModal } from "../styles";
import useCloseModal from "../useCloseModal";
import MiniMap from "./Map";
import { ModalContainer, Title, MapFrame } from "./styles";

const MiniMapModal = ({ targetRef }: { targetRef: any }) => {
  const handleCloseModal = useCloseModal();
  return (
    <ModalContainer ref={targetRef} id={MODALCONTAINER}>
      <Title>미니맵</Title>
      <MapFrame>
        <MiniMap />
      </MapFrame>
      <CloseModal size="6" top="5%" src="./asset/MapOption/Modal/closeModal.png" alt="close" onClick={handleCloseModal} />
    </ModalContainer>
  );
};

export default MiniMapModal;
