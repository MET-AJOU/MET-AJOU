/* eslint-disable @typescript-eslint/no-unused-vars */
import { OrbitControls, PointerLockControls, Sky, TrackballControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { RecoilRoot } from "recoil";

import BasicPlane from "@THREE/Atoms/BasicPlane";
import FakePlanes from "@THREE/Atoms/FakePlanes";

import Buildings from "@THREE/Molecules/Buildings";
import Roads from "@THREE/Molecules/Roads";
import Grounds from "@THREE/Molecules/Grounds";
import BuildingGrounds from "@THREE/Molecules/BuildingGrounds";

import Test from "@THREE/Organisms/Test";

import TestCharacter from "@THREE/Atoms/Character/test";
import Keyboard from "@THREE/Atoms/Control/KeyBoard";
import SocketComponent from "@THREE/Atoms/Socket";
import Characters from "@THREE/Molecules/Characters";

import Fog from "@THREE/Atoms/Fog";

import Hills from "@THREE/Molecules/Hills";
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
          <Physics gravity={[0, 0, 0]}>
            <Fog />
            <Sky sunPosition={[100, 10, 100]} distance={500} />
            <Roads />
            <Grounds />
            <BuildingGrounds />
            <Characters />
            <Hills />
            {/* <FakePlanes /> */}

            {/* <BasicPlane position={[0, -2, 0]} /> */}
            {/* <Test /> */}
            {/* <Buildings /> */}
          </Physics>
          <Keyboard />
          <SocketComponent />
        </RecoilRoot>
      </Canvas>
    </MetaContainer>
  );
};

export default MapContainer;
