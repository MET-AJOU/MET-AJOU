/* eslint-disable react/no-array-index-key */
import { RoadsAssetSize, RoadsSrc } from "@Constant/Three";
import FBXs from "@THREE/Atoms/Fbxs";

const Roads = () => {
  return (
    <>
      {new Array(RoadsAssetSize).fill(1).map((_, idx) => (
        <FBXs key={`roads${idx}`} src={`${RoadsSrc}/road_${String(idx + 1).padStart(2, "0")}.fbx`} />
      ))}
    </>
  );
};

export default Roads;
