/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/require-default-props */
// import { BoxProps, Triplet, useHeightfield } from "@react-three/cannon";
import { BoxProps, Triplet, useConvexPolyhedron } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
import { ShapeOptions, ShapeType, threeToCannon } from "three-to-cannon";

interface Props {
  src: string;
  키: string;
  블락함수?: any;
}

const makeVertices = (vertices: any[]): any => vertices?.map((vertice: any) => [vertice.x, vertice.y, vertice.z]);

const Ground = ({ src, 키, 블락함수, position = 포지션, rotation = 로테이션 }: BoxProps & Props) => {
  const { nodes, materials } = useGLTF(src) as any;
  const { geometry, material } = nodes[키] ? (nodes[키].children[0] as any) : nodes.geometry ? nodes : nodes[Object.keys(nodes)[0]];

  return <mesh castShadow position={position} receiveShadow geometry={geometry} material={material} />;
};

export default Ground;

const 포지션: Triplet = [0, 0, 0];
export const 로테이션: Triplet = [0, -0.09, 0];
const 옵션: ShapeOptions = {
  type: ShapeType.HULL,
};
