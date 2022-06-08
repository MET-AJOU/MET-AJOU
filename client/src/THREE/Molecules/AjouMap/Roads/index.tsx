import { RoadsAssetSize, RoadsSrc } from "@Constant/Three";
import FBX from "@THREE/Atoms/ModelComponent/FBX";

export const Roads = () => <FBX assetSize={RoadsAssetSize} keyName="roads" srcName={`${RoadsSrc}/road_`} />;
