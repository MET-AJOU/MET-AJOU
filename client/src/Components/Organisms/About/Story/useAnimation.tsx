import { useEffect } from "react";

const useAnimation = (isVisible: boolean) => {
  useEffect(() => {
    if (!isVisible) return;
    const cont = document.querySelector(".About_Story");
    if (!cont) return;
    const textBoxes = cont.querySelectorAll(".scale_down");
    const texts = cont.querySelectorAll(".slide_down");
    Array.from(textBoxes).forEach((textBox: Element) => {
      textBox.classList.remove("scale_down");
    });
    setTimeout(() => {
      Array.from(texts).forEach((text: Element) => {
        text.classList.remove("slide_down");
      });
    }, 1000);
  }, [isVisible]);
};

export default useAnimation;
