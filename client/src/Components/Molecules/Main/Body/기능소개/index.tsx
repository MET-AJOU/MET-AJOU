import { useRef } from "react";
import usePlanetMove from "@Hook/usePlanetMove";
import { TechIntroduceContainer } from "./styles";

const HomeTechIntroduce = () => {
  const star = useRef<HTMLImageElement>(null);
  const firstPlanet = useRef<HTMLImageElement>(null);
  const secondPlanet = useRef<HTMLImageElement>(null);
  const thirdPlanet = useRef<HTMLImageElement>(null);

  usePlanetMove({ firstPlanet, secondPlanet, thirdPlanet, star });

  return (
    <TechIntroduceContainer>
      <img className="first" src="/asset/Main/01.png" alt="상단 그라데이션" width="100%" height="800px" />
      <img className="second" src="/asset/Main/02.png" alt="중단 밤하늘" width="100%" height="800px" />
      <img ref={star} className="third" src="/asset/Main/03.png" alt="중단 밤하늘의 별" width="100%" height="800px" />
      <img ref={firstPlanet} className="firstPlanet" src="/asset/Main/planet01.png" alt="행성1" />
      <img ref={secondPlanet} className="secondPlanet" src="/asset/Main/planet02.png" alt="행성2" />
      <img ref={thirdPlanet} className="thirdPlanet" src="/asset/Main/planet03.png" alt="행성3" />
      <img className="firstIndex" src="/asset/Main/index01.png" alt="목차1" width="100%" height="500px" />
      <img className="secondIndex" src="/asset/Main/index02.png" alt="목차2" width="100%" height="500px" />
      <img className="thirdIndex" src="/asset/Main/index03.png" alt="목차3" width="100%" height="500px" />
      <img className="gameBox" src="/asset/Main/gameBox.png" alt="게임기" width="50%" height="500px" />
      <img className="last" src="/asset/Main/08.png" alt="하단 그라데이션" width="100%" height="600px" />
    </TechIntroduceContainer>
  );
};

export default HomeTechIntroduce;
