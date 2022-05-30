/* eslint-disable react/no-array-index-key */

import { CLOSET_ASSET_SIZE, TALK_ASSET_SIZE, CLOSET_SRC } from "@Constant/Three/Talk";
import FBXs from "@THREE/Atoms/Fbxs";

const Closet = () => {
  return (
    <>
      {new Array(CLOSET_ASSET_SIZE).fill(1).map((_, idx) => (
        <FBXs size={TALK_ASSET_SIZE} key={`closet${idx}`} src={`${CLOSET_SRC}`} />
      ))}
    </>
  );
};

export default Closet;
