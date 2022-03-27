import { BuildingGroundAssetSize, BuildingGroundsSrc } from "@Constant/Three";
import BuildingGround from "@THREE/Atoms/BuildingGround";

const Grounds = () => {
  return (
    <>
      {new Array(BuildingGroundAssetSize).fill(1).map((_, idx) => (
        <BuildingGround position={[0, 0, 0]} src={`${BuildingGroundsSrc}/ground_${idx + 1}.gltf`} />
      ))}
    </>
  );
};

export default Grounds;
