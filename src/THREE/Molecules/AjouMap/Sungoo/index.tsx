import { SungooAssetSize, SungooSrc } from "@Constant/Three";
import FBX from "@THREE/Atoms/ModelComponent/FBX";

export const Sungoos = () => <FBX assetSize={SungooAssetSize} keyName="sungoo" srcName={`${SungooSrc}/sungoo_`} />;
