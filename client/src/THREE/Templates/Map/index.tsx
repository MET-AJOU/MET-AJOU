/* eslint-disable @typescript-eslint/no-unused-vars */
import { Suspense } from "react";
import { OrbitControls, Sky, Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics, Debug } from "@react-three/cannon";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import { CHANNEL_INFO } from "@Constant/.";

import FakePlanes from "@THREE/Atoms/FakePlanes";

import Buildings from "@THREE/Molecules/AjouMap/Buildings";
import Roads from "@THREE/Molecules/AjouMap/Roads";
import Grounds from "@THREE/Molecules/AjouMap/Grounds";

import Keyboard from "@THREE/Atoms/Control/KeyBoard";
import SocketComponent from "@THREE/Atoms/Socket";
import Characters from "@THREE/Molecules/AjouMap/Characters";

import Fog from "@THREE/Atoms/Fog";

import HeightMap from "@THREE/Atoms/HeightMap";

import SideWalks from "@THREE/Molecules/AjouMap/SideWalks";
import StreetLamps from "@THREE/Molecules/AjouMap/StreetLamps";
import Trees from "@THREE/Molecules/AjouMap/Trees";

import { chatAtom } from "@Recoils/MapOption/Chat";
import Benches from "@THREE/Molecules/AjouMap/Benches";

import GardenBoxs from "@THREE/Molecules/AjouMap/GardenBoxs";
import Objects from "@THREE/Molecules/AjouMap/Objects";

import LoadingPage from "@Pages/Loding";
import { userDataAtom } from "@Recoils/UserData";
import MetaContainer from "./styles";

const MapContainer = ({ setJoinedUserNumber }: { setJoinedUserNumber: React.Dispatch<React.SetStateAction<number>> }) => {
  const setChatInfos = useSetRecoilState(chatAtom);
  const [userData, setUserData] = useRecoilState(userDataAtom);

  return (
    <MetaContainer>
      <Canvas>
        <RecoilRoot>
          <OrbitControls />
          <ambientLight />
          <pointLight position={[100, 100, 100]} intensity={1} />
          <Physics gravity={[0, 0, 0]} broadphase="SAP">
            <Suspense
              fallback={
                <Html>
                  <LoadingPage />
                </Html>
              }
            >
              {/* <Debug scale={1} color="black"> */}
              {/* </Debug> */}
              {/* <HeightMap elementSize={0.0371} position={[-52.8, -2, 30.0998]} rotation={[3.14 / 2, 3.14, 3.14]} /> */}
              <HeightMap elementSize={0.0742} position={[-52.9, -2.1, 30.0998]} rotation={[3.14 / 2, 3.14, 3.14]} />
              {/* <HeightMap elementSize={0.1484} position={[-52.8, -2.2, 30.0998]} rotation={[3.14 / 2, 3.14, 3.14]} /> */}
              <Fog />
              <Sky sunPosition={[100, 10, 100]} distance={500} />
              <Characters />
              <Benches />
              <Buildings />
              <GardenBoxs />
              <Grounds />
              <Objects />
              <Roads />
              <SideWalks />
              <StreetLamps />
              <Trees />
            </Suspense>
          </Physics>
          <Keyboard />
          <SocketComponent setJoinedUserNumber={setJoinedUserNumber} roomId={CHANNEL_INFO[0].id} setOutUser={setUserData} setChatInfos={setChatInfos} userData={userData} />
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
