import { LoadingImageSrc, LoadingImageSize } from "@Constant/.";
import { Container } from "./styles";

const LoadingTemplate = () => {
  return <Container url={getRandomUrl()} />;
};

const getRandomUrl = () => `${LoadingImageSrc}loading${Math.floor(Math.random() * Number(LoadingImageSize)) + 1}.png`;

export default LoadingTemplate;
