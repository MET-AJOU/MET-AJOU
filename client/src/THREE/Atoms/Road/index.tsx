/* eslint-disable @typescript-eslint/no-unused-vars */
import { useBox, BoxProps, useConvexPolyhedron } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
import { ShapeOptions, ShapeType, threeToCannon } from "three-to-cannon";

interface Props {
  src: string;
}

const makeVertices = (vertices: any[]): any => vertices.map((vertice: any) => [vertice.x, vertice.y, vertice.z]);

const Road = ({ src, args, position = [0, 0, 0], rotation = [0, -0.09, 0] }: BoxProps & Props) => {
  const { nodes } = useGLTF(src);
  const CannonOption: ShapeOptions = {
    type: ShapeType.HULL,
  };
  const { shape } = threeToCannon(nodes.road as any, CannonOption) as any;
  const { vertices, faces, faceNormals: normals, uniqueEdges: axes, boundingSphereRadius } = shape;
  const [a] = useConvexPolyhedron(() => ({ type: "Static", args: [makeVertices(vertices), faces, makeVertices(normals), makeVertices(axes), boundingSphereRadius], mass: 100 }), undefined, [makeVertices(vertices), position, rotation]);

  const { geometry, material } = nodes.road.children[0] as any;

  return (
    <>
      <mesh castShadow position={position} receiveShadow geometry={geometry} material={material} />
      <mesh ref={a} />
    </>
  );
};

export default Road;
