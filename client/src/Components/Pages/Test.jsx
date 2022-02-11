import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import TestContainer from "./styles";
import { OrbitControls } from "@react-three/drei";

const Box = (props) => {
  const mesh = useRef();

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => (mesh.current.rotation.x += 0.01));

  return (
    <mesh
      {...props}
      ref={mesh}
      //   scale={1}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      {/* <meshStandardMaterial color={"orange"} /> */}
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
};
const TestPage = () => {
  return (
    <TestContainer>
      <Canvas>
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, -0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </TestContainer>
  );
};

export default TestPage;
