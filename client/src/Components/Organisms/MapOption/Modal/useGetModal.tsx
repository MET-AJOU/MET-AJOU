import ChangeModal from "@Atoms/MapOption/Modal/Change";
import ControlModal from "@Atoms/MapOption/Modal/ControlModal";
import ExitModal from "@Atoms/MapOption/Modal/Exit";
import MiniMapModal from "@Atoms/MapOption/Modal/MiniMap";
import MyPageModal from "@Atoms/MapOption/Modal/MyPage/MyPageModal";
import useCloseModal from "@Atoms/MapOption/Modal/useCloseModal";
import VideoModal from "@Atoms/MapOption/Modal/Video";
import { ModalState } from "@Recoils/MapOption/Modal";
import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";

const useGetModal = () => {
  const modalState = useRecoilValue(ModalState);
  const ref = useRef();
  const handleCloseModal = useCloseModal();
  const handleEvent = closeKeyPressModal(handleCloseModal);
  //   const handleClickEvent = closeClickModal(handleCloseModal, ref);

  useEffect(() => {
    window.addEventListener("keydown", handleEvent);
    // window.addEventListener("click", handleClickEvent);
    return () => {
      window.removeEventListener("keydown", handleEvent);
    };
  }, []);

  if (typeof modalState !== typeof " ") {
    return <VideoModal targetRef={ref} src={(modalState as any).src} />;
  }

  switch (modalState) {
    case "":
      return null;
    case CONTROL:
      return <ControlModal targetRef={ref} />;
    case MYPAGE:
      return <MyPageModal targetRef={ref} />;
    case EXIT:
      return <ExitModal targetRef={ref} />;
    case CHANGE:
      return <ChangeModal targetRef={ref} />;
    case MINIMAP:
      return <MiniMapModal targetRef={ref} />;
    default:
      return null;
  }
};

export default useGetModal;

export const CONTROL = "Controller";
export const MYPAGE = "MyPage";
export const EXIT = "Exit";
export const CHANGE = "Change";
export const MODALCONTAINER = "ModalContainer";
export const MINIMAP = "MiniMap";

const closeKeyPressModal =
  (fn: () => void) =>
  ({ keyCode }: { keyCode: any }) => {
    if (keyCode !== 27) return;
    fn();
  };

// const closeClickModal =
//   (fn: () => void, ref: any) =>
//   ({ target }: { target: any }) => {
//     console.log(ref.current);
//     if (!ref.current) return;
//     const ModalTarget = target.closest(`#${MODALCONTAINER}`);
//     if (ModalTarget) return;
//     fn();
//   };
