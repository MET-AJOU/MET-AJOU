/* eslint-disable react/require-default-props */
/* eslint-disable react/no-array-index-key */
import { FC } from "react";
import { FBXs } from "@THREE/Atoms/Fbxs";

const FBX: FC<FBXType> = ({ assetSize, keyName, srcName, size }) => {
  return (
    <>
      {new Array(assetSize).fill(1).map((_, idx) => (
        <FBXs key={`${keyName}${idx}`} src={`${srcName}${idx + 1}.fbx`} size={size ?? 1} />
      ))}
    </>
  );
};

export default FBX;

interface FBXType {
  assetSize: number;
  keyName: string;
  srcName: string;
  size?: number;
}
