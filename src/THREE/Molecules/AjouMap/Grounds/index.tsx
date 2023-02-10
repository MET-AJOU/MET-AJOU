import { GroundAssetSize, GroundsSrc } from "@Constant/Three";
import FBX from "@THREE/Atoms/ModelComponent/FBX";

export const Grounds = () => <FBX assetSize={GroundAssetSize} keyName="grounds" srcName={`${GroundsSrc}/ground_`} />;
