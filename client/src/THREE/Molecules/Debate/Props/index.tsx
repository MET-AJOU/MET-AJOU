/* eslint-disable react/no-array-index-key */
import { PropsAssetSize, PropsSrc } from "@Constant/Three";
import FBXs from "@THREE/Atoms/Fbxs";

const Props = () => {
  return (
    <>
      {new Array(PropsAssetSize).fill(1).map((_, idx) => (
        <FBXs key={`props${idx}`} src={`${PropsSrc}/Prop_${idx + 1}.fbx`} />
      ))}
    </>
  );
};

export default Props;