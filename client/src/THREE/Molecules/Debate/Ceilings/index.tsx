import { CeilingAssetSize, CeilingSrc, DEBATE_ASSET_SIZE } from "@Constant/Three";
import FBX from "@THREE/Atoms/ModelComponent/FBX";

export const Ceilings = () => <FBX assetSize={CeilingAssetSize} keyName="ceilings" srcName={`${CeilingSrc}/Ceiling_`} size={DEBATE_ASSET_SIZE} />;
