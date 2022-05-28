import { Suspense, useState } from "react";

import MapOptionTemplate from "@Templates/MapOption";
import { CHANNEL_INFO } from "@Constant/.";
import GymMap from "@THREE/Templates/Gym";

const GymPage = () => {
  const [joinedUserNumber, setJoinedUserNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  return (
    <Suspense fallback={null}>
      <GymMap setJoinedUserNumber={setJoinedUserNumber} setLoading={setLoading} />
      <MapOptionTemplate channelInfo={CHANNEL_INFO[3]} now={joinedUserNumber} loading={loading} />
    </Suspense>
  );
};

export default GymPage;
