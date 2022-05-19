/* eslint-disable react/no-array-index-key */
import { BusAssetSize, BusSrc } from "@Constant/Three";
import FBXs from "@THREE/Atoms/Fbxs";

const Buses = () => {
  return (
    <>
      {new Array(BusAssetSize).fill(1).map((_, idx) => (
        <FBXs key={`Buses${idx}`} src={`${BusSrc}/Bus_${idx + 1}.fbx`} />
      ))}
    </>
  );
};

export default Buses;
