import { RoadsAssetSize, RoadsSrc } from "@Constant/Three";
import Road from "@THREE/Atoms/Road";

const Roads = () => {
  return (
    <>
      {new Array(RoadsAssetSize).fill(1).map((_, idx) => (
        <Road position={[0, 2, 0]} src={`${RoadsSrc}/road_${idx + 1}.gltf`} />
      ))}
    </>
  );
};

export default Roads;
