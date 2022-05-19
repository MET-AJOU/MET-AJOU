import { Suspense, useState } from "react";
import DebateMap from "@THREE/Templates/Debate/";
import MapOptionTemplate from "@Templates/MapOption";
import { CHANNEL_INFO } from "@Constant/.";

const MapPage = () => {
  const [joinedUserNumber, setJoinedUserNumber] = useState(0);
  return (
    <Suspense fallback={null}>
      <DebateMap setJoinedUserNumber={setJoinedUserNumber} />
      <MapOptionTemplate channelInfo={CHANNEL_INFO[2]} now={joinedUserNumber} />
    </Suspense>
  );
};

export default MapPage;
