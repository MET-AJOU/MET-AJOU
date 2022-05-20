import { MODALCONTAINER } from "@Organisms/MapOption/Modal/useGetModal";
import { useState } from "react";
import { CloseModal } from "../styles";
import useCloseModal from "../useCloseModal";
import BuildingInfo from "./BuildingInfo";
import MiniMap from "./Map";
import { ModalContainer, Title, MapFrame } from "./styles";

const MiniMapModal = ({ targetRef }: { targetRef: any }) => {
  const handleCloseModal = useCloseModal();
  const [clickState, setClick] = useState(-1);

  return (
    <ModalContainer ref={targetRef} id={MODALCONTAINER}>
      <Title>미니맵</Title>
      <MapFrame>
        <MiniMap clickState={clickState} setClick={setClick} />
        <BuildingInfo clickState={clickState} />
      </MapFrame>
      <CloseModal size="6" top="5%" src="./asset/MapOption/Modal/closeModal.png" alt="close" onClick={handleCloseModal} />
    </ModalContainer>
  );
};

export default MiniMapModal;
