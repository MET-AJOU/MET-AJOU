/* eslint-disable react/no-array-index-key */
import { BenchAssetSize, BenchSrc } from "@Constant/Three";
import FBXs from "@THREE/Atoms/Fbxs";

const Benches = () => {
  return (
    <>
      {new Array(BenchAssetSize).fill(1).map((_, idx) => (
        <FBXs key={`benches${idx}`} src={`${BenchSrc}/bench_${String(idx + 1).padStart(2, "0")}.fbx`} />
      ))}
    </>
  );
};

export default Benches;
