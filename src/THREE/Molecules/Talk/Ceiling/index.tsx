import { TALK_ASSET_SIZE, CEILING_SRC } from "@Constant/Three/Talk";
import { FBXs } from "@THREE/Atoms/Fbxs";

export const Ceiling = () => <FBXs size={TALK_ASSET_SIZE} key="ceilings" src={`${CEILING_SRC}`} />;
