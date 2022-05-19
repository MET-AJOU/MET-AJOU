import useCloseModal from "../useCloseModal";
import { CloseModal } from "../styles";
import { ContentContainer, ExitModalContainer, Text, Button } from "./styles";
import useHandleExit from "./useHandleExit";

const ExitModal = ({ targetRef }: { targetRef: any }) => {
  const handleCloseModal = useCloseModal();
  const handleExit = useHandleExit();

  return (
    <ExitModalContainer ref={targetRef}>
      <ContentContainer>
        <Text>정말 나가시겠습니까?</Text>
        <Button onClick={handleExit} color="blue">
          나가기
        </Button>
      </ContentContainer>
      <CloseModal size="37" top="30%" src="./asset/MapOption/Modal/closeModal.png" alt="close" onClick={handleCloseModal} />
    </ExitModalContainer>
  );
};

export default ExitModal;
