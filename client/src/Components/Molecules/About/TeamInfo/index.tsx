import { LeftArrow, RightArrow } from "@Atoms/Svgs";

import { useState } from "react";
import { Container, TeamImg } from "./styles";

const AboutTeamInfo = () => {
  const [idx, setIdx] = useState(1);
  const handleRightArrow = () => idx !== 3 && setIdx((prev: number) => prev + 1);
  const handleLeftArrow = () => idx !== 1 && setIdx((prev: number) => prev - 1);

  return (
    <Container>
      <LeftArrow onClick={handleLeftArrow} />
      <TeamImg src={`/asset/About/team_info_${idx}.svg`} alt={`team_info_${idx}`} />
      <RightArrow onClick={handleRightArrow} />
    </Container>
  );
};

export default AboutTeamInfo;
