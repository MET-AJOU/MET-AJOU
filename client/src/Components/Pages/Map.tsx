import { Suspense } from "react";
import MapContainer from "@THREE/Templates/Map";

const MapPage = () => {
  return (
    <Suspense fallback={null}>
      <MapContainer />
      {/* <MapOptionTemplate /> */}
    </Suspense>
  );
};

export default MapPage;
