/* eslint-disable react/no-array-index-key */
import { TreeAssetSize, TreeSrc } from "@Constant/Three";
import Ground from "@THREE/Atoms/Ground";

const StreetLamps = () => {
  const blocking = () => console.log("hit StreetLamps");
  return (
    <>
      {new Array(TreeAssetSize).fill(1).map((_, idx) => (
        <Ground key={idx} src={`${TreeSrc}/Tree_${idx + 1}.gltf`} 키="tree_1" 블락함수={blocking} />
      ))}
    </>
  );
};

export default StreetLamps;
