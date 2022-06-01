/* eslint-disable react/no-array-index-key */
import { WALL_ASSET_SIZE, WALL_SRC, GYM_ASSET_SIZE } from "@Constant/Three/Gym";
import { FBXs } from "@THREE/Atoms/Fbxs";

const Walls = () => {
  return (
    <>
      {new Array(WALL_ASSET_SIZE).fill(1).map((_, idx) => (
        <FBXs size={GYM_ASSET_SIZE} key={`walls${idx}`} src={`${WALL_SRC}/Wall_${idx + 1}.fbx`} />
      ))}
    </>
  );
};

export default Walls;
