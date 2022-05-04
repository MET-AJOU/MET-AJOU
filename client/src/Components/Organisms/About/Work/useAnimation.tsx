/* eslint-disable no-useless-return */
import { useEffect } from "react";

const useAnimation = (isVisible: boolean) => {
  useEffect(() => {
    if (!isVisible) return;
    const cont = document.querySelector(".about_work_cont");
    if (!cont) return;
    const seongu = cont.querySelector(".stand_left");

    setTimeout(() => {
      seongu?.classList.remove("stand_left");
    }, 500);
  }, [isVisible]);
};

export default useAnimation;
