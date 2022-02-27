/* eslint-disable @typescript-eslint/no-unused-vars */
import { useBox, BoxProps } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
// import * as THREE from "three";

const Box = ({ args = [5, 2.3, 2], position = [0, 0, 0], rotation = [0, -0.09, 0] }: BoxProps) => {
  const [ref, api] = useBox(() => ({ mass: 100, type: "Static", args, position, rotation }), undefined, [args, position, rotation]);

  // 아래는 테스트용 절대 지우지 마셈
  return (
    <mesh castShadow visible={false} position={position} ref={ref}>
      <boxBufferGeometry attach="geometry" args={args} />
      <meshStandardMaterial color="black" />
    </mesh>
  );
  // return <mesh position={new THREE.Vector3(...position)} castShadow receiveShadow geometry={(nodes[nodeKey] as any).geometry} material={(nodes[nodeKey] as any).material} />;
};

export default Box;
