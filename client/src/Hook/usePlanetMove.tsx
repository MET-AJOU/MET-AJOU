/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-restricted-syntax */
import { useEffect } from "react";

const usePlanetMove = ({ firstPlanet, secondPlanet, thirdPlanet, star }: { firstPlanet: React.RefObject<HTMLImageElement> | null; secondPlanet: React.RefObject<HTMLImageElement> | null; thirdPlanet: React.RefObject<HTMLImageElement> | null; star: React.RefObject<HTMLImageElement> | null }) => {
  const saFunc = () => {
    const elementList = [firstPlanet?.current, secondPlanet?.current, thirdPlanet?.current, star?.current];

    for (const element of elementList) {
      if (!element) return;
      if (element.classList.contains("show")) return;
      if (window.innerHeight > element.getBoundingClientRect().top + TriggerMargin) {
        element?.classList.add("show");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", saFunc);
    return () => {
      window.removeEventListener("scroll", saFunc);
    };
  });
};

export default usePlanetMove;

const TriggerMargin = 300;
