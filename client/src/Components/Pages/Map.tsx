import { Suspense } from "react";
import MapContainer from "@THREE/Templates/Map";
import useInitSocket from "@Socket/Hook/useInitSocket";

const MapPage = () => {
  useInitSocket();

  return (
    <Suspense fallback={null}>
      <MapContainer />
      {/* <MapOptionTemplate /> */}
    </Suspense>
  );
};

export default MapPage;
