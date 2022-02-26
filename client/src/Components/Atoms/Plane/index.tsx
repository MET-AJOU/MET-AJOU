import { usePlane, BoxProps } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
// import * as THREE from "three";

interface Props {
  src: string;
  // position: number[];
}
const Plane = ({ src, position = [0, 0, 0], rotation = [0, -0.09, 0] }: BoxProps & Props) => {
  // const Building = ({ src, position }: Props) => {
  const { nodes } = useGLTF(src);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [ref] = usePlane(() => ({ position, rotation }), undefined, [position, rotation]);
  // const { nodes, materials } = useGLTF(src);
  const nodeKey = Object.keys(nodes)[0];
  return <mesh ref={ref} castShadow receiveShadow geometry={(nodes[nodeKey] as any).geometry} material={(nodes[nodeKey] as any).material} />;
  // return <mesh position={new THREE.Vector3(...position)} castShadow receiveShadow geometry={(nodes[nodeKey] as any).geometry} material={(nodes[nodeKey] as any).material} />;
};

export default Plane;
