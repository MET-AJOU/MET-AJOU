import { FLOOR_ASSET_SIZE, FLOOR_SRC, GYM_ASSET_SIZE } from "@Constant/Three/Gym";
import FBX from "@THREE/Atoms/ModelComponent/FBX";

export const Floors = () => <FBX assetSize={FLOOR_ASSET_SIZE} keyName="floors" srcName={`${FLOOR_SRC}/Floor_`} size={GYM_ASSET_SIZE} />;
