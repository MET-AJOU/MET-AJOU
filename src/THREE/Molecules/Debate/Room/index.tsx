import { RoomSrc, DEBATE_ASSET_SIZE } from "@Constant/Three";
import { FBXs } from "@THREE/Atoms/Fbxs";

export const Room = () => <FBXs size={DEBATE_ASSET_SIZE} src={`${RoomSrc}/lectureroom.fbx`} />;
