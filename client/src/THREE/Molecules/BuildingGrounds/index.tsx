import { BuildingGroundAssetSize, BuildingGroundsSrc } from "@Constant/Three";
import Ground from "@THREE/Atoms/Ground";

const Grounds = () => {
  const blocking = () => console.log("hit");
  return (
    <>
      {new Array(BuildingGroundAssetSize).fill(1).map((_, idx) => (
        <Ground src={`${BuildingGroundsSrc}/ground_${idx + 1}.gltf`} 키="building_ground" 블락함수={blocking} />
      ))}
    </>
  );
};

export default Grounds;
