import { ChanelInfoType } from "@Type/.";
import { MapInfoContainer } from "./styles";

const MapInfo = ({ chanelInfo, now }: { chanelInfo: ChanelInfoType; now: number }) => {
  return (
    <MapInfoContainer>
      <p>{chanelInfo.title}</p>
      <img src="./asset/MapOption/MapInfo/people.png" alt="사람이미지" />
      <p>
        {now} / {chanelInfo.total}
      </p>
    </MapInfoContainer>
  );
};

export default MapInfo;
