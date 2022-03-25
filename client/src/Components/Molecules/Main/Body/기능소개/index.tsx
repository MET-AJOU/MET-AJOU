import React, { useRef } from "react";
import usePlanetMove from "@Hook/usePlanetMove";
import ThirdIndex from "./ThirdIndex";
import SecondIndex from "./SecondIndex";
import FirstIndex from "./FirstIndex";

const HomeTechIntroduce = () => {
  const star = useRef<HTMLImageElement>(null);
  const firstPlanet = useRef<HTMLImageElement>(null);
  const secondPlanet = useRef<HTMLImageElement>(null);
  const thirdPlanet = useRef<HTMLImageElement>(null);

  usePlanetMove({ firstPlanet, secondPlanet, thirdPlanet, star });

  return (
    <>
      <img className="first" src="/asset/Main/01.png" alt="상단 그라데이션" width="100%" height="800px" />
      <img className="second" src="/asset/Main/02.png" alt="중단 밤하늘" width="100%" height="800px" />
      <img ref={star} className="third" src="/asset/Main/03.png" alt="중단 밤하늘의 별" width="100%" height="800px" />
      <img ref={firstPlanet} className="firstPlanet" src="/asset/Main/planet01.png" alt="행성1" />
      <img ref={secondPlanet} className="secondPlanet" src="/asset/Main/planet02.png" alt="행성2" />
      <img ref={thirdPlanet} className="thirdPlanet" src="/asset/Main/planet03.png" alt="행성3" />
      <FirstIndex />
      <SecondIndex />
      <ThirdIndex />
    </>
  );
};

export default React.memo(HomeTechIntroduce);
