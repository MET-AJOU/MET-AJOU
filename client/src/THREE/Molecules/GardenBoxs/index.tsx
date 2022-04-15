/* eslint-disable react/no-array-index-key */
import { GardenBoxAssetSize, GardenBoxSrc } from "@Constant/Three";
import Ground from "@THREE/Atoms/Ground";

const GardenBoxs = () => {
  const blocking = () => console.log("hit Fence");
  return (
    <>
      {new Array(GardenBoxAssetSize).fill(1).map((_, idx) => (
        <Ground key={idx} src={`${GardenBoxSrc}/GardenBox_${idx + 1}.gltf`} 키="gardenbox" 블락함수={blocking} />
      ))}
    </>
  );
};

export default GardenBoxs;
