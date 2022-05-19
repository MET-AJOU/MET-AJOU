/* eslint-disable react/no-array-index-key */
import { TreeAssetSize, TreeFBXAssetStart, TreeSrc } from "@Constant/Three";
import FBXs from "@THREE/Atoms/Fbxs";
import Ground from "@THREE/Atoms/Ground";

const Trees = () => {
  const blocking = () => console.log("hit StreetLamps");
  return (
    <>
      {new Array(TreeAssetSize).fill(1).map((_, idx) => {
        return idx < TreeFBXAssetStart - 1 ? <Ground key={idx} src={`${TreeSrc}/Tree_${idx + 1}.gltf`} 키="tree_1" 블락함수={blocking} /> : <FBXs key={`${idx}TreeSrc`} src={`${TreeSrc}/Tree_${String(idx + 1).padStart(3, "0")}.fbx`} />;
      })}
    </>
  );
};

export default Trees;
