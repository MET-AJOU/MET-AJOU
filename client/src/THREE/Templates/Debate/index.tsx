import { Suspense } from "react";
import { Physics } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";

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

import SocketComponent from "@THREE/Atoms/Socket";
import Characters from "@THREE/Molecules/AjouMap/Characters";
import Keyboard from "@THREE/Atoms/Control/KeyBoard";

import { myUserIdAtom } from "@Recoils/Characters";
import { chatAtom } from "@Recoils/MapOption/Chat";
import LoadingPage from "@Pages/Loding";
import { userDataAtom } from "@Recoils/UserData";
import { MapContainer } from "./styles";

const DebateMap = ({ setJoinedUserNumber }: { setJoinedUserNumber: React.Dispatch<React.SetStateAction<number>> }) => {
  const setUserId = useSetRecoilState(myUserIdAtom);
  const setChatInfos = useSetRecoilState(chatAtom);
  const userData = useRecoilValue(userDataAtom);
  return (
    <MapContainer>
      <Canvas>
        <RecoilRoot>
          <Physics gravity={[0, 0, 0]} broadphase="SAP">
            <OrbitControls />
            <ambientLight />
            <pointLight position={[100, 100, 100]} intensity={1} />
            <Suspense
              fallback={
                <Html>
                  <LoadingPage />
                </Html>
              }
            >
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
            </Suspense>
          </Physics>
          <Keyboard />
          <SocketComponent setJoinedUserNumber={setJoinedUserNumber} roomId={CHANNEL_INFO[2].id} setUserId={setUserId} setChatInfos={setChatInfos} userData={userData} />
        </RecoilRoot>
      </Canvas>
    </MapContainer>
  );
};

export default DebateMap;
