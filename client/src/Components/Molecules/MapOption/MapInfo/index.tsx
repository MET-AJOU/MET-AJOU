import { MapInfoContainer } from "./styles";

const MapInfo = ({ title, now }: { title: string; now: number }) => {
  return (
    <MapInfoContainer>
      <p>{title}</p>
      <img src="./asset/MapOption/MapInfo/people.png" alt="사람이미지" />
      <p>{now} / 100</p>
    </MapInfoContainer>
  );
};

export default MapInfo;
