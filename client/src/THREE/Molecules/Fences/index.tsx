/* eslint-disable react/no-array-index-key */
import { FenceAssetSize, FenceSrc } from "@Constant/Three";
import Ground from "@THREE/Atoms/Ground";

const Fences = () => {
  const blocking = () => console.log("hit Fence");
  return (
    <>
      {new Array(FenceAssetSize).fill(1).map((_, idx) => (
        <Ground key={idx} src={`${FenceSrc}/Fence_${idx + 1}.gltf`} 키="fence" 블락함수={blocking} />
      ))}
    </>
  );
};

export default Fences;
