import { useInView } from "react-hook-inview";

import { Container } from "./styles";

interface Props {
  Element: React.FC<React.SVGProps<SVGSVGElement>>;
  text: string[];
}
const InfoCard = ({ Element, text }: Props) => {
  const [ref, isVisible] = useInView();

  return (
    <Container ref={ref}>
      <Element className={isVisible ? "slide_up" : "slide_down"} />
      <p className={isVisible ? "slide_up" : "slide_down"}>{text[0]}</p>
      <p className={isVisible ? "slide_up" : "slide_down"}>{text[1]}</p>
    </Container>
  );
};

export default InfoCard;
