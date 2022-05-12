import MapOptionBottom from "@Organisms/MapOption/Bottom";
import MapOptionHeader from "@Organisms/MapOption/Header";

const MapOptionTemplate = ({ title, now }: { title: string; now: number }) => {
  return (
    <>
      <MapOptionHeader title={title} now={now} />
      <MapOptionBottom />
    </>
  );
};

export default MapOptionTemplate;
