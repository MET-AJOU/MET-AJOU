import { StreetLampAssetSize, StreetLampSrc } from "@Constant/Three";
import FBX from "@THREE/Atoms/ModelComponent/FBX";

export const StreetLamps = () => <FBX assetSize={StreetLampAssetSize} keyName="streetlamp_" srcName={`${StreetLampSrc}/streetamp_`} />;
