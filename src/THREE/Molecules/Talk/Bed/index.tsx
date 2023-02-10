import { TALK_ASSET_SIZE, BED_SRC } from "@Constant/Three/Talk";
import { FBXs } from "@THREE/Atoms/Fbxs";

export const Bed = () => <FBXs size={TALK_ASSET_SIZE} key="bed" src={`${BED_SRC}`} />;
