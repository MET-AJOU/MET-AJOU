import { AjouMeoAssetSize, AjouMeoSrc } from "@Constant/Three";
import FBX from "@THREE/Atoms/ModelComponent/FBX";

export const AjouMeo = () => <FBX assetSize={AjouMeoAssetSize} keyName="AjouMeo" srcName={`${AjouMeoSrc}/ajoumeo_`} />;
