import { CONTROL, EXIT, MINIMAP, MYPAGE } from "@Organisms/MapOption/Modal/useGetModal";
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

  const handleMiniMapOpen = () => {
    setState(MINIMAP);
  };

  return { handleControllerOpen, handleMyPageOpen, handleExitOpen, handleMiniMapOpen };
};

export default useOpenModal;
