import { Suspense } from "react";
import { Physics } from "@react-three/cannon";
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
                  <LoadingPage setLoading={setLoading} />
                </Html>
              }
            >
              <Characters />
              <Ceilings />
              <Curtains />
              <Floors />
              <Stairs />
              <Walls />
            </Suspense>
          </Physics>
          <Keyboard />
          <SocketComponent setJoinedUserNumber={setJoinedUserNumber} roomId={CHANNEL_INFO[2].id} setOutUser={setUserData} setChatInfos={setChatInfos} userData={userData} />
        </RecoilRoot>
      </Canvas>
    </MapContainer>
  );
};

export default GymMap;
