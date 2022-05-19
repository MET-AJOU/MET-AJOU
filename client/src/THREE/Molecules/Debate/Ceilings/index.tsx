/* eslint-disable react/no-array-index-key */
import { CeilingAssetSize, CeilingSrc } from "@Constant/Three";
import FBXs from "@THREE/Atoms/Fbxs";

const Ceilings = () => {
  return (
    <>
      {new Array(CeilingAssetSize).fill(1).map((_, idx) => (
        <FBXs key={`ceilings${idx}`} src={`${CeilingSrc}/Ceiling_${idx + 1}.fbx`} />
      ))}
    </>
  );
};

export default Ceilings;
