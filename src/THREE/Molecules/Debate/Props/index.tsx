import { PropsAssetSize, PropsSrc, DEBATE_ASSET_SIZE } from "@Constant/Three";
import FBX from "@THREE/Atoms/ModelComponent/FBX";

export const Props = () => <FBX assetSize={PropsAssetSize} keyName="props" srcName={`${PropsSrc}/Prop_`} size={DEBATE_ASSET_SIZE} />;
