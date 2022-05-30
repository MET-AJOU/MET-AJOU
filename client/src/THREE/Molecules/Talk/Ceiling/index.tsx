/* eslint-disable react/no-array-index-key */
import { CEILING_ASSET_SIZE, TALK_ASSET_SIZE, CEILING_SRC } from "@Constant/Three/Talk";
import FBXs from "@THREE/Atoms/Fbxs";

const Ceiling = () => {
  return (
    <>
      {new Array(CEILING_ASSET_SIZE).fill(1).map((_, idx) => (
        <FBXs size={TALK_ASSET_SIZE} key={`ceilings${idx}`} src={`${CEILING_SRC}`} />
      ))}
    </>
  );
};

export default Ceiling;
