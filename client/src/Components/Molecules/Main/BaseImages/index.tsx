/* eslint-disable @typescript-eslint/no-unused-vars */
import { useInView } from "react-hook-inview";

import { BaseImageProps } from "@Type/.";
import { BaseImage } from "./styles";

const BaseImages = ({ data }: { data: BaseImageProps[] }) => {
  const [ref, isVisible] = useInView();
  return (
    <div ref={ref}>
      {data.map((ImageStyle: BaseImageProps, idx) => (
        <BaseImage className={isVisible ? "down" : "up"} key={`baseimage +${ImageStyle.url}`} alt={`baseimage${idx}`} src={ImageStyle.url} {...{ ...ImageStyle, idx }} />
      ))}
    </div>
  );
};

export default BaseImages;
