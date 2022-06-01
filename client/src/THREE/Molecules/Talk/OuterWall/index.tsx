/* eslint-disable react/no-array-index-key */

import { OUTERWALL_ASSET_SIZE, TALK_ASSET_SIZE, OUTERWALL_SRC } from "@Constant/Three/Talk";
import { FBXs } from "@THREE/Atoms/Fbxs";

const OuterWall = () => {
  return (
    <>
      {new Array(OUTERWALL_ASSET_SIZE).fill(1).map((_, idx) => (
        <FBXs size={TALK_ASSET_SIZE} key={`ceilings${idx}`} src={OUTERWALL_SRC} />
      ))}
    </>
  );
};

export default OuterWall;
