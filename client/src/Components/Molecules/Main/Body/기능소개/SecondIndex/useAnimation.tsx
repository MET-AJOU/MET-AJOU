import { useEffect } from "react";

const useAnimation = (isVisible: boolean, joyStickVisible: boolean) => {
  useMiddleAnimation(isVisible);
  useBottomAnimation(joyStickVisible);
};

const useBottomAnimation = (joyStickVisible: boolean) => {
  useEffect(() => {
    console.log(joyStickVisible);
    if (!joyStickVisible) return;
    const cont = document.querySelector(".second_cont");
    if (!cont) return;
    const stars = cont.querySelectorAll(".third");
    setTimeout(() => {
      stars[0].classList.add("slide_up");
      stars[0].classList.add("stars_rotate");
      stars[0].classList.remove("slide_down_bottom");
    }, 2000);
    setTimeout(() => {
      stars[1].classList.add("slide_up");
      stars[1].classList.add("stars_rotate");
      stars[1].classList.remove("slide_down_bottom");
    }, 3000);
  }, [joyStickVisible]);
};

const useMiddleAnimation = (isVisible: boolean) => {
  useEffect(() => {
    if (!isVisible) return;
    const cont = document.querySelector(".second_cont");
    if (!cont) return;
    const firsts = cont.querySelectorAll(".first");
    const seconds = cont.querySelectorAll(".second");

    setTimeout(() => {
      firsts[0].classList.remove("slide_down_middle");
      firsts[0].classList.add("slide_up_no_pos");
    }, 1500);
    setTimeout(() => {
      firsts[1].classList.remove("slide_down_middle");
      firsts[1].classList.add("slide_up_no_pos");
    }, 2000);
    setTimeout(() => {
      firsts[2].classList.remove("slide_down_middle");
      firsts[2].classList.add("slide_up_no_pos");
    }, 2500);
    setTimeout(() => {
      firsts[3].classList.remove("slide_down_middle");
      firsts[3].classList.add("slide_up_no_pos");
      firsts[4].classList.remove("slide_down_middle");
      firsts[4].classList.add("slide_up_no_pos");
    }, 3000);
    setTimeout(() => {
      seconds[0].classList.remove("slide_down_middle");
      seconds[0].classList.add("slide_up_no_pos");
    }, 3500);
    setTimeout(() => {
      seconds[1].classList.remove("slide_down_middle");
      seconds[1].classList.add("slide_up_no_pos");
    }, 4000);
    setTimeout(() => {
      seconds[2].classList.remove("slide_down_middle");
      seconds[2].classList.add("slide_up_no_pos");
    }, 4500);
    setTimeout(() => {
      seconds[3].classList.remove("slide_down_middle");
      seconds[3].classList.add("slide_up_no_pos");
      seconds[4].classList.remove("slide_down_middle");
      seconds[4].classList.add("slide_up_no_pos");
    }, 5000);
  }, [isVisible]);
};
export default useAnimation;
