/* eslint-disable react/no-array-index-key */
import { TreeBaseAssetSize, TreeBaseFBXAssetStart, TreeBaseSrc } from "@Constant/Three";
import FBXs from "@THREE/Atoms/Fbxs";
import Ground from "@THREE/Atoms/Ground";

const TreeBases = () => {
  const blocking = () => console.log("hit TreeBases");
  return (
    <>
      {new Array(TreeBaseAssetSize).fill(1).map((_, idx) => {
        return idx < TreeBaseFBXAssetStart ? <Ground key={idx} src={`${TreeBaseSrc}/Tree_Base_${idx + 1}.gltf`} 키="tree_base" 블락함수={blocking} /> : <FBXs src={`${TreeBaseSrc}/Tree_Base_${idx + 1}.fbx`} />;
      })}
    </>
  );
};

export default TreeBases;
