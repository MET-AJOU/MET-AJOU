/* eslint-disable react/no-array-index-key */
import { FloorAssetSize, FloorSrc } from "@Constant/Three";
import FBXs from "@THREE/Atoms/Fbxs";

const Floors = () => {
  return (
    <>
      {new Array(FloorAssetSize).fill(1).map((_, idx) => (
        <FBXs key={`floors${idx}`} src={`${FloorSrc}/Floor_${idx + 1}.fbx`} />
      ))}
    </>
  );
};

export default Floors;
