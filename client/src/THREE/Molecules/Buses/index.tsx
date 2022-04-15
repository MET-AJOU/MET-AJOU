/* eslint-disable react/no-array-index-key */
import { BusAssetSize, BusSrc } from "@Constant/Three";
import Ground from "@THREE/Atoms/Ground";

const Buses = () => {
  const blocking = () => console.log("hit Bus");
  return (
    <>
      {new Array(BusAssetSize).fill(1).map((_, idx) => (
        <Ground key={idx} src={`${BusSrc}/Bus_${idx + 1}.gltf`} 키="bus" 블락함수={blocking} />
      ))}
    </>
  );
};

export default Buses;
