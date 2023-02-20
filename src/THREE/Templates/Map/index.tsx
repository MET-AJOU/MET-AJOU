import { Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { RecoilRoot, useRecoilState, useSetRecoilState } from "recoil";

import { CHANNEL_INFO } from "@Constant/.";
import Camera from "@THREE/Atoms/Camera";
import Keyboard from "@THREE/Atoms/Control/KeyBoard";
import SocketComponent from "@THREE/Atoms/Socket";
import Characters from "@THREE/Molecules/AjouMap/Characters";

import { chatAtom } from "@Recoils/MapOption/Chat";
import { userDataAtom } from "@Recoils/UserData";
import LoadingPage from "@Pages/Loding";
import React, { ReactNode, Suspense, useRef } from "react";
import type { PositionType } from "@Type/.";

import { START_CHARACTER_POSITION } from "@Constant/Three";
import MetaContainer from "./styles";

const MapContainer = ({ setJoinedUserNumber, children }: { setJoinedUserNumber: React.Dispatch<React.SetStateAction<number>>; children: ReactNode }) => {
  const setChatInfos = useSetRecoilState(chatAtom);
  const [userData, setUserData] = useRecoilState(userDataAtom);
  const myPosition = useRef<PositionType>(START_CHARACTER_POSITION);

  return (
    <MetaContainer>
      <Canvas>
        <RecoilRoot>
          <ambientLight />
          <Camera myPosition={myPosition} />
          <pointLight position={[100, 100, 100]} intensity={1} />
          <Physics gravity={[0, 0, 0]}>
            <Suspense
              fallback={
                <Html>
                  <LoadingPage />
                </Html>
              }
            >
              {children}
            </Suspense>
            <Suspense fallback={null}>
              <Characters myPosition={myPosition} />
            </Suspense>
          </Physics>
          <Keyboard myPosition={myPosition} />
          <SocketComponent setJoinedUserNumber={setJoinedUserNumber} roomId={CHANNEL_INFO[0].id} setOutUser={setUserData} setChatInfos={setChatInfos} userData={userData} />
        </RecoilRoot>
      </Canvas>
    </MetaContainer>
  );
};

export default MapContainer;
