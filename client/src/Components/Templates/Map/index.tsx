import { Canvas } from "@react-three/fiber";
import Building from "@Atoms/Building/.";
import CameraController from "@Atoms/CameraController";
import MetaContainer from "./styles";

// import Character from "@Atoms/Character";

const MapContainer = () => {
  return (
    <MetaContainer>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Building src="models/ajou_building_01.gltf" />
        <Building src="models/ajou_building_02.gltf" />
        <Building src="models/ajou_road_01.gltf" />
        <Building src="models/ajou_road_02.gltf" />
        <Building src="models/ajou_road_03.gltf" />
        <CameraController />
        {/* <Character /> */}
      </Canvas>
    </MetaContainer>
  );
};

// position은 x는 좌 / 우 y는 위 / 아래 z는 깊이
export default MapContainer;
