/* eslint-disable @typescript-eslint/no-unused-vars */
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import Building from "@Atoms/Building/.";
import CameraController from "@Atoms/CameraController";
import * as THREE from "three";
import { OrbitControls, TrackballControls } from "@react-three/drei";
import BasicPlane from "@Atoms/BasicPlane";
import Plane from "@Atoms/Plane";
import Caracter from "@Atoms/Character";
import Cube from "@Atoms/Building/test";
import FakePlanes from "@Atoms/FakePlanes";
import MetaContainer from "./styles";

// import Character from "@Atoms/Character";

const MapContainer = () => {
  return (
    <MetaContainer>
      <Canvas>
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Physics>
          <BasicPlane position={[0, -2, 0]} />
          <FakePlanes />
          <Building color="blue" position={[0, 2, 0]} src="models/ajou_road_01.gltf" />
          <Building position={[0, 2, 0]} src="models/ajou_road_02.gltf" color="white" />
          <Building color="black" src="models/ajou_road_03.gltf" position={[0, 2, 0]} />
          <Building color="red" src="models/ajou_building_01.gltf" position={[0, 2, 0]} args={[5.025, 2.173, 1.724]} />
          <Building color="orange" src="models/ajou_building_02.gltf" position={[0, 3.165, -8.703]} args={[5.025, 2.173, 1.724]} />
          <Cube />
          <Caracter position={[-1.5, 8, -9]} />
          <Caracter position={[-2.5, 8, -8]} />
          <Caracter position={[-2.5, 8, -6]} />
          <Caracter position={[-1.5, 8, -6]} />
          <Caracter position={[-2.5, 8, -5]} />
          <Caracter position={[-2.5, 8, -4]} />
          <Caracter position={[-2.5, 8, -3]} />
          <Caracter position={[-2.5, 8, -2]} />
          <Caracter position={[-2.5, 8, -1]} />
          <Caracter position={[-2.5, 8, 0]} />
          <Caracter position={[-1.5, 8, 0]} />
          <Caracter position={[-2.5, 8, 1]} />
          <CameraController />
          <primitive position={[0, 0, -3]} object={new THREE.AxesHelper(10)} />
        </Physics>
      </Canvas>
    </MetaContainer>
  );
};

// position은 x는 좌 / 우 y는 위 / 아래 z는 깊이
export default MapContainer;
