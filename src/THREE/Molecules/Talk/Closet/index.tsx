import { TALK_ASSET_SIZE, CLOSET_SRC } from "@Constant/Three/Talk";
import { FBXs } from "@THREE/Atoms/Fbxs";

export const Closet = () => <FBXs size={TALK_ASSET_SIZE} key="closet" src={`${CLOSET_SRC}`} />;
