import { Sky } from "@react-three/drei";
import Bed from "@THREE/Molecules/Talk/Bed";
import Ceiling from "@THREE/Molecules/Talk/Ceiling";
import Chair from "@THREE/Molecules/Talk/Chair";
import Closet from "@THREE/Molecules/Talk/Closet";
import Door from "@THREE/Molecules/Talk/Door";
import HallywayWall from "@THREE/Molecules/Talk/HallywayWall";
import HeightMap from "@THREE/Molecules/Talk/HeightMap/Talk";
import InnerWall from "@THREE/Molecules/Talk/InnerWall";
import OuterWall from "@THREE/Molecules/Talk/OuterWall";
import Table from "@THREE/Molecules/Talk/Table";
import React, { useEffect } from "react";
import Fog from "@THREE/Atoms/Fog";

const StaticComponents = ({ setLoading }: { setLoading: React.Dispatch<React.SetStateAction<boolean>> }) => {
  useEffect(() => {
    setLoading(true);
  }, []);
  return (
    <>
      {/* <Debug scale={1} color="black"> */}
      <HeightMap elementSize={0.0112} position={[-5.7, 0, 8.645]} rotation={[3.14 / 2, 3.14, 3.14]} />
      <Fog />
      <Sky sunPosition={[100, 10, 100]} distance={500} />

      <Bed />
      <Ceiling />
      <Chair />
      <Closet />
      <Door />
      <HallywayWall />
      <InnerWall />
      <OuterWall />
      <Table />
      {/* </Debug> */}
    </>
  );
};

export default React.memo(StaticComponents);
