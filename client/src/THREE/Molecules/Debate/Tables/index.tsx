import { TabelAssetSize, TablesSrc, DEBATE_ASSET_SIZE } from "@Constant/Three";
import FBX from "@THREE/Atoms/ModelComponent/FBX";

export const Tables = () => <FBX assetSize={TabelAssetSize} keyName="table" srcName={`${TablesSrc}/Table_`} size={DEBATE_ASSET_SIZE} />;
