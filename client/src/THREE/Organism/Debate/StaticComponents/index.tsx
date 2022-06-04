import Ceilings from "@THREE/Molecules/Debate/Ceilings";
import Chairs from "@THREE/Molecules/Debate/Chairs";
import Floors from "@THREE/Molecules/Debate/Floors";
import HeightMap from "@THREE/Molecules/Debate/HeightMap/Debate";
import OutWalls from "@THREE/Molecules/Debate/OutWalls";
import Props from "@THREE/Molecules/Debate/Props";
import Room from "@THREE/Molecules/Debate/Room";
import Tables from "@THREE/Molecules/Debate/Tables";
import Walls from "@THREE/Molecules/Debate/Walls";
import Windows from "@THREE/Molecules/Debate/Windows";
import React, { useEffect } from "react";

const StaticComponents = ({ setLoading }: { setLoading: React.Dispatch<React.SetStateAction<boolean>> }) => {
  useEffect(() => {
    setLoading(true);
  }, []);
  return (
    <>
      {/* <Debug scale={1} color="black"> */}
      <HeightMap elementSize={0.0027} position={[-1.72, -0.056, 1.65]} rotation={[3.14 / 2, 3.14, 3.14]} />
      <Ceilings />
      <Chairs />
      <Floors />
      <OutWalls />
      <Props />
      <Room />
      <Tables />
      <Walls />
      <Windows />
      {/* </Debug> */}
    </>
  );
};

export default React.memo(StaticComponents);
