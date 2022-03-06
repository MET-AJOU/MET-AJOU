import Building from "@THREE/Atoms/Building";

const Buildings = () => {
  // 가로 x 높이 y 세로 z
  return (
    <>
      <Building color="red" src="models/ajou_building_01.gltf" position={[0, 2, 0]} args={[5.0025, 2.173, 1.724]} />
      <Building color="orange" src="models/ajou_building_02.gltf" position={[0, 3.165, -8.703]} args={[5.0025, 2.173, 1.724]} />
    </>
  );
};

export default Buildings;
