/* eslint-disable react/no-array-index-key */
import { HillsAssetSize, HillsSrc } from "@Constant/Three";
import Ground from "@THREE/Atoms/Ground";

const Hills = () => {
  return (
    <>
      {new Array(HillsAssetSize).fill(1).map((_, idx) => (
        <Ground key={idx} src={`${HillsSrc}/hill_${idx + 1}.gltf`} 키="hill" />
      ))}
    </>
  );
};

export default Hills;
