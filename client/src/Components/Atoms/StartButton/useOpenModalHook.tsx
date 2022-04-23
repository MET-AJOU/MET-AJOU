import { checkModalOpenState } from "@Recoils/Modal";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

const useOpenModalHook = () => {
  const openModal = useSetRecoilState(checkModalOpenState);
  const handleOpenModal = () => openModal(true);
  const handleCloseModal = () => openModal(false);

  useEffect(() => {
    return () => handleCloseModal();
  });

  return handleOpenModal;
};

export default useOpenModalHook;
