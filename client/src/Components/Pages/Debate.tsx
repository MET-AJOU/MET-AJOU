import { Suspense, useState } from "react";
import DebateMap from "@THREE/Templates/Debate/";
import MapOptionTemplate from "@Templates/MapOption";
import { CHANNEL_INFO } from "@Constant/.";

const MapPage = () => {
  const [joinedUserNumber, setJoinedUserNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  return (
    <Suspense fallback={null}>
      <DebateMap setJoinedUserNumber={setJoinedUserNumber} setLoading={setLoading} />
      <MapOptionTemplate channelInfo={CHANNEL_INFO[2]} now={joinedUserNumber} loading={loading} />
    </Suspense>
  );
};

export default MapPage;
