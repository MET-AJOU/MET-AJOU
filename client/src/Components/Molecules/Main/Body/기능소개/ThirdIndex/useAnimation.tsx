import { useEffect } from "react";

const useAnimation = (isVisible: boolean) => {
  useEffect(() => {
    if (!isVisible) return;
    const childrens = document.querySelectorAll(".hearts");
    if (!childrens) return;

    setTimeout(() => {
      childrens[0].classList.add("hearts1");
      childrens[0].classList.remove("hide_up");
      setTimeout(() => {
        childrens[0].classList.add("hide");
      }, 2000);
    }, 0);

    setTimeout(() => {
      childrens[1].classList.add("hearts2");
      childrens[1].classList.remove("hide_up");
      setTimeout(() => {
        childrens[1].classList.add("hide");
      }, 1000);
    }, 1000);
  }, [isVisible]);
};
export default useAnimation;
