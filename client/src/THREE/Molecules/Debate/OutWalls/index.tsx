/* eslint-disable react/no-array-index-key */
import { OutWallsSrc } from "@Constant/Three";
import FBXs from "@THREE/Atoms/Fbxs";

const OutWalls = () => {
  return <FBXs src={`${OutWallsSrc}/OutWall.fbx`} />;
};

export default OutWalls;
