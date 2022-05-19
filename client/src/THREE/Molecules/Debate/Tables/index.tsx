/* eslint-disable react/no-array-index-key */
import { TabelAssetSize, TablesSrc } from "@Constant/Three";
import FBXs from "@THREE/Atoms/Fbxs";

const Tables = () => {
  return (
    <>
      {new Array(TabelAssetSize).fill(1).map((_, idx) => (
        <FBXs key={`table${idx}`} src={`${TablesSrc}/Table_${idx + 1}.fbx`} />
      ))}
    </>
  );
};

export default Tables;
