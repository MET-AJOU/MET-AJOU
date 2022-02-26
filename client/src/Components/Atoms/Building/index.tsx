import { useBox, BoxProps } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
// import * as THREE from "three";

interface Props {
  src: string;
  // position: number[];
}
const Building = ({ src, args = [5, 2.3, 2], position = [0, 0, 0], rotation = [0, -0.09, 0] }: BoxProps & Props) => {
  // const Building = ({ src, position }: Props) => {
  const { nodes } = useGLTF(src);
  console.log(args);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [ref] = useBox(() => ({ mass: 100, type: "Static", args, position, rotation }), undefined, [args, position, rotation]);
  console.log(ref.current, nodes);
  console.log(src);
  // const { nodes, materials } = useGLTF(src);
  const nodeKey = Object.keys(nodes)[0];
  return <mesh ref={ref} castShadow receiveShadow geometry={(nodes[nodeKey] as any).geometry} material={(nodes[nodeKey] as any).material} />;
  // return <mesh position={new THREE.Vector3(...position)} castShadow receiveShadow geometry={(nodes[nodeKey] as any).geometry} material={(nodes[nodeKey] as any).material} />;
};

export default Building;
