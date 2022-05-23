/* eslint-disable react/no-array-index-key */
import { SideWalkAssetSize, SideWalkSrc } from "@Constant/Three";
import FBXs from "@THREE/Atoms/Fbxs";

const SideWalks = () => {
  return (
    <>
      {new Array(SideWalkAssetSize).fill(1).map((_, idx) => (
        <FBXs key={`roads${idx}`} src={`${SideWalkSrc}/sidewalk_${String(idx + 1).padStart(2, "0")}.fbx`} />
      ))}
    </>
  );
};

export default SideWalks;
