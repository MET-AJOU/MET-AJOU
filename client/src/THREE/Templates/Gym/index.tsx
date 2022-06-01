/* eslint-disable @typescript-eslint/no-unused-vars */
import { Suspense } from "react";
import { Debug, Physics } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { RecoilRoot, useRecoilState, useSetRecoilState } from "recoil";

import { CHANNEL_INFO } from "@Constant/.";

import SocketComponent from "@THREE/Atoms/Socket";
import Characters from "@THREE/Molecules/AjouMap/Characters";
import Keyboard from "@THREE/Atoms/Control/KeyBoard";

import { chatAtom } from "@Recoils/MapOption/Chat";
import LoadingPage from "@Pages/Loding";
import { userDataAtom } from "@Recoils/UserData";

import Ceilings from "@THREE/Molecules/Gym/Ceiling";
import Curtains from "@THREE/Molecules/Gym/Curtain";
import Floors from "@THREE/Molecules/Gym/Floor";
import Stairs from "@THREE/Molecules/Gym/Stair";
import Walls from "@THREE/Molecules/Gym/Walls";

import HeightMap from "@THREE/Molecules/Gym/HeightMap/Gym";
import { MapContainer } from "./styles";

const GymMap = ({ setJoinedUserNumber, setLoading }: { setJoinedUserNumber: React.Dispatch<React.SetStateAction<number>>; setLoading: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const setChatInfos = useSetRecoilState(chatAtom);
  const setUserData = useSetRecoilState(userDataAtom);
  return (
    <MapContainer>
      <Canvas>
        <RecoilRoot>
          <Physics gravity={[0, 0, 0]}>
            <OrbitControls />
            <ambientLight />
            <pointLight position={[100, 100, 100]} intensity={1} />
            <Suspense
              fallback={
                <Html>
                  <LoadingPage setLoading={setLoading} />
                </Html>
              }
            >
              {/* <Debug scale={1} color="black"> */}
              <HeightMap elementSize={0.0117} position={[-7.1, 0.02, 8.1]} rotation={[3.14 / 2, 3.14, 3.14]} />
              <Characters />
              <Ceilings />
              <Curtains />
              <Floors />
              <Stairs />
              <Walls />
              {/* </Debug> */}
            </Suspense>
          </Physics>
          <Keyboard />
          <SocketComponent setJoinedUserNumber={setJoinedUserNumber} roomId={CHANNEL_INFO[3].id} setOutUser={setUserData} setChatInfos={setChatInfos} />
        </RecoilRoot>
      </Canvas>
    </MapContainer>
  );
};

export default GymMap;
