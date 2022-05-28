/* eslint-disable react/no-array-index-key */
import { STAIR_ASSET_SIZE, STAIR_SRC, GYM_ASSET_SIZE } from "@Constant/Three/Gym";
import FBXs from "@THREE/Atoms/Fbxs";

const Stairs = () => {
  return (
    <>
      {new Array(STAIR_ASSET_SIZE).fill(1).map((_, idx) => (
        <FBXs size={GYM_ASSET_SIZE} key={`stairs${idx}`} src={`${STAIR_SRC}/Stair_${idx + 1}.fbx`} />
      ))}
    </>
  );
};

export default Stairs;
