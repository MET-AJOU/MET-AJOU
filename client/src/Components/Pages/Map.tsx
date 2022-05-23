import { useState } from "react";
import MapContainer from "@THREE/Templates/Map";
import MapOptionTemplate from "@Templates/MapOption";
import { CHANNEL_INFO } from "@Constant/.";

const MapPage = () => {
  const [joinedUserNumber, setJoinedUserNumber] = useState(0);

  return (
    <>
      <MapContainer setJoinedUserNumber={setJoinedUserNumber} />
      <MapOptionTemplate channelInfo={CHANNEL_INFO[0]} now={joinedUserNumber} />
    </>
  );
};

export default MapPage;
