/* eslint-disable react/no-array-index-key */
import { GroundAssetSize, GroundsSrc } from "@Constant/Three";
import { FBXs } from "@THREE/Atoms/Fbxs";

const Grounds = () => {
  return (
    <>
      {new Array(GroundAssetSize).fill(1).map((_, idx) => (
        <FBXs key={`grounds${idx}`} src={`${GroundsSrc}/ground_${String(idx + 1).padStart(2, "0")}.fbx`} />
      ))}
    </>
  );
};

export default Grounds;
