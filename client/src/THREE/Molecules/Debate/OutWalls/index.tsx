import { OutWallsSrc, DEBATE_ASSET_SIZE } from "@Constant/Three";
import { FBXs } from "@THREE/Atoms/Fbxs";

export const OutWalls = () => <FBXs size={DEBATE_ASSET_SIZE} src={`${OutWallsSrc}/OutWall.fbx`} />;
