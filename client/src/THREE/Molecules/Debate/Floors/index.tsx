import { FloorAssetSize, FloorSrc, DEBATE_ASSET_SIZE } from "@Constant/Three";
import FBX from "@THREE/Atoms/ModelComponent/FBX";

export const Floors = () => <FBX assetSize={FloorAssetSize} keyName="floors" srcName={`${FloorSrc}/Floor_`} size={DEBATE_ASSET_SIZE} />;
