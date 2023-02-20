import { ChairAssetSize, ChairSrc, DEBATE_ASSET_SIZE } from "@Constant/Three";
import FBX from "@THREE/Atoms/ModelComponent/FBX";

export const Chairs = () => <FBX assetSize={ChairAssetSize} keyName="chairs" srcName={`${ChairSrc}/Chair_`} size={DEBATE_ASSET_SIZE} />;
