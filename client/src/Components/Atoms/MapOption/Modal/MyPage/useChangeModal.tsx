import { CHANGE } from "@Organisms/MapOption/Modal/useGetModal";
import { ModalState } from "@Recoils/MapOption/Modal";
import { useCallback } from "react";
import { useSetRecoilState } from "recoil";

const useChangeModal = () => {
  const setState = useSetRecoilState(ModalState);

  const handleChangeModal = useCallback(() => setState(CHANGE), []);

  return handleChangeModal;
};

export default useChangeModal;
