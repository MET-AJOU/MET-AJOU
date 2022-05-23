/* eslint-disable react/no-array-index-key */
import { TreeAssetSize, TreeSrc } from "@Constant/Three";
import FBXs from "@THREE/Atoms/Fbxs";

const Trees = () => {
  return (
    <>
      {new Array(TreeAssetSize).fill(1).map((_, idx) => (
        <FBXs key={`${idx}TreeSrc`} src={`${TreeSrc}/Tree_${String(idx + 1).padStart(3, "0")}.fbx`} />
      ))}
    </>
  );
};

export default Trees;
