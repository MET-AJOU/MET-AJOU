/* eslint-disable react/no-array-index-key */
import { SideWalkAssetSize, SideWalkSrc } from "@Constant/Three";
import Ground from "@THREE/Atoms/Ground";

const SideWalks = () => {
  const blocking = () => console.log("hit SideWalk");
  return (
    <>
      {new Array(SideWalkAssetSize).fill(1).map((_, idx) => (
        <Ground key={idx} src={`${SideWalkSrc}/Sidewalk_${idx + 1}.gltf`} 키="sidewalk" 블락함수={blocking} />
      ))}
    </>
  );
};

export default SideWalks;
