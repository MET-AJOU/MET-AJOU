/* eslint-disable @typescript-eslint/no-unused-vars */
// import { Suspense } from "react";
import { OrbitControls, Sky, Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics, Debug } from "@react-three/cannon";
import { RecoilRoot, useRecoilState, useSetRecoilState } from "recoil";

import { CHANNEL_INFO } from "@Constant/.";

import Keyboard from "@THREE/Atoms/Control/KeyBoard";
import SocketComponent from "@THREE/Atoms/Socket";
import Characters from "@THREE/Molecules/AjouMap/Characters";

import Fog from "@THREE/Atoms/Fog";

import { chatAtom } from "@Recoils/MapOption/Chat";

import { userDataAtom } from "@Recoils/UserData";
import LoadingPage from "@Pages/Loding";
import { Suspense } from "react";
import Bed from "@THREE/Molecules/Talk/Bed";
import Ceiling from "@THREE/Molecules/Talk/Ceiling";
import Chair from "@THREE/Molecules/Talk/Chair";
import Closet from "@THREE/Molecules/Talk/Closet";
import HallywayWall from "@THREE/Molecules/Talk/HallywayWall";
import InnerWall from "@THREE/Molecules/Talk/InnerWall";
import OuterWall from "@THREE/Molecules/Talk/OuterWall";
import Table from "@THREE/Molecules/Talk/Table";
import Floor from "@THREE/Molecules/Gym/Floor";
import Door from "@THREE/Molecules/Talk/Door";
import HeightMap from "@THREE/Molecules/Talk/HeightMap/Talk";
import StaticComponents from "@THREE/Organism/Talk/StaticComponents";
import MetaContainer from "./styles";

const TalkContainer = ({ setJoinedUserNumber, setLoading }: { setJoinedUserNumber: React.Dispatch<React.SetStateAction<number>>; setLoading: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const setChatInfos = useSetRecoilState(chatAtom);
  const [userData, setUserData] = useRecoilState(userDataAtom);

  return (
    <MetaContainer>
      <Canvas>
        <RecoilRoot>
          <OrbitControls />
          <ambientLight />
          <pointLight position={[100, 100, 100]} intensity={1} />
          <Physics gravity={[0, 0, 0]}>
            <Suspense
              fallback={
                <Html>
                  <LoadingPage />
                </Html>
              }
            >
              <StaticComponents setLoading={setLoading} />
            </Suspense>
            <Suspense fallback={null}>
              <Characters />
            </Suspense>
          </Physics>
          <Keyboard />
          <SocketComponent setJoinedUserNumber={setJoinedUserNumber} roomId={CHANNEL_INFO[1].id} setOutUser={setUserData} setChatInfos={setChatInfos} userData={userData} />
        </RecoilRoot>
      </Canvas>
    </MetaContainer>
  );
};

export default TalkContainer;

// [z축 x축 y축]

// position [0] : - 왼쪽 + 오른쪽
// position [1] : 높이
// position [2] : + 아래 , - 위

// args [0] : 좌우 중심에서 길어지고 짧아짐
// args [1] : 높이 위아래
// args [2] : 위아래 중심에서 길어지고 짧아짐

// rotation [0] : 수직으로 세워짐
// rotation [1] : 회전
