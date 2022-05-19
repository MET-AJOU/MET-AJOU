import { Suspense } from "react";
import DebateMap from "@THREE/Templates/Debate/";
import MapOptionTemplate from "@Templates/MapOption";
import { CHANNEL_INFO } from "@Constant/.";

const MapPage = () => {
  return (
    <Suspense fallback={null}>
      <DebateMap />
      <MapOptionTemplate channelInfo={CHANNEL_INFO[2]} now={0} />
    </Suspense>
  );
};

export default MapPage;
