import { Suspense } from "react";
import MapContainer from "@THREE/Templates/Map";
import MapOptionTemplate from "@Templates/MapOption";

import { CHANNEL_INFO } from "@Constant/.";

const MapPage = () => {
  return (
    <Suspense fallback={null}>
      <MapContainer />
      <MapOptionTemplate channelInfo={CHANNEL_INFO[0]} now={0} />
    </Suspense>
  );
};

export default MapPage;
