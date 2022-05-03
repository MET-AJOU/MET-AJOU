import AboutTitle from "@Atoms/AboutTitle";
import AboutTeamInfo from "@Molecules/About/TeamInfo";
import { useInView } from "react-hook-inview";
import { MiddleWave2Style } from "../Waves/style";
import { Container } from "./styles";

const Moons = ["moon1", "moon2", "moon3", "moon4", "moon5", "moon6"];

const AboutWho = () => {
  const [ref, isVisible] = useInView();

  return (
    <Container ref={ref}>
      <img src="/asset/About/middle_2.svg" className={`${isVisible ? "wave_down" : "wave_up"}`} style={MiddleWave2Style} alt="middlewave2" />
      <AboutTitle>Who we are</AboutTitle>
      <AboutTeamInfo />
      {Moons.map((moonName) => (
        <img src={`/asset/About/${moonName}.svg`} className={`${isVisible ? moonName : ""}`} alt={`${moonName}`} />
      ))}
    </Container>
  );
};

export default AboutWho;
