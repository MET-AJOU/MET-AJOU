/* eslint-disable no-useless-return */
import { useEffect } from "react";

const useAnimation = (isVisible: boolean) => {
  useEffect(() => {
    if (!isVisible) return;
    const cont = document.querySelector(".about_work_cont");
    if (!cont) return;
  }, [isVisible]);
};

export default useAnimation;
