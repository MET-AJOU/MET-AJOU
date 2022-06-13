import { CatAssetSize, CatSrc } from "@Constant/Three";
import FBX from "@THREE/Atoms/ModelComponent/FBX";

export const Cats = () => <FBX assetSize={CatAssetSize} keyName="cat" srcName={`${CatSrc}/cat_`} />;
