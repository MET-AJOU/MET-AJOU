import { ChanelInfoType } from "@Type/.";

import MapOptionBottom from "@Organisms/MapOption/Bottom";
import MapOptionHeader from "@Organisms/MapOption/Header";
import MapOptionModal from "@Organisms/MapOption/Modal";

const MapOptionTemplate = ({ channelInfo, now, loading }: { channelInfo: ChanelInfoType; now: number; loading: boolean }) => {
  if (!loading) return null;
  return (
    <>
      <MapOptionHeader channelInfo={channelInfo} now={now} />
      <MapOptionBottom />
      {MapOptionModal()}
    </>
  );
};

export default MapOptionTemplate;
