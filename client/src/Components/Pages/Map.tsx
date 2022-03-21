import { Suspense } from "react";
import MapContainer from "@THREE/Templates/Map";
import useSocket from "@Socket/useSocket";

const MapPage = () => {
  const [socket] = useSocket();
  console.log(socket);
  return (
    <Suspense fallback={null}>
      <MapContainer />
      {/* <MapOptionTemplate /> */}
    </Suspense>
  );
};

export default MapPage;
