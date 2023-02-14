/* eslint-disable @typescript-eslint/no-unused-vars */
import { OrbitControls, Html, PointerLockControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { RecoilRoot, useRecoilState, useSetRecoilState } from "recoil";

import { CHANNEL_INFO } from "@Constant/.";

import Keyboard from "@THREE/Atoms/Control/KeyBoard";
import SocketComponent from "@THREE/Atoms/Socket";
import Characters from "@THREE/Molecules/AjouMap/Characters";

import { chatAtom } from "@Recoils/MapOption/Chat";
import { userDataAtom } from "@Recoils/UserData";
import LoadingPage from "@Pages/Loding";
import React, { Suspense } from "react";
import StaticComponents from "@THREE/Organism/AjouMap/StaticComponents";
import MetaContainer from "./styles";

const MapContainer = ({ setJoinedUserNumber, setLoading }: { setJoinedUserNumber: React.Dispatch<React.SetStateAction<number>>; setLoading: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const setChatInfos = useSetRecoilState(chatAtom);
  const [userData, setUserData] = useRecoilState(userDataAtom);

  return (
    <MetaContainer>
      <Canvas>
        <RecoilRoot>
          <ambientLight />
          <PointerLockControls />
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
          <SocketComponent setJoinedUserNumber={setJoinedUserNumber} roomId={CHANNEL_INFO[0].id} setOutUser={setUserData} setChatInfos={setChatInfos} userData={userData} />
        </RecoilRoot>
      </Canvas>
    </MetaContainer>
  );
};

export default MapContainer;
