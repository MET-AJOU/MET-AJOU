import { BuildingAssetSrc } from "@Constant/Three";
import Building from "@THREE/Atoms/Building";

const Buildings = () => {
  // 가로 x 높이 y 세로 z
  return (
    <>
      {BuildingAssetSrc.map((src: string) => (
        <Building key={`Buidings${src}`} src={src} 블락함수={undefined} />
      ))}
    </>
  );
};

export default Buildings;
