import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Model from "@Atoms/Model";
import TestContainer from "./styles";

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
