/* eslint-disable react/no-array-index-key */
import { TreeAssetSize, TreeSrc } from "@Constant/Three";
import { BlockFbx } from "@THREE/Atoms/Fbxs";

const Trees = () => {
  return (
    <>
      {new Array(TreeAssetSize).fill(1).map((_, idx) => (
        <BlockFbx key={`${idx}TreeSrc`} src={`${TreeSrc}/tree_${String(idx + 1).padStart(3, "0")}.fbx`} />
      ))}
    </>
  );
};

export default Trees;
