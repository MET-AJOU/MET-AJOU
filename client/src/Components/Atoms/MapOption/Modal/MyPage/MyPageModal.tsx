import SelectPreview from "@Molecules/Character/SelectPreview";
import useSelectCharacter from "@Organisms/Character/useSelectCharacter";
import { MODALCONTAINER } from "@Organisms/MapOption/Modal/useGetModal";
import { CloseModal } from "../styles";

import useCloseModal from "../useCloseModal";
import InfoBody from "./InfoBody";
import { MyPageModalContainer, MyPageModalTitle, MyPageBodyContainer, MyPageSelectPreviewContainer, MyPageUserInfoHeader, MyPageCharacterChangeButton } from "./styles";
import useChangeModal from "./useChangeModal";

const MyPageModal = ({ targetRef }: { targetRef: any }) => {
  const handleCloseModal = useCloseModal();
  const handleChangeModal = useChangeModal();
  const { defaultRenderCharacter } = useSelectCharacter();
  return (
    <MyPageModalContainer ref={targetRef} id={MODALCONTAINER}>
      <MyPageModalTitle>마이페이지</MyPageModalTitle>
      <MyPageBodyContainer>
        <MyPageSelectPreviewContainer>
          <SelectPreview renderCharacter={defaultRenderCharacter} />
          <MyPageCharacterChangeButton onClick={handleChangeModal}>캐릭터 변경</MyPageCharacterChangeButton>
        </MyPageSelectPreviewContainer>
        <div>
          <MyPageUserInfoHeader>사용자 정보</MyPageUserInfoHeader>
          <InfoBody />
        </div>
      </MyPageBodyContainer>
      <CloseModal size="15" src="./asset/MapOption/Modal/closeModal.png" alt="close" onClick={handleCloseModal} />
    </MyPageModalContainer>
  );
};

export default MyPageModal;
