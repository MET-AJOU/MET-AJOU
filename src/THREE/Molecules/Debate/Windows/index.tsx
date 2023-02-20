import { WindowSrc, DEBATE_ASSET_SIZE } from "@Constant/Three";
import { FBXs } from "@THREE/Atoms/Fbxs";

export const Windows = () => <FBXs size={DEBATE_ASSET_SIZE} src={`${WindowSrc}/WindowFrame.fbx`} />;
