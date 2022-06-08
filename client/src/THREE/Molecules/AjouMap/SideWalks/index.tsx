import { SideWalkAssetSize, SideWalkSrc } from "@Constant/Three";
import FBX from "@THREE/Atoms/ModelComponent/FBX";

export const SideWalks = () => <FBX assetSize={SideWalkAssetSize} keyName="roads" srcName={`${SideWalkSrc}/sidewalk_`} />;
