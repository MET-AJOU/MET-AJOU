/* eslint-disable react/no-array-index-key */
import { WallsSrc } from "@Constant/Three";
import FBXs from "@THREE/Atoms/Fbxs";

const Walls = () => {
  return <FBXs src={`${WallsSrc}/Wall.fbx`} />;
};

export default Walls;
