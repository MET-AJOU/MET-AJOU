/* eslint-disable react/no-array-index-key */
import { GardenStairAssetSize, GardenStairSrc } from "@Constant/Three";
import FBXs from "@THREE/Atoms/Fbxs";

const GardenStairs = () => {
  return (
    <>
      {new Array(GardenStairAssetSize).fill(1).map((_, idx) => (
        <FBXs key={`GardenStairs${idx}`} src={`${GardenStairSrc}/garden_stair_${idx + 1}.fbx`} />
      ))}
    </>
  );
};

export default GardenStairs;
