import { GroundAssetSize, GroundsSrc } from "@Constant/Three";
import Ground from "@THREE/Atoms/Ground";

const Grounds = () => {
  const blocking = () => console.log("hit");
  return (
    <>
      {new Array(GroundAssetSize).fill(1).map((_, idx) => (
        <Ground src={`${GroundsSrc}/ground_${idx + 1}.gltf`} 키="out_ground" 블락함수={blocking} />
      ))}
    </>
  );
};

export default Grounds;
