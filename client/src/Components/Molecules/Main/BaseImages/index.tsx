/* eslint-disable @typescript-eslint/no-unused-vars */
import { useInView } from "react-hook-inview";

import { BaseImageProps } from "@Type/.";
import { Container, BaseImage } from "./styles";

const BaseImages = ({ data, className }: { data: BaseImageProps[]; className: string }) => {
  const [ref, isVisible] = useInView();
  const defaultIndex = className === "top" ? 5 : 0;
  return (
    <Container ref={ref}>
      {data.map((ImageStyle: BaseImageProps, idx) => (
        <BaseImage className={idx === 0 ? "none" : className} key={`baseimage +${ImageStyle.url}`} alt={`baseimage${idx}`} src={ImageStyle.url} {...{ ...ImageStyle, idx: defaultIndex + idx }} />
      ))}
    </Container>
  );
};

export default BaseImages;
