import { useEffect } from "react";

const useAnimation = (isVisible: boolean) => {
  useEffect(() => {
    if (!isVisible) return;
    const childrens = document.querySelector(".cont")?.querySelectorAll(".slide_down");
    if (!childrens) return;

    setTimeout(() => {
      childrens[0].classList.add("slide_up");
      childrens[0].classList.remove("slide_down");
    }, 700);

    setTimeout(() => {
      childrens[1].classList.add("slide_up_opacity");
      childrens[1].classList.remove("slide_down");
    }, 1200);
    setTimeout(() => {
      childrens[2].classList.add("slide_up");
      childrens[2].classList.remove("slide_down");
    }, 1700);
  }, [isVisible]);
};

export default useAnimation;
