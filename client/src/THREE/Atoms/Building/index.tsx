/* eslint-disable @typescript-eslint/no-unused-vars */
import { useBox, BoxProps } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
// import * as THREE from "three";

interface Props {
  src: string;
  color: string;
  // position: number[];
}
const Building = ({ color = "white", src, args, position = [0, 0, 0], rotation = [0, -0.09, 0] }: BoxProps & Props) => {
  // const Building = ({ src, position }: Props) => {
  const { nodes } = useGLTF(src);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [ref, api] = useBox(() => ({ mass: 100, type: "Static", args, position, rotation }), undefined, [args, position, rotation]);

  // useEffect(() => {
  //   console.log(ref.current, nodes);
  //   console.log(src);
  // }, [ref]);

  // // const { nodes, materials } = useGLTF(src);
  const nodeKey = Object.keys(nodes)[0];
  return <mesh ref={ref} castShadow receiveShadow geometry={(nodes[nodeKey] as any).geometry} material={(nodes[nodeKey] as any).material} />;
  // 아래는 테스트용 절대 지우지 마셈
  // return (
  //   <mesh castShadow position={position} ref={ref}>
  //     <boxBufferGeometry attach="geometry" args={args} />
  //     <meshStandardMaterial color={color} />
  //   </mesh>
  // );
  // return <mesh position={new THREE.Vector3(...position)} castShadow receiveShadow geometry={(nodes[nodeKey] as any).geometry} material={(nodes[nodeKey] as any).material} />;
};

export default Building;
