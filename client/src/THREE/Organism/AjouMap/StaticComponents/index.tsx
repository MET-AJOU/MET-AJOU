import { Sky } from "@react-three/drei";

import Fog from "@THREE/Atoms/Fog";
import HeightMap from "@THREE/Atoms/HeightMap";
import { Table, Mat, Artisan, Benches, Buildings, GardenBoxs, AjouMeo, Grounds, Objects, Roads, SideWalks, StreetLamps, Trees, Event } from "@THREE/Molecules/AjouMap";
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
      <Table />
      <Mat />
      <Artisan />
      {/* </Debug> */}
    </>
  );
};

export default React.memo(StaticComponents);
