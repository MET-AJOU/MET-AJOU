/* eslint-disable @typescript-eslint/no-unused-vars */
import BaseImages from "@Molecules/Main/BaseImages";
import FirstIndex from "@Molecules/Main/Body/기능소개/FirstIndex";
import SecondIndex from "@Molecules/Main/Body/기능소개/SecondIndex";
import ThirdIndex from "@Molecules/Main/Body/기능소개/ThirdIndex";
import HomeInfo from "@Molecules/Main/Body/접속유도/top";
import { MIDDLE_MAIN_IMAGE_STYLES, TOP_MAIN_IMAGE_STYLES } from "@Style/.";
import { Container } from "./styles";

const MainBody = () => {
  return (
    <Container>
      <BaseImages className="top" data={TOP_MAIN_IMAGE_STYLES} />
      <BaseImages className="middle" data={MIDDLE_MAIN_IMAGE_STYLES} />
      <HomeInfo />
      <FirstIndex />
      <SecondIndex />
      <ThirdIndex />
    </Container>
  );
};

export default MainBody;
