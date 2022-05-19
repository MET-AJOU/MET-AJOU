/* eslint-disable react/no-array-index-key */
import { ChairAssetSize, ChairSrc } from "@Constant/Three";
import FBXs from "@THREE/Atoms/Fbxs";

const Chairs = () => {
  return (
    <>
      {new Array(ChairAssetSize).fill(1).map((_, idx) => (
        <FBXs key={`chairs${idx}`} src={`${ChairSrc}/Chair_${idx + 1}.fbx`} />
      ))}
    </>
  );
};

export default Chairs;
