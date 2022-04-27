import { TOP_MAIN_IMAGE_STYLES } from "@Style/.";
import { BaseImageProps } from "@Type/.";
import { BaseImage } from "./styles";

const BaseImages = () => {
  return (
    <>
      {TOP_MAIN_IMAGE_STYLES.map((ImageStyle: BaseImageProps, idx) => (
        <BaseImage key={`baseimage +${ImageStyle.url}`} alt={`baseimage${idx}`} src={ImageStyle.url} {...{ ...ImageStyle, idx }} />
      ))}
    </>
  );
};

export default BaseImages;
