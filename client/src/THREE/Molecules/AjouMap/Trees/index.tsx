import { TreeAssetSize, TreeSrc } from "@Constant/Three";
import FBX from "@THREE/Atoms/ModelComponent/FBX";

export const Trees = () => <FBX assetSize={TreeAssetSize} keyName="TreeSrc" srcName={`${TreeSrc}/tree_`} />;
