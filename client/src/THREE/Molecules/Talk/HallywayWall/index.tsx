/* eslint-disable react/no-array-index-key */

import { HALLYWAYWALL_ASSET_SIZE, TALK_ASSET_SIZE, HALLYWAYWALL_SRC } from "@Constant/Three/Talk";
import FBXs from "@THREE/Atoms/Fbxs";

const HallywayWall = () => {
  return (
    <>
      {new Array(HALLYWAYWALL_ASSET_SIZE).fill(1).map((_, idx) => (
        <FBXs size={TALK_ASSET_SIZE} key={`hallyway${idx}`} src={HALLYWAYWALL_SRC} />
      ))}
    </>
  );
};

export default HallywayWall;
