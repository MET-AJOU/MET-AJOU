import { ObjectAssetSize, ObjectSrc } from "@Constant/Three";
import FBX from "@THREE/Atoms/ModelComponent/FBX";

export const Objects = () => <FBX assetSize={ObjectAssetSize} keyName="Objects" srcName={`${ObjectSrc}/Object_`} />;
