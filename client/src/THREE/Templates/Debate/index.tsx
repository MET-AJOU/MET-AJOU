import { Physics } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { RecoilRoot } from "recoil";

import { CHANNEL_INFO } from "@Constant/.";

import Ceilings from "@THREE/Molecules/Debate/Ceilings";
import Chairs from "@THREE/Molecules/Debate/Chairs";
import OutWalls from "@THREE/Molecules/Debate/OutWalls";
import Props from "@THREE/Molecules/Debate/Props";
import Room from "@THREE/Molecules/Debate/Room";
import Tables from "@THREE/Molecules/Debate/Tables";
import Walls from "@THREE/Molecules/Debate/Walls";
import Floors from "@THREE/Molecules/Debate/Floors";
import Windows from "@THREE/Molecules/Debate/Windows";
import BasicPlane from "@THREE/Atoms/BasicPlane";
import SocketComponent from "@THREE/Atoms/Socket";
import Characters from "@THREE/Molecules/AjouMap/Characters";
import Keyboard from "@THREE/Atoms/Control/KeyBoard";

import { MapContainer } from "./styles";

const DebateMap = () => {
  return (
    <MapContainer>
      <Canvas>
        <RecoilRoot>
          <Physics gravity={[0, 0, 0]} broadphase="SAP">
            <OrbitControls />
            <ambientLight />
            <pointLight position={[100, 100, 100]} intensity={1} />
            <BasicPlane position={[0, 0, 0]} />
            <Ceilings />
            <Chairs />
            <Floors />
            <OutWalls />
            <Props />
            <Room />
            <Tables />
            <Walls />
            <Windows />
            <Characters />
          </Physics>
          <Keyboard />
          <SocketComponent roomId={CHANNEL_INFO[2].id} />
        </RecoilRoot>
      </Canvas>
    </MapContainer>
  );
};

export default DebateMap;
