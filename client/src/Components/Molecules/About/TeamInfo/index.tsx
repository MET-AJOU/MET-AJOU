import { useState } from "react";

import { Circle, LeftArrow, RightArrow } from "@Atoms/Svgs";
import { TEAM_INFO_SIZE } from "@Constant/.";

import { CircleContainer, Container, TeamImg } from "./styles";

const AboutTeamInfo = () => {
  const [idx, setIdx] = useState(1);
  const handleRightArrow = () => idx !== TEAM_INFO_SIZE && setIdx((prev: number) => prev + 1);
  const handleLeftArrow = () => idx !== 1 && setIdx((prev: number) => prev - 1);

  return (
    <>
      <Container>
        <LeftArrow className="arrow" onClick={handleLeftArrow} />
        <TeamImg src={`/asset/About/team_info_${idx}.svg`} alt={`team_info_${idx}`} />
        <RightArrow className="arrow" onClick={handleRightArrow} />
      </Container>
      <CircleContainer>
        {new Array(TEAM_INFO_SIZE).fill(0).map((_, index: number) => (
          <Circle fill={idx === index + 1 ? "#6096FD" : "#C4C4C4"} />
        ))}
      </CircleContainer>
    </>
  );
};

export default AboutTeamInfo;
