import { BaseImageProps } from "@Type/.";
import { Container, BaseImage } from "./styles";

const BaseImages = ({ data, className }: { data: BaseImageProps[]; className: string }) => {
  const defaultIndex = className === "top" ? 5 : 0;
  return (
    <Container>
      {data.map((ImageStyle: BaseImageProps, idx) => (
        <BaseImage className={idx === 0 ? "none" : className} key={`baseimage +${ImageStyle.url}`} alt={`baseimage${idx}`} src={ImageStyle.url} {...{ ...ImageStyle, idx: defaultIndex + idx }} />
      ))}
    </Container>
  );
};

export default BaseImages;
