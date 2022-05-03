import AboutWaves from "@Organisms/About/Waves";
import AboutInfo from "@Organisms/About/Info";
import MainFooter from "@Organisms/Main/Footer";
import MainHeader from "@Organisms/Main/Header";
import AboutStory from "@Organisms/About/Story";
import AboutValues from "@Organisms/About/Values";
import AboutWork from "@Organisms/About/Work";
import AboutWho from "@Organisms/About/Who";
import AboutMeet from "@Organisms/About/Meet";
import BottomWaves from "@Molecules/BottomWaves";
import { AboutTemplateContainer } from "./styles";

const AboutTemplate = () => {
  return (
    <AboutTemplateContainer>
      <MainHeader />
      <AboutWaves />
      <AboutInfo />
      <AboutStory />
      <AboutValues />
      <AboutWork />
      <AboutWho />
      <AboutMeet />
      <MainFooter />
      <BottomWaves style={{ marginTop: "20vh" }} />
    </AboutTemplateContainer>
  );
};

export default AboutTemplate;
