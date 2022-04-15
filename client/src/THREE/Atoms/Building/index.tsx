/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { BoxProps, Triplet, useConvexPolyhedron } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
import { threeToCannon, ShapeOptions, ShapeType } from "three-to-cannon";

interface Props {
  src: string;
  블락함수?: any;
}
const makeVertices = (vertices: any[]): any => vertices?.map((vertice: any) => [vertice.x, vertice.y, vertice.z]);
const Building = ({ src, 블락함수, position = 포지션, rotation = 로테이션 }: BoxProps & Props) => {
  const { nodes } = useGLTF(src) as any;
  const 키 = Object.keys(nodes)[0];

  const { geometry, material } = nodes[키] as any;
  const {
    shape: { vertices, faces, faceNormals: normals, uniqueEdges: axes, boundingSphereRadius },
  } = threeToCannon(nodes[키] as any, 옵션) as any;

  const [a] = useConvexPolyhedron(() => ({ type: "Static", args: [makeVertices(vertices), faces, makeVertices(normals), makeVertices(axes), boundingSphereRadius], mass: 100, onCollide: 블락함수 ?? undefined }), undefined, [makeVertices(vertices), position, rotation]);

  return (
    <>
      <mesh castShadow position={position} receiveShadow geometry={geometry} material={material} />
      <mesh ref={a} />
    </>
  );
};

const 포지션: Triplet = [0, 0, 0];
const 로테이션: Triplet = [0, -0.09, 0];
const 옵션: ShapeOptions = {
  type: ShapeType.HULL,
};

export default Building;
