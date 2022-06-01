/* eslint-disable react/no-array-index-key */

import { FLOOR_ASSET_SIZE, TALK_ASSET_SIZE, FLOOR_SRC } from "@Constant/Three/Talk";
import { FBXs } from "@THREE/Atoms/Fbxs";

const Floor = () => {
  return (
    <>
      {new Array(FLOOR_ASSET_SIZE).fill(1).map((_, idx) => (
        <FBXs size={TALK_ASSET_SIZE} key={`floor${idx}`} src={FLOOR_SRC} />
      ))}
    </>
  );
};

export default Floor;
