import { BuildingsSrc } from "@Constant/Three";
import Building from "@THREE/Atoms/Building";

const Buildings = () => {
  // 가로 x 높이 y 세로 z
  return (
    <>
      <Building src={`${BuildingsSrc}/building_centrallibrary.gltf`} 블락함수={undefined} />
      <Building src={`${BuildingsSrc}/building_hongjae.glb`} 블락함수={undefined} />
      <Building src={`${BuildingsSrc}/building_l_centralgate.gltf`} 블락함수={undefined} />
      <Building src={`${BuildingsSrc}/building_librarymap.gltf`} 블락함수={undefined} />
      <Building src={`${BuildingsSrc}/building_r_centralgate.gltf`} 블락함수={undefined} />
      <Building src={`${BuildingsSrc}/building_seongho.glb`} 블락함수={undefined} />
      <Building src={`${BuildingsSrc}/building_stonestatue.gltf`} 블락함수={undefined} />
      <Building src={`${BuildingsSrc}/building_woncheon.glb`} 블락함수={undefined} />
    </>
  );
};

export default Buildings;
