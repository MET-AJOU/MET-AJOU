/* eslint-disable react/no-array-index-key */
import { OutWallsSrc, DEBATE_ASSET_SIZE } from "@Constant/Three";
import FBXs from "@THREE/Atoms/Fbxs";

const OutWalls = () => {
  return <FBXs size={DEBATE_ASSET_SIZE} src={`${OutWallsSrc}/OutWall.fbx`} />;
};

export default OutWalls;
