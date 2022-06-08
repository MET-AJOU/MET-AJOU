import { WallsSrc, DEBATE_ASSET_SIZE } from "@Constant/Three";
import { FBXs } from "@THREE/Atoms/Fbxs";

export const Walls = () => <FBXs size={DEBATE_ASSET_SIZE} src={`${WallsSrc}/Wall.fbx`} />;
