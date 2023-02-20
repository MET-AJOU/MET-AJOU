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

  const handleVideoOpen = (src: string) => {
    setState({ type: "video", src });
  };

  return { handleControllerOpen, handleMyPageOpen, handleExitOpen, handleMiniMapOpen, handleVideoOpen };
};

export default useOpenModal;
