/* eslint-disable react/no-array-index-key */

import { CHAIR_ASSET_SIZE, TALK_ASSET_SIZE, CHAIR_SRC } from "@Constant/Three/Talk";
import FBXs from "@THREE/Atoms/Fbxs";

const Chair = () => {
  return (
    <>
      {new Array(CHAIR_ASSET_SIZE).fill(1).map((_, idx) => (
        <FBXs size={TALK_ASSET_SIZE} key={`chair${idx}`} src={`${CHAIR_SRC}`} />
      ))}
    </>
  );
};

export default Chair;
