/* eslint-disable react/no-array-index-key */
import { WallsSrc, DEBATE_ASSET_SIZE } from "@Constant/Three";
import FBXs from "@THREE/Atoms/Fbxs";

const Walls = () => {
  return <FBXs size={DEBATE_ASSET_SIZE} src={`${WallsSrc}/Wall.fbx`} />;
};

export default Walls;
