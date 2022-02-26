/* eslint-disable @typescript-eslint/no-unused-vars */
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import Building from "@Atoms/Building/.";
import CameraController from "@Atoms/CameraController";
import * as THREE from "three";
import { OrbitControls, TrackballControls } from "@react-three/drei";
import Plane from "@Atoms/Plane";
import BasicPlane from "@Atoms/BasicPlane";
import Caracter from "@Atoms/Character";
import Cube from "@Atoms/Building/test";
import MetaContainer from "./styles";

// import Character from "@Atoms/Character";

const MapContainer = () => {
  return (
    <MetaContainer>
      <Canvas>
        <Physics>
          {/* <TrackballControls /> */}
          <OrbitControls />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <BasicPlane position={[0, -1, 0]} />
          <Building position={[0, 2, 0]} src="models/ajou_road_01.gltf" args={[1.786, 0, 4.11]} />
          <Building position={[0, 2, 0]} src="models/ajou_road_02.gltf" args={[7.933, 0.108, 4.11]} />
          <Building src="models/ajou_road_03.gltf" position={[0, 2, 0]} args={[1.786, 0.108, 4.11]} />
          <Building src="models/ajou_building_01.gltf" position={[0, 2, 0]} args={[5.025, 0, 1.724]} />
          <Building src="models/ajou_building_02.gltf" position={[0, 2, 0]} args={[5.025, 0, 1.724]} />
          <Cube />
          <Caracter position={[-3.5, 4, 0]} />
          <CameraController />
          <primitive position={[0, 0, -3]} object={new THREE.AxesHelper(10)} />
          {/* <Character /> */}
        </Physics>
      </Canvas>
    </MetaContainer>
  );
};

// position은 x는 좌 / 우 y는 위 / 아래 z는 깊이
export default MapContainer;
