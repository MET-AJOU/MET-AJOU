/* eslint-disable react/no-array-index-key */
import { FLOOR_ASSET_SIZE, FLOOR_SRC, GYM_ASSET_SIZE } from "@Constant/Three/Gym";
import { FBXs } from "@THREE/Atoms/Fbxs";

const Floors = () => {
  return (
    <>
      {new Array(FLOOR_ASSET_SIZE).fill(1).map((_, idx) => (
        <FBXs size={GYM_ASSET_SIZE} key={`floors${idx}`} src={`${FLOOR_SRC}/Floor_${idx + 1}.fbx`} />
      ))}
    </>
  );
};

export default Floors;
