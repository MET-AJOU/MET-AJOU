/* eslint-disable react/no-array-index-key */

import { TABLE_ASSET_SIZE, TALK_ASSET_SIZE, TABLE_SRC } from "@Constant/Three/Talk";
import { FBXs } from "@THREE/Atoms/Fbxs";

const Table = () => {
  return (
    <>
      {new Array(TABLE_ASSET_SIZE).fill(1).map((_, idx) => (
        <FBXs size={TALK_ASSET_SIZE} key={`ceilings${idx}`} src={TABLE_SRC} />
      ))}
    </>
  );
};

export default Table;
