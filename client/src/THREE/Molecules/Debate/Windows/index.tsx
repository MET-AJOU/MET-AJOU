/* eslint-disable react/no-array-index-key */
import { WindowSrc } from "@Constant/Three";
import FBXs from "@THREE/Atoms/Fbxs";

const Windows = () => {
  return <FBXs src={`${WindowSrc}/WindowFrame.fbx`} />;
};

export default Windows;
