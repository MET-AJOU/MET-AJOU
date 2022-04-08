import { BuildingsSrc } from "@Constant/Three";
import Building from "@THREE/Atoms/Building";

const Buildings = () => {
  // 가로 x 높이 y 세로 z
  return (
    <>
      <Building color="red" src={`${BuildingsSrc}/library_test1.gltf`} position={[0, 0, 0]} args={[0, 0, 0]} />
      {/* <Building color="orange" src="models/ajou_building_2.gltf" position={[0, 3.165, -8.703]} args={[5.0025, 2.173, 1.724]} /> */}
    </>
  );
};

export default Buildings;
