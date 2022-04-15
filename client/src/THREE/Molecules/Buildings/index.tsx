import { BuildingsSrc } from "@Constant/Three";
import Building from "@THREE/Atoms/Building";

const Buildings = () => {
  // 가로 x 높이 y 세로 z
  return (
    <>
      <Building src={`${BuildingsSrc}/library_test1.gltf`} 블락함수={undefined} />
      <Building src={`${BuildingsSrc}/building_hongjae.gltf`} 블락함수={undefined} />
      <Building src={`${BuildingsSrc}/building_seongho.gltf`} 블락함수={undefined} />
      <Building src={`${BuildingsSrc}/building_woncheon.gltf`} 블락함수={undefined} />
    </>
  );
};

export default Buildings;
