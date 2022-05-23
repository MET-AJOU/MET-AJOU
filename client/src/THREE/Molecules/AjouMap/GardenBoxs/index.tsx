/* eslint-disable react/no-array-index-key */
import { GardenBoxAssetSize, GardenBoxSrc } from "@Constant/Three";
import FBXs from "@THREE/Atoms/Fbxs";

const GardenBoxs = () => {
  return (
    <>
      {new Array(GardenBoxAssetSize).fill(1).map((_, idx) => (
        <FBXs key={`GardenBox${idx}`} src={`${GardenBoxSrc}/gardenbox_${idx + 1}.fbx`} />
      ))}
    </>
  );
};

export default GardenBoxs;
