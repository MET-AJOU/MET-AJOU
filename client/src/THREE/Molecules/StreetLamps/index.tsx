/* eslint-disable react/no-array-index-key */
import { StreetLampAssetSize, StreetLampSrc } from "@Constant/Three";
import Ground from "@THREE/Atoms/Ground";

const StreetLamps = () => {
  const blocking = () => console.log("hit StreetLamps");
  return (
    <>
      {new Array(StreetLampAssetSize).fill(1).map((_, idx) => (
        <Ground key={idx} src={`${StreetLampSrc}/StreetLamp_${idx + 1}.gltf`} 키="streetlamp" 블락함수={blocking} />
      ))}
    </>
  );
};

export default StreetLamps;
