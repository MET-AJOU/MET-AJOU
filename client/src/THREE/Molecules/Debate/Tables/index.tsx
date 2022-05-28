/* eslint-disable react/no-array-index-key */
import { TabelAssetSize, TablesSrc, DEBATE_ASSET_SIZE } from "@Constant/Three";
import FBXs from "@THREE/Atoms/Fbxs";

const Tables = () => {
  return (
    <>
      {new Array(TabelAssetSize).fill(1).map((_, idx) => (
        <FBXs size={DEBATE_ASSET_SIZE} key={`table${idx}`} src={`${TablesSrc}/Table_${idx + 1}.fbx`} />
      ))}
    </>
  );
};

export default Tables;
