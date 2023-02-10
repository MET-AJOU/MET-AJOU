import { TableAssetSize, TableSrc } from "@Constant/Three";
import FBX from "@THREE/Atoms/ModelComponent/FBX";

export const Table = () => <FBX assetSize={TableAssetSize} keyName="TableSrc" srcName={`${TableSrc}/table_`} />;
