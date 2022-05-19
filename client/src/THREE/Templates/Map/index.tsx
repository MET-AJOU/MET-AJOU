/* eslint-disable @typescript-eslint/no-unused-vars */
import { OrbitControls, PointerLockControls, Sky, TrackballControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics, Debug } from "@react-three/cannon";
import { RecoilRoot } from "recoil";

import { CHANNEL_INFO } from "@Constant/.";

import BasicPlane from "@THREE/Atoms/BasicPlane";
import FakePlanes from "@THREE/Atoms/FakePlanes";

import Buildings from "@THREE/Molecules/AjouMap/Buildings";
import Roads from "@THREE/Molecules/AjouMap/Roads";
import Grounds from "@THREE/Molecules/AjouMap/Grounds";
import BuildingGrounds from "@THREE/Molecules/AjouMap/BuildingGrounds";

import Test from "@THREE/Organisms/Test";

import TestCharacter from "@THREE/Atoms/Character/test";
import Keyboard from "@THREE/Atoms/Control/KeyBoard";
import SocketComponent from "@THREE/Atoms/Socket";
import Characters from "@THREE/Molecules/AjouMap/Characters";

import Fog from "@THREE/Atoms/Fog";

import Hills from "@THREE/Molecules/AjouMap/Hills";
import HeightMap from "@THREE/Atoms/HeightMap";
import Fences from "@THREE/Molecules/AjouMap/Fences";
import SideWalks from "@THREE/Molecules/AjouMap/SideWalks";
import StreetLamps from "@THREE/Molecules/AjouMap/StreetLamps";
import Trees from "@THREE/Molecules/AjouMap/Trees";
import TreeBases from "@THREE/Molecules/AjouMap/TreeBases";
import GardenBoxs from "@THREE/Molecules/AjouMap/GardenBoxs";
import Buses from "@THREE/Molecules/AjouMap/Buses";
import Fields from "@THREE/Molecules/AjouMap/Fields";
import GardenStairs from "@THREE/Molecules/AjouMap/GardenStairs";
import AddGrounds from "@THREE/Molecules/AjouMap/AddGrounds";

import Tests from "@THREE/Molecules/AjouMap/Tests";
import MetaContainer from "./styles";

const MapContainer = ({ setJoinedUserNumber }: { setJoinedUserNumber: React.Dispatch<React.SetStateAction<number>> }) => {
  return (
    <MetaContainer>
      <Canvas>
        <RecoilRoot>
          <OrbitControls />
          <ambientLight />
          <pointLight position={[100, 100, 100]} intensity={1} />
          {/* <Physics gravity={[0, 0, 0]}> */}
          <Physics gravity={[0, 0, 0]} broadphase="SAP">
            {/* <Debug scale={1} color="black"> */}
            {/* <HeightMap elementSize={0.0371} position={[-50.8, -0.1, 30.0998]} rotation={[3.14 / 2, 3.14, 3.14]} /> */}
            {/* <HeightMap elementSize={0.1484} position={[-50.8, -0.1, 30.0998]} rotation={[3.14 / 2, 3.14, 3.14]} /> */}
            <HeightMap elementSize={0.0742} position={[-50.8, -0.2, 30.0998]} rotation={[3.14 / 2, 3.14, 3.14]} />
            {/* <Fog /> */}
            {/* <Sky sunPosition={[100, 10, 100]} distance={500} /> */}
            <Roads />
            <Grounds />
            <BuildingGrounds />
            <Characters />
            <Hills />
            <Buildings />
            {/* <Fences /> */}
            <SideWalks />
            <StreetLamps />
            {/* <Trees /> */}
            {/* <TreeBases /> */}
            <GardenBoxs />
            {/* <Buses /> */}
            <Tests />
            <Fields />
            {/* <GardenStairs /> */}
            {/* <AddGrounds /> */}
            {/* <FakePlanes /> */}

            {/* <BasicPlane position={[0, -2, 0]} /> */}
            {/* <Test /> */}
            {/* </Debug> */}
          </Physics>
          <Keyboard />
          <SocketComponent setJoinedUserNumber={setJoinedUserNumber} roomId={CHANNEL_INFO[0].id} />
        </RecoilRoot>
      </Canvas>
    </MetaContainer>
  );
};

export default MapContainer;

// [z축 x축 y축]

// position [0] : - 왼쪽 + 오른쪽
// position [1] : 높이
// position [2] : + 아래 , - 위

// args [0] : 좌우 중심에서 길어지고 짧아짐
// args [1] : 높이 위아래
// args [2] : 위아래 중심에서 길어지고 짧아짐

// rotation [0] : 수직으로 세워짐
// rotation [1] : 회전
