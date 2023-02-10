import { Sky } from "@react-three/drei";
import HeightMap from "@THREE/Molecules/Talk/HeightMap/Talk";
import React, { useEffect } from "react";
import Fog from "@THREE/Atoms/Fog";
import { Bed, Ceiling, Chair, Closet, Door, HallywayWall, InnerWall, OuterWall, Table } from "@THREE/Molecules/Talk";

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
