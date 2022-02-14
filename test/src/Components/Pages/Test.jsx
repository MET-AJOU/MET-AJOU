import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import TestContainer from "./styles";
import { OrbitControls } from "@react-three/drei";

import Character from "../Atoms/Character";
import Building from "@Atoms/Building/.";

const TestPage = () => {
  const [cameraPosition, setcameraPosition] = useState({ x: 0, y: 0, z: 0 });
  const { x, y, z } = cameraPosition;

  return (
    <Suspense fallback={null}>
      <TestContainer>
        <Canvas>
          <OrbitControls />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Building position={[0, 0, 0]} src="models/ajou_building_01.gltf" />
          <Character />
        </Canvas>
      </TestContainer>
    </Suspense>
  );
};

export default TestPage;
