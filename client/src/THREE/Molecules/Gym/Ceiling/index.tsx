/* eslint-disable react/no-array-index-key */
import { CEILING_ASSET_SIZE, CEILING_SRC, GYM_ASSET_SIZE } from "@Constant/Three/Gym";
import FBXs from "@THREE/Atoms/Fbxs";

const Ceilings = () => {
  return (
    <>
      {new Array(CEILING_ASSET_SIZE).fill(1).map((_, idx) => (
        <FBXs size={GYM_ASSET_SIZE} key={`ceilings${idx}`} src={`${CEILING_SRC}/Ceiling_${idx + 1}.fbx`} />
      ))}
    </>
  );
};

export default Ceilings;
