import { MatAssetSize, MatSrc } from "@Constant/Three";
import FBX from "@THREE/Atoms/ModelComponent/FBX";

export const Mat = () => <FBX assetSize={MatAssetSize} keyName="Mat" srcName={`${MatSrc}/mat_`} />;
