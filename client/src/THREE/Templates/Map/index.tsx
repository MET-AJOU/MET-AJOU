/* eslint-disable @typescript-eslint/no-unused-vars */
import { OrbitControls, Sky, TrackballControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { RecoilRoot } from "recoil";

// import CameraController from "@THREE/Atoms/CameraController";
// import Cube from "@THREE/Atoms/Building/test";
// import Character from "@THREE/Atoms/Character";
import BasicPlane from "@THREE/Atoms/BasicPlane";
import FakePlanes from "@THREE/Atoms/FakePlanes";

import Buildings from "@THREE/Molecules/Buildings";
import Loads from "@THREE/Molecules/Loads";

import Test from "@THREE/Organisms/Test";

import TestCharacter from "@THREE/Atoms/Character/test";
import Keyboard from "@THREE/Atoms/Control/KeyBoard";

import Fog from "@THREE/Atoms/Fog";
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
            <Fog />
            <Sky sunPosition={[100, 10, 100]} distance={500} />
            <BasicPlane position={[0, -2, 0]} />
            <FakePlanes />
            <Buildings />
            <Loads />
            <Test />
            <TestCharacter src="Character/Jogging.fbx" />
          </Physics>
          <Keyboard />
        </RecoilRoot>
      </Canvas>
    </MetaContainer>
  );
};

// position은 x는 좌 / 우 y는 위 / 아래 z는 깊이
export default MapContainer;
