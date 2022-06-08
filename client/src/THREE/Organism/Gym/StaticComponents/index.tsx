import { Ceilings, Curtains, Floors, Stairs, Walls } from "@THREE/Molecules/Gym";

import HeightMap from "@THREE/Molecules/Gym/HeightMap/Gym";

import React, { useEffect } from "react";

const StaticComponents = ({ setLoading }: { setLoading: React.Dispatch<React.SetStateAction<boolean>> }) => {
  useEffect(() => {
    setLoading(true);
  }, []);
  return (
    <>
      {/* <Debug scale={1} color="black"> */}
      <HeightMap elementSize={0.0117} position={[-7.1, 0.02, 8.1]} rotation={[3.14 / 2, 3.14, 3.14]} />
      <Ceilings />
      <Curtains />
      <Floors />
      <Stairs />
      <Walls />
      {/* </Debug> */}
    </>
  );
};

export default React.memo(StaticComponents);
