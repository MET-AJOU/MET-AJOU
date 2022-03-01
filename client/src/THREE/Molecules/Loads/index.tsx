import Building from "@THREE/Atoms/Building";

const Loads = () => {
  return (
    <>
      <Building color="blue" position={[0, 2, 0]} src="models/ajou_road_01.gltf" />
      <Building position={[0, 2, 0]} src="models/ajou_road_02.gltf" color="white" />
      <Building color="black" src="models/ajou_road_03.gltf" position={[0, 2, 0]} />
    </>
  );
};

export default Loads;
