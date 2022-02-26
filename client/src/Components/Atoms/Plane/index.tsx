/* eslint-disable @typescript-eslint/no-unused-vars */
import { PlaneProps, usePlane } from "@react-three/cannon";
// import * as THREE from "three";

const Plane = ({ args, position = [0, 0, 0], rotation = [-Math.PI / 2, 0, -0.1] }: PlaneProps) => {
  const [ref] = usePlane(() => ({ mass: 10, position, rotation, type: "Static" }), undefined, [position, rotation]);
  // const { nodes, materials } = useGLTF(src);
  return (
    <mesh ref={ref} castShadow visible>
      <planeGeometry args={args as any} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
  // return <mesh position={new THREE.Vector3(...position)} castShadow receiveShadow geometry={(nodes[nodeKey] as any).geometry} material={(nodes[nodeKey] as any).material} />;
};

export default Plane;
