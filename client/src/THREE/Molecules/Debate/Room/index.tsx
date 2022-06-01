/* eslint-disable react/no-array-index-key */
import { RoomSrc, DEBATE_ASSET_SIZE } from "@Constant/Three";
import { FBXs } from "@THREE/Atoms/Fbxs";

const Room = () => {
  return <FBXs size={DEBATE_ASSET_SIZE} src={`${RoomSrc}/lectureroom.fbx`} />;
};

export default Room;
