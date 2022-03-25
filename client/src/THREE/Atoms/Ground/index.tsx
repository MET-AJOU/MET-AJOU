/* eslint-disable @typescript-eslint/no-unused-vars */
import { useBox, BoxProps, useConvexPolyhedron, ConvexPolyhedronArgs } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { Object3D } from "three";
import { threeToCannon, ShapeType } from "three-to-cannon";

interface Props {
  src: string;
}

const makeVertices = (vertices: any[]): any => vertices.map((vertice: any) => [vertice.x, vertice.y, vertice.z]);

const Ground = ({ src, args, position = [0, 0, 0], rotation = [0, -0.09, 0] }: BoxProps & Props) => {
  const { nodes } = useGLTF(src);

  const { geometry, material } = nodes.out_ground as any;

  const { shape, offset } = threeToCannon(nodes.out_ground.children[0] as any) as any;

  const {
    convexPolyhedronRepresentation: { vertices, faces, faceNormals: normals, uniqueAxes: axes },
    boundingSphereRadius,
  } = shape;

  const test = () => console.log("hit");

  const [a] = useConvexPolyhedron(() => ({ type: "Static", position: [offset.x, offset.y + 1.2, offset.z], args: [makeVertices(vertices), faces, makeVertices(normals), makeVertices(axes), boundingSphereRadius], mass: 100, onCollide: test }), undefined, [nodes]);

  return (
    <>
      <mesh castShadow position={position} receiveShadow geometry={geometry} material={material} />
      <mesh ref={a} />
    </>
  );
};

export default Ground;
