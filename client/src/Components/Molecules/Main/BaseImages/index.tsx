/* eslint-disable @typescript-eslint/no-unused-vars */
import { useInView } from "react-hook-inview";

import { BaseImageProps } from "@Type/.";
import { Container, BaseImage } from "./styles";

const BaseImages = ({ data }: { data: BaseImageProps[] }) => {
  const [ref, isVisible] = useInView();
  return (
    <Container ref={ref}>
      {data.map((ImageStyle: BaseImageProps, idx) => (
        <BaseImage className={isVisible ? "down" : "up"} key={`baseimage +${ImageStyle.url}`} alt={`baseimage${idx}`} src={ImageStyle.url} {...{ ...ImageStyle, idx }} />
      ))}
    </Container>
  );
};

export default BaseImages;
