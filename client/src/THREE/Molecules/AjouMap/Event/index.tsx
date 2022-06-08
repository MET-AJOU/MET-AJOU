import { EventAssetSize, EventSrc } from "@Constant/Three";
import FBX from "@THREE/Atoms/ModelComponent/FBX";

export const Event = () => <FBX assetSize={EventAssetSize} keyName="Event" srcName={`${EventSrc}/event_`} />;
