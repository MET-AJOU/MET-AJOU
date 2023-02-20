import { useMemo, useState } from "react";

const useOnVoice = () => {
  const [on, setOn] = useState(false);

  const handleVoiceToggle = () => setOn((prev) => !prev);
  const imgSrc = useMemo(() => getSrc(on), [on]);

  return { imgSrc, handleVoiceToggle };
};

export default useOnVoice;

const getSrc = (on: boolean) => (on ? "./asset/MapOption/Voice/voiceOn.png" : "./asset/MapOption/Voice/voiceOff.png");
