import { ModalState } from "@Recoils/MapOption/Modal";
import { useCallback } from "react";
import { useSetRecoilState } from "recoil";

const useCloseModal = () => {
  const setState = useSetRecoilState(ModalState);

  const handleCloseModal = useCallback(() => setState(""), []);

  return handleCloseModal;
};

export default useCloseModal;
