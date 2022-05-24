import { Suspense, useState } from "react";
import MapContainer from "@THREE/Templates/Map";
import MapOptionTemplate from "@Templates/MapOption";
import { CHANNEL_INFO } from "@Constant/.";
import LoadingPage from "./Loding";

const MapPage = () => {
  const [joinedUserNumber, setJoinedUserNumber] = useState(0);

  return (
    <Suspense fallback={<LoadingPage />}>
      <MapContainer setJoinedUserNumber={setJoinedUserNumber} />
      <MapOptionTemplate channelInfo={CHANNEL_INFO[0]} now={joinedUserNumber} />
    </Suspense>
  );
};

export default MapPage;
