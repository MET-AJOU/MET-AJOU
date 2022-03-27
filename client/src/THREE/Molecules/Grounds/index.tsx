import { GroundsSrc } from "@Constant/Three";
// import { GroundAssetSize, GroundsSrc } from "@Constant/Three";
import Ground from "@THREE/Atoms/Ground";

const Grounds = () => {
  return (
    <>
      {/* {new Array(GroundAssetSize).fill(1).map((_, idx) => (
        <Ground position={[0, 1, 0]} src={`${GroundsSrc}/ground_${idx + 1}.gltf`} />
        ))} */}
      <Ground position={[0, 1, 0]} src={`${GroundsSrc}/ground_1.gltf`} />
    </>
  );
};

export default Grounds;
