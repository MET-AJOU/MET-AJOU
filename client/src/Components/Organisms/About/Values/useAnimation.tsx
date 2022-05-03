import { useEffect } from "react";

const useAnimation = (isVisible: boolean) => {
  useEffect(() => {
    if (!isVisible) return;
    const cont = document.querySelector(".about_value_cont");
    if (!cont) return;
    const valueCards = cont.querySelectorAll(".slide_down_relative");
    Array.from(valueCards).forEach((valueCard: Element, idx) => {
      setTimeout(() => {
        valueCard.classList.remove("slide_down_relative");
      }, 700 * idx);
    });
  }, [isVisible]);
};

export default useAnimation;
