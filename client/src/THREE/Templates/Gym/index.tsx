/* eslint-disable @typescript-eslint/no-unused-vars */
import { Suspense } from "react";
import { Debug, Physics } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { RecoilRoot, useRecoilState, useSetRecoilState } from "recoil";

import { CHANNEL_INFO } from "@Constant/.";

import SocketComponent from "@THREE/Atoms/Socket";
import Keyboard from "@THREE/Atoms/Control/KeyBoard";

import { chatAtom } from "@Recoils/MapOption/Chat";
import LoadingPage from "@Pages/Loding";
import { userDataAtom } from "@Recoils/UserData";
import StaticComponents from "@THREE/Organism/Gym/StaticComponents";
import Characters from "@THREE/Molecules/AjouMap/Characters";
import { MapContainer } from "./styles";

const GymMap = ({ setJoinedUserNumber, setLoading }: { setJoinedUserNumber: React.Dispatch<React.SetStateAction<number>>; setLoading: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const setChatInfos = useSetRecoilState(chatAtom);
  const [userData, setUserData] = useRecoilState(userDataAtom);
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
          <SocketComponent setJoinedUserNumber={setJoinedUserNumber} roomId={CHANNEL_INFO[3].id} setOutUser={setUserData} setChatInfos={setChatInfos} userData={userData} />
        </RecoilRoot>
      </Canvas>
    </MapContainer>
  );
};

export default GymMap;
