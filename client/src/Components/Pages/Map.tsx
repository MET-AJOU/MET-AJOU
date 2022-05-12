import { Suspense } from "react";
import MapContainer from "@THREE/Templates/Map";
import MapOptionTemplate from "@Templates/MapOption";

const MapPage = () => {
  return (
    <Suspense fallback={null}>
      <MapContainer />
      <MapOptionTemplate title="아주대학교" now={0} />
    </Suspense>
  );
};

export default MapPage;
