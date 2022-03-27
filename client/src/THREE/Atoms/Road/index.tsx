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
  const { _, offset } = threeToCannon(nodes.road as any) as any;
  const { vertices, faces, faceNormals: normals, uniqueEdges: axes, boundingSphereRadius } = shape;

  // const [ref] = useBox(() => ({ mass: 100, type: "Static", args, position, rotation }), undefined, [args, position, rotation]);
  // const { shape, offset } = threeToCannon(nodes.road as any) as any;
  // const {
  //   convexPolyhedronRepresentation: { vertices, faces, faceNormals: normals, uniqueAxes: axes },
  //   boundingSphereRadius,
  // } = shape;

  const [a] = useConvexPolyhedron(() => ({ type: "Static", position: [offset.x, offset.y + 1.2, offset.z], args: [makeVertices(vertices), faces, makeVertices(normals), makeVertices(axes), boundingSphereRadius], mass: 100 }), undefined, [nodes]);

  const { geometry, material } = nodes.road.children[0] as any;

  return (
    <>
      <mesh castShadow position={position} receiveShadow geometry={geometry} material={material} />
      <mesh ref={a} />
    </>
  );
};

export default Road;
