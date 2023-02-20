import { NoticeBoardAssetSize, NoticeBoardSrc } from "@Constant/Three";
import FBX from "@THREE/Atoms/ModelComponent/FBX";

export const NoticeBoard = () => <FBX assetSize={NoticeBoardAssetSize} keyName="noticeboard" srcName={`${NoticeBoardSrc}/noticeboard_`} />;
