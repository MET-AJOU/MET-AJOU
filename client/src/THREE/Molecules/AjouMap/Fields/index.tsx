/* eslint-disable react/no-array-index-key */
import { FieldAssetSize, FieldSrc } from "@Constant/Three";
import FBXs from "@THREE/Atoms/Fbxs";

const Fields = () => {
  return (
    <>
      {new Array(FieldAssetSize).fill(1).map((_, idx) => (
        <FBXs key={`Field${idx}`} src={`${FieldSrc}/field_${idx + 1}.fbx`} />
      ))}
    </>
  );
};

export default Fields;
