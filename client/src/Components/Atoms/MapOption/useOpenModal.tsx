import { CONTROL, EXIT, MYPAGE } from "@Organisms/MapOption/Modal/useGetModal";
import { ModalState } from "@Recoils/MapOption/Modal";
import { useSetRecoilState } from "recoil";

const useOpenModal = () => {
  const setState = useSetRecoilState(ModalState);

  const handleControllerOpen = () => {
    setState(CONTROL);
  };

  const handleMyPageOpen = () => {
    setState(MYPAGE);
  };

  const handleExitOpen = () => {
    setState(EXIT);
  };

  return { handleControllerOpen, handleMyPageOpen, handleExitOpen };
};

export default useOpenModal;
