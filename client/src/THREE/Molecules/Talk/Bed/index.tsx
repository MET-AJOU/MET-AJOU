/* eslint-disable react/no-array-index-key */

import { BED_ASSET_SIZE, TALK_ASSET_SIZE, BED_SRC } from "@Constant/Three/Talk";
import FBXs from "@THREE/Atoms/Fbxs";

const Bed = () => {
  return (
    <>
      {new Array(BED_ASSET_SIZE).fill(1).map((_, idx) => (
        <FBXs size={TALK_ASSET_SIZE} key={`bed${idx}`} src={`${BED_SRC}`} />
      ))}
    </>
  );
};

export default Bed;
