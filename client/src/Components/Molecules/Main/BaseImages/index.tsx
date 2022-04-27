import { BaseImageProps } from "@Type/.";
import { BaseImage } from "./styles";

const BaseImages = ({ data }: { data: BaseImageProps[] }) => {
  return (
    <>
      {data.map((ImageStyle: BaseImageProps, idx) => (
        <BaseImage key={`baseimage +${ImageStyle.url}`} alt={`baseimage${idx}`} src={ImageStyle.url} {...{ ...ImageStyle, idx }} />
      ))}
    </>
  );
};

export default BaseImages;
