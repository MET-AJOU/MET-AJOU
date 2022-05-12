import { UPDATE } from "@Organisms/Character";
import { MODALCONTAINER } from "@Organisms/MapOption/Modal/useGetModal";
import CharacterTemplate from "@Templates/Character";
import { CloseModal } from "../styles";
import useCloseModal from "../useCloseModal";
import { ChangeModalContainer } from "./styles";

const ChangeModal = ({ targetRef }: { targetRef: any }) => {
  const handleCloseModal = useCloseModal();
  return (
    <ChangeModalContainer ref={targetRef} id={MODALCONTAINER}>
      <CharacterTemplate type={UPDATE} />
      <CloseModal size="15" src="./asset/MapOption/Modal/closeModal.png" alt="close" onClick={handleCloseModal} />
    </ChangeModalContainer>
  );
};

export default ChangeModal;
