import { Suspense, useState } from "react";

import MapOptionTemplate from "@Templates/MapOption";
import { CHANNEL_INFO } from "@Constant/.";
import TalkContainer from "@THREE/Templates/Talk";

const TalkPage = () => {
  const [joinedUserNumber, setJoinedUserNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  if (window.innerWidth < 768) return <TalkContainer setJoinedUserNumber={setJoinedUserNumber} setLoading={setLoading} />;
  return (
    <Suspense fallback={null}>
      <TalkContainer setJoinedUserNumber={setJoinedUserNumber} setLoading={setLoading} />
      <MapOptionTemplate channelInfo={CHANNEL_INFO[1]} now={joinedUserNumber} loading={loading} />
    </Suspense>
  );
};

export default TalkPage;
