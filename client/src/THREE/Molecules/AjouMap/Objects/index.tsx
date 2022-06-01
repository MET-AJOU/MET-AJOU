/* eslint-disable react/no-array-index-key */
import { ObjectAssetSize, ObjectSrc } from "@Constant/Three";
import { FBXs } from "@THREE/Atoms/Fbxs";

const Objects = () => {
  return (
    <>
      {new Array(ObjectAssetSize).fill(1).map((_, idx) => (
        <FBXs key={`Objects${idx}`} src={`${ObjectSrc}/Object_${idx + 1}.fbx`} />
      ))}
    </>
  );
};

export default Objects;
