import { CURTAIN_ASSET_SIZE, CURTAIN_SRC, GYM_ASSET_SIZE } from "@Constant/Three/Gym";
import FBX from "@THREE/Atoms/ModelComponent/FBX";

export const Curtains = () => <FBX assetSize={CURTAIN_ASSET_SIZE} keyName="curtains" srcName={`${CURTAIN_SRC}/Curtain_`} size={GYM_ASSET_SIZE} />;
