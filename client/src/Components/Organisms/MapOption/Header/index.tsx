import MapInfo from "@Molecules/MapOption/MapInfo";
import MapOption from "@Molecules/MapOption/MapOption";

const MapOptionHeader = ({ title, now }: { title: string; now: number }) => {
  return (
    <>
      <MapInfo title={title} now={now} />
      <MapOption />
    </>
  );
};

export default MapOptionHeader;
