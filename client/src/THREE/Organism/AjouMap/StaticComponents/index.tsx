import { Sky } from "@react-three/drei";

import Fog from "@THREE/Atoms/Fog";
import HeightMap from "@THREE/Atoms/HeightMap";
import AjouMeo from "@THREE/Molecules/AjouMap/AjouMeo";
import Benches from "@THREE/Molecules/AjouMap/Benches";
import Buildings from "@THREE/Molecules/AjouMap/Buildings";
import Event from "@THREE/Molecules/AjouMap/Event";
import GardenBoxs from "@THREE/Molecules/AjouMap/GardenBoxs";
import Grounds from "@THREE/Molecules/AjouMap/Grounds";
import Objects from "@THREE/Molecules/AjouMap/Objects";
import Roads from "@THREE/Molecules/AjouMap/Roads";
import SideWalks from "@THREE/Molecules/AjouMap/SideWalks";
import StreetLamps from "@THREE/Molecules/AjouMap/StreetLamps";
import Trees from "@THREE/Molecules/AjouMap/Trees";
import React, { useEffect } from "react";

const StaticComponents = ({ setLoading }: { setLoading: React.Dispatch<React.SetStateAction<boolean>> }) => {
  useEffect(() => {
    setLoading(true);
  }, []);
  return (
    <>
      {/* <Debug scale={1} color="black"> */}
      <HeightMap elementSize={0.0742} position={[-52.9, -0.5, 30.0998]} rotation={[3.14 / 2, 3.14, 3.14]} />
      <Fog />
      <Sky sunPosition={[100, 10, 100]} distance={500} />
      <Benches />
      <Buildings />
      <GardenBoxs />
      <AjouMeo />
      <Event />
      <Grounds />
      <Objects />
      <Roads />
      <SideWalks />
      <StreetLamps />
      <Trees />
      {/* </Debug> */}
    </>
  );
};

export default React.memo(StaticComponents);
