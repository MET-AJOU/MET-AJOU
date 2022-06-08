import { BenchAssetSize, BenchSrc } from "@Constant/Three";
import FBX from "@THREE/Atoms/ModelComponent/FBX";

export const Benches = () => <FBX assetSize={BenchAssetSize} keyName="benches" srcName={`${BenchSrc}/bench_`} />;
