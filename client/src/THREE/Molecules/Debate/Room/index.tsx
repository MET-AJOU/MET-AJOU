/* eslint-disable react/no-array-index-key */
import { RoomSrc } from "@Constant/Three";
import FBXs from "@THREE/Atoms/Fbxs";

const Room = () => {
  return <FBXs src={`${RoomSrc}/lectureroom.fbx`} />;
};

export default Room;
