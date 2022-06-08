import { GardenBoxAssetSize, GardenBoxSrc } from "@Constant/Three";
import FBX from "@THREE/Atoms/ModelComponent/FBX";

export const GardenBoxs = () => <FBX assetSize={GardenBoxAssetSize} keyName="GardenBox" srcName={`${GardenBoxSrc}/gardenbox_`} />;
