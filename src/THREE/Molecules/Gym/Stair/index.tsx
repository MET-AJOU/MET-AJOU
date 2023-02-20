import { STAIR_ASSET_SIZE, STAIR_SRC, GYM_ASSET_SIZE } from "@Constant/Three/Gym";
import FBX from "@THREE/Atoms/ModelComponent/FBX";

export const Stairs = () => <FBX assetSize={STAIR_ASSET_SIZE} keyName="stairs" srcName={`${STAIR_SRC}/Stair_`} size={GYM_ASSET_SIZE} />;
