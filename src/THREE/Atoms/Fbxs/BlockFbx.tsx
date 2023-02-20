/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/require-default-props */
import { Triplet, useConvexPolyhedron } from "@react-three/cannon";
import { useFBX } from "@react-three/drei";
import { Object3D } from "three";
import { ShapeOptions, ShapeType, threeToCannon } from "three-to-cannon";

export const BlockFbx = ({ src, size }: { src: string; size?: number }) => {
  const temp = useFBX(src);
  const { geometry, material } = temp.children[0] as fbxChildrenType;

  const {
    shape: { vertices, faces, faceNormals: normals, uniqueEdges: axes, boundingSphereRadius },
  } = threeToCannon(temp as any, 옵션) as any;

  const [a] = useConvexPolyhedron(() => ({ type: "Static", args: [makeVertices(vertices), faces, makeVertices(normals), makeVertices(axes), boundingSphereRadius], mass: 100, onCollide: undefined }), undefined, [makeVertices(vertices), 포지션, 로테이션]);

  return (
    <>
      <mesh castShadow position={포지션} receiveShadow geometry={geometry} material={material} />
      <mesh ref={a} />
    </>
  );
};

interface fbxChildrenType extends Object3D<Event> {
  geometry: any;
  material: any;
}

const makeVertices = (vertices: any[]): any => vertices?.map((vertice: any) => [vertice.x, vertice.y, vertice.z]);

const 옵션: ShapeOptions = {
  type: ShapeType.HULL,
};
const 포지션: Triplet = [0, 0, 0];
const 로테이션: Triplet = [0, -0.09, 0];
