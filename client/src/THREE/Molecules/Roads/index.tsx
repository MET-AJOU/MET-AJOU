import { RoadsAssetSize, RoadsSrc } from "@Constant/Three";
import Ground from "@THREE/Atoms/Ground";

const Roads = () => {
  return (
    <>
      {new Array(RoadsAssetSize).fill(1).map((_, idx) => (
        <Ground src={`${RoadsSrc}/road_${idx + 1}.gltf`} 키="road" />
      ))}
    </>
  );
};

export default Roads;
