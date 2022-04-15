/* eslint-disable react/no-array-index-key */
import { TreeBaseAssetSize, TreeBaseSrc } from "@Constant/Three";
import Ground from "@THREE/Atoms/Ground";

const TreeBases = () => {
  const blocking = () => console.log("hit TreeBases");
  return (
    <>
      {new Array(TreeBaseAssetSize).fill(1).map((_, idx) => (
        <Ground key={idx} src={`${TreeBaseSrc}/Tree_Base_${idx + 1}.gltf`} 키="tree_base" 블락함수={blocking} />
      ))}
    </>
  );
};

export default TreeBases;
