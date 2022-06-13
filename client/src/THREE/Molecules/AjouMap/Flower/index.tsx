import { FlowerAssetSize, FlowerSrc } from "@Constant/Three";
import FBX from "@THREE/Atoms/ModelComponent/FBX";

export const Flowers = () => <FBX assetSize={FlowerAssetSize} keyName="flower" srcName={`${FlowerSrc}/flower_`} />;
