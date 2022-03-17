import HomeTutorial from "@Molecules/Main/Body/tutorial";
import HomeTechIntroduce from "@Molecules/Main/Body/기능소개";
import HomeBottomInfo from "@Molecules/Main/Body/접속유도/bottom";
import HomeInfo from "@Molecules/Main/Body/접속유도/top";

const MainBody = () => {
  return (
    <>
      <HomeInfo />
      <HomeTechIntroduce />
      <HomeTutorial />
      <HomeBottomInfo />
    </>
  );
};

export default MainBody;
