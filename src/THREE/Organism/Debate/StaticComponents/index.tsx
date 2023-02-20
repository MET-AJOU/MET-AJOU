import { Props, Ceilings, Chairs, Floors, OutWalls, Room, Tables, Walls, Windows } from "@THREE/Molecules/Debate";
import HeightMap from "@THREE/Molecules/Debate/HeightMap/Debate";
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
