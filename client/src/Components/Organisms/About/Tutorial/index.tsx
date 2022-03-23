import { GameContainer, Video } from "./styles";

const AboutTutorial = () => {
  return (
    <GameContainer>
      <Video autoPlay muted controls>
        <source src="https://www.youtube.com/embed/KBOG-L9Inlc" type="video/mp4" />
      </Video>
    </GameContainer>
  );
};
export default AboutTutorial;
