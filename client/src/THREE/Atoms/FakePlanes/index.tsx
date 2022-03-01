/* eslint-disable @typescript-eslint/no-unused-vars */
import Box from "@THREE/Atoms/Building/test";
import Plane from "@THREE/Atoms/Plane";
import { PlaneProps, usePlane } from "@react-three/cannon";
// import * as THREE from "three";

const FakePlanes = () => {
  // [z축 x축 y축]
  return (
    <>
      {/* <Plane position={[0, 1, 0.566]} args={[7.93, 4.11]} />
      <Plane position={[0.4, 1.575, -3.6]} args={[8.03, 4.0]} rotation={[-Math.PI / 2.39, -0.021, -0.1 ]} />
      <Plane position={[0.8, 2.1, -7.903]} args={[8.03, 4.41]} /> */}
      <Box position={[-1, 0.38, 0.566]} args={[9.73, 1.2, 4.11]} />
      <Box position={[-1, 0.6, -3.6]} args={[9.73, 1.7, 4.8]} rotation={[-Math.PI / 1.09, 0, 0]} />
      <Box position={[-0.1, 1.23, -7.903]} args={[10.03, 1.7, 4.9]} />
    </>
  );
};

export default FakePlanes;
