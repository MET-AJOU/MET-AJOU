/* eslint-disable @typescript-eslint/no-unused-vars */
import Slider from "react-slick";

import { LeftArrow, RightArrow } from "@Atoms/Svgs";

import { Container, TeamImg } from "./styles";

const Setting = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  nextArrow: <RightArrow />,
  prevArrow: <LeftArrow />,
  speed: 700,
  dots: true,
};

const AboutTeamInfo = () => {
  return (
    <Container>
      <Slider {...Setting}>
        <TeamImg src="/asset/About/team_info_1.svg" alt="team_info_1" />
        <TeamImg src="/asset/About/team_info_2.svg" alt="team_info_2" />
        <TeamImg src="/asset/About/team_info_3.svg" alt="team_info_3" />
      </Slider>
    </Container>
  );
};

export default AboutTeamInfo;
