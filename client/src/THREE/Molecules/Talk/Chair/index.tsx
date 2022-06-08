import { TALK_ASSET_SIZE, CHAIR_SRC } from "@Constant/Three/Talk";
import { FBXs } from "@THREE/Atoms/Fbxs";

export const Chair = () => <FBXs size={TALK_ASSET_SIZE} key="chair" src={`${CHAIR_SRC}`} />;
