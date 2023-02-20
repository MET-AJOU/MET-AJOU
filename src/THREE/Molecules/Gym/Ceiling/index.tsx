import { CEILING_ASSET_SIZE, CEILING_SRC, GYM_ASSET_SIZE } from "@Constant/Three/Gym";
import FBX from "@THREE/Atoms/ModelComponent/FBX";

export const Ceilings = () => <FBX assetSize={CEILING_ASSET_SIZE} keyName="ceilings" srcName={`${CEILING_SRC}/Ceiling_`} size={GYM_ASSET_SIZE} />;
