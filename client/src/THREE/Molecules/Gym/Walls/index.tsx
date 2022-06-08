import { WALL_ASSET_SIZE, WALL_SRC, GYM_ASSET_SIZE } from "@Constant/Three/Gym";
import FBX from "@THREE/Atoms/ModelComponent/FBX";

export const Walls = () => <FBX assetSize={WALL_ASSET_SIZE} keyName="walls" srcName={`${WALL_SRC}/Wall_`} size={GYM_ASSET_SIZE} />;
