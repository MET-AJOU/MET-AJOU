/* eslint-disable react/no-array-index-key */
import { WindowSrc, DEBATE_ASSET_SIZE } from "@Constant/Three";
import FBXs from "@THREE/Atoms/Fbxs";

const Windows = () => {
  return <FBXs size={DEBATE_ASSET_SIZE} src={`${WindowSrc}/WindowFrame.fbx`} />;
};

export default Windows;
