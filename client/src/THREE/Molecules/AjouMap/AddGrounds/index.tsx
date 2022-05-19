/* eslint-disable react/no-array-index-key */
import { AddGroundAssetSize, AddGroundSrc } from "@Constant/Three";
import FBXs from "@THREE/Atoms/Fbxs";

const AddGrounds = () => {
  return (
    <>
      {new Array(AddGroundAssetSize).fill(1).map((_, idx) => (
        <FBXs key={`addGrounds${idx}`} src={`${AddGroundSrc}/add_ground_${idx + 1}.fbx`} />
      ))}
    </>
  );
};

export default AddGrounds;
