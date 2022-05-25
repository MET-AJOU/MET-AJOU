/* eslint-disable jsx-a11y/media-has-caption */
import { GET_VIDEO_URL } from "@Constant/URL";
import { MODALCONTAINER } from "@Organisms/MapOption/Modal/useGetModal";
import { CloseModal } from "../styles";
import useCloseModal from "../useCloseModal";
import { ModalContainer, VideoContainer } from "./styles";

const VideoModal = ({ targetRef, src }: { targetRef: any; src: string }) => {
  const handleCloseModal = useCloseModal();

  return (
    <ModalContainer ref={targetRef} id={MODALCONTAINER}>
      <VideoContainer>
        <video width="100%" height="100%" controls>
          <source src={`${GET_VIDEO_URL}${src}`} />
        </video>
      </VideoContainer>
      <CloseModal size="6" top="5%" src="./asset/MapOption/Modal/closeModal.png" alt="close" onClick={handleCloseModal} />
    </ModalContainer>
  );
};

export default VideoModal;
