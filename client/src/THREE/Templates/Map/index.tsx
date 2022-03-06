/* eslint-disable @typescript-eslint/no-unused-vars */
import { OrbitControls, TrackballControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import * as THREE from "three";
import { RecoilRoot } from "recoil";

import CameraController from "@THREE/Atoms/CameraController";
import BasicPlane from "@THREE/Atoms/BasicPlane";
import Cube from "@THREE/Atoms/Building/test";
import FakePlanes from "@THREE/Atoms/FakePlanes";

import Buildings from "@THREE/Molecules/Buildings";
import Loads from "@THREE/Molecules/Loads";

import Test from "@THREE/Organisms/Test";

import Character from "@THREE/Atoms/Character";
import TestCharacter from "@THREE/Atoms/Character/test";
import Keyboard from "@THREE/Atoms/Control/KeyBoard";

import MetaContainer from "./styles";

const MapContainer = () => {
  return (
    <MetaContainer>
      <Canvas>
        <RecoilRoot>
          <OrbitControls />
          <ambientLight />
          <pointLight position={[-100, 100, 100]} />
          <pointLight position={[100, 100, 100]} />
          <Physics>
            <BasicPlane position={[0, -2, 0]} />
            <FakePlanes />
            <Buildings />
            <Loads />
            <Test />
            <TestCharacter />

            {/* <Cube /> */}
            {/* <Character position={[-3, 8, 1]} /> */}
            {/* <CameraController /> */}
            {/* <primitive position={[0, 0, -3]} object={new THREE.AxesHelper(10)} /> */}
          </Physics>
          <Keyboard />
        </RecoilRoot>
      </Canvas>
    </MetaContainer>
  );
};

// position은 x는 좌 / 우 y는 위 / 아래 z는 깊이
export default MapContainer;
