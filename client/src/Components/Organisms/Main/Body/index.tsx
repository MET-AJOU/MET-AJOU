/* eslint-disable @typescript-eslint/no-unused-vars */
import BaseImages from "@Molecules/Main/BaseImages";
import HomeTutorial from "@Molecules/Main/Body/tutorial";
import HomeTechIntroduce from "@Molecules/Main/Body/기능소개";
import FirstIndex from "@Molecules/Main/Body/기능소개/FirstIndex";
import SecondIndex from "@Molecules/Main/Body/기능소개/SecondIndex";
import ThirdIndex from "@Molecules/Main/Body/기능소개/ThirdIndex";
import HomeBottomInfo from "@Molecules/Main/Body/접속유도/bottom";
import HomeInfo from "@Molecules/Main/Body/접속유도/top";
import { MIDDLE_MAIN_IMAGE_STYLES, TOP_MAIN_IMAGE_STYLES } from "@Style/.";

import { TechIntroduceContainer } from "./styles";

const MainBody = () => {
  return (
    <>
      <BaseImages className="top" data={TOP_MAIN_IMAGE_STYLES} />
      <BaseImages className="middle" data={MIDDLE_MAIN_IMAGE_STYLES} />
      <HomeInfo />
      <FirstIndex />
      <SecondIndex />
      <ThirdIndex />
      {/* <TechIntroduceContainer>
        <HomeTechIntroduce />
        <HomeTutorial />
        <HomeBottomInfo />
      </TechIntroduceContainer> */}
    </>
  );
};

export default MainBody;
