import { useGLTF } from "@react-three/drei";
// import * as THREE from "three";

interface Props {
  src: string;
  // position: number[];
}
const Building = ({ src }: Props) => {
  // const Building = ({ src, position }: Props) => {
  const { nodes } = useGLTF(src);
  // const { nodes, materials } = useGLTF(src);
  const nodeKey = Object.keys(nodes)[0];
  return <mesh castShadow receiveShadow geometry={(nodes[nodeKey] as any).geometry} material={(nodes[nodeKey] as any).material} />;
  // return <mesh position={new THREE.Vector3(...position)} castShadow receiveShadow geometry={(nodes[nodeKey] as any).geometry} material={(nodes[nodeKey] as any).material} />;
};

export default Building;
