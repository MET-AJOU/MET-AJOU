import { Suspense } from "react";
import DebateMap from "@THREE/Templates/Debate/";
import MapOptionTemplate from "@Templates/MapOption";

const MapPage = () => {
  return (
    <Suspense fallback={null}>
      <DebateMap />
      <MapOptionTemplate title="토론 강의실" now={0} />
    </Suspense>
  );
};

export default MapPage;
