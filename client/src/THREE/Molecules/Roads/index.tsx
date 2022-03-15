import Building from "@THREE/Atoms/Building";

const Roads = () => {
  return (
    <>
      <Building color="blue" position={[0, 2, 0]} src="models/ajou_road_1.gltf" />
      <Building position={[0, 2, 0]} src="models/ajou_road_2.gltf" color="white" />
      <Building color="black" src="models/ajou_road_3.gltf" position={[0, 2, 0]} />
    </>
  );
};

export default Roads;
