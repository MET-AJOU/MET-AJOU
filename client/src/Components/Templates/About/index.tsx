import AboutInfo from "@Organisms/About/Info";
import AboutSlogun from "@Organisms/About/Slogun";
import AboutStory from "@Organisms/About/Story";
import AboutTutorial from "@Organisms/About/Tutorial";
import AboutValues from "@Organisms/About/Values";
import AboutWork from "@Organisms/About/Work";
import MainFooter from "@Organisms/Main/Footer";
import MainHeader from "@Organisms/Main/Header";

const AboutTemplate = () => {
  return (
    <>
      <MainHeader />
      <AboutTutorial />
      <AboutStory />
      <AboutValues />
      <AboutWork />
      <AboutInfo />
      <AboutSlogun />
      <MainFooter />
    </>
  );
};

export default AboutTemplate;
