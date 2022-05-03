import { ValueDataType } from "@Type/.";
import { Container, Img, Title, TextContainer, Text } from "./styles";

const ValueCard = ({ data: { src, title, text }, className }: { data: ValueDataType; className: string }) => {
  return (
    <Container className={className}>
      <Img src={src} alt="value_logo" />
      <Title>{title}</Title>
      <TextContainer>
        <Text>{text[0]}</Text>
        <Text>{text[1]}</Text>
        <Text>{text[2]}</Text>
      </TextContainer>
    </Container>
  );
};

export default ValueCard;
