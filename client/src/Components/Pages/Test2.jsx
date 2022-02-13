import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import TestContainer from "./styles";
import { OrbitControls } from "@react-three/drei";
import Model from "@Atoms/Model";

const TestPage2 = () => {
  return (
    <TestContainer>
      <Canvas>
        <directionalLight intensity={0.5} />
        <ambientLight intensity={0.2} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </TestContainer>
  );
};

export default TestPage2;
