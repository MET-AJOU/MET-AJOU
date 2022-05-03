import { useEffect } from "react";

const useAnimation = (isVisible: boolean) => {
  useEffect(() => {
    if (!isVisible) return;
    const cont = document.querySelector(".About_Info");
    if (!cont) return;
    const Infos = cont.querySelectorAll(".slide_down");

    setTimeout(() => {
      Infos[0].classList.add("slide_up");
      Infos[0].classList.remove("slide_down");
    }, 700);

    setTimeout(() => {
      Infos[1].classList.add("slide_up");
      Infos[1].classList.remove("slide_down");
    }, 1200);
  }, [isVisible]);
};

export default useAnimation;
