/* eslint-disable react/no-array-index-key */
import { CURTAIN_ASSET_SIZE, CURTAIN_SRC, GYM_ASSET_SIZE } from "@Constant/Three/Gym";
import FBXs from "@THREE/Atoms/Fbxs";

const Curtains = () => {
  return (
    <>
      {new Array(CURTAIN_ASSET_SIZE).fill(1).map((_, idx) => (
        <FBXs size={GYM_ASSET_SIZE} key={`curtains${idx}`} src={`${CURTAIN_SRC}/Curtain_${idx + 1}.fbx`} />
      ))}
    </>
  );
};

export default Curtains;
