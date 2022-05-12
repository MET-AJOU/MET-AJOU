import MapOptionBottom from "@Organisms/MapOption/Bottom";
import MapOptionHeader from "@Organisms/MapOption/Header";
import MapOptionModal from "@Organisms/MapOption/Modal";

const MapOptionTemplate = ({ title, now }: { title: string; now: number }) => {
  return (
    <>
      <MapOptionHeader title={title} now={now} />
      <MapOptionBottom />
      {MapOptionModal()}
    </>
  );
};

export default MapOptionTemplate;
