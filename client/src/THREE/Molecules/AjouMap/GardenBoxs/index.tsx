/* eslint-disable react/no-array-index-key */
import { GardenBoxAssetSize, GardenBoxSrc, GardenBoxFBXAssetStart } from "@Constant/Three";
import FBXs from "@THREE/Atoms/Fbxs";
import Ground from "@THREE/Atoms/Ground";

const GardenBoxs = () => {
  const blocking = () => console.log("hit Fence");
  return (
    <>
      {new Array(GardenBoxAssetSize).fill(1).map((_, idx) => {
        return GardenBoxFBXAssetStart > idx ? <Ground key={idx} src={`${GardenBoxSrc}/Gardenbox_${idx + 1}.gltf`} 키="gardenbox" 블락함수={blocking} /> : <FBXs key={`GardenBox${idx}`} src={`${GardenBoxSrc}/gardenbox_${idx + 1}.fbx`} />;
      })}
    </>
  );
};

export default GardenBoxs;
