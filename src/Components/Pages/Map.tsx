import { useState } from "react";
import MapContainer from "@THREE/Templates/Map";
import MapOptionTemplate from "@Templates/MapOption";
import { CHANNEL_INFO } from "@Constant/.";

const MapPage = () => {
  const [joinedUserNumber, setJoinedUserNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  if (window.innerWidth < 768) return <MapContainer setJoinedUserNumber={setJoinedUserNumber} setLoading={setLoading} />;
  return (
    <>
      <MapContainer setJoinedUserNumber={setJoinedUserNumber} setLoading={setLoading} />
      <MapOptionTemplate channelInfo={CHANNEL_INFO[0]} now={joinedUserNumber} loading={loading} />
    </>
  );
};

export default MapPage;
