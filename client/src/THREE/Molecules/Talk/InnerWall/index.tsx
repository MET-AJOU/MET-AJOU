/* eslint-disable react/no-array-index-key */

import { INNERWALL_ASSET_SIZE, TALK_ASSET_SIZE, INNERWALL_SRC } from "@Constant/Three/Talk";
import FBXs from "@THREE/Atoms/Fbxs";

const InnerWall = () => {
  return (
    <>
      {new Array(INNERWALL_ASSET_SIZE).fill(1).map((_, idx) => (
        <FBXs size={TALK_ASSET_SIZE} key={`innerWall${idx}`} src={INNERWALL_SRC} />
      ))}
    </>
  );
};

export default InnerWall;
