import { ChanelInfoType } from "@Type/.";
import MapInfo from "@Molecules/MapOption/MapInfo";
import MapOption from "@Molecules/MapOption/MapOption";

const MapOptionHeader = ({ channelInfo, now }: { channelInfo: ChanelInfoType; now: number }) => {
  return (
    <>
      <MapInfo chanelInfo={channelInfo} now={now} />
      <MapOption />
    </>
  );
};

export default MapOptionHeader;
