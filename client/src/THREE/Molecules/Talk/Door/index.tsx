/* eslint-disable react/no-array-index-key */

import { DOOR_ASSET_SIZE, TALK_ASSET_SIZE, DOOR_SRC } from "@Constant/Three/Talk";
import FBXs from "@THREE/Atoms/Fbxs";

const Door = () => {
  return (
    <>
      {new Array(DOOR_ASSET_SIZE).fill(1).map((_, idx) => (
        <FBXs size={TALK_ASSET_SIZE} key={`door${idx}`} src={DOOR_SRC} />
      ))}
    </>
  );
};

export default Door;
