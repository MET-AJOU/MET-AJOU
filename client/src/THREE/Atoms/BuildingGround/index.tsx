/* eslint-disable @typescript-eslint/no-unused-vars */
import { useBox, BoxProps, useConvexPolyhedron } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
import { threeToCannon } from "three-to-cannon";

interface Props {
  src: string;
}
const makeVertices = (vertices: any[]): any => vertices.map((vertice: any) => [vertice.x, vertice.y, vertice.z]);

const BuildingGround = ({ src, args, position = [0, 0, 0], rotation = [0, -0.09, 0] }: BoxProps & Props) => {
  const { nodes } = useGLTF(src);

  // console.log(nodes);
  const { shape, offset } = threeToCannon(nodes.building_ground.children[0] as any) as any;
  const {
    convexPolyhedronRepresentation: { vertices, faces, faceNormals: normals, uniqueAxes: axes },
    boundingSphereRadius,
  } = shape;

  const test = () => console.log("hit");

  const [a] = useConvexPolyhedron(() => ({ type: "Static", position: [offset.x, offset.y + 1.2, offset.z], args: [makeVertices(vertices), faces, makeVertices(normals), makeVertices(axes), boundingSphereRadius], mass: 100, onCollide: test }), undefined, [nodes]);

  const { geometry, material } = nodes.building_ground.children[0] as any;
  console.log(shape, offset);
  return (
    <>
      <mesh castShadow position={position} receiveShadow geometry={geometry} material={material} />
      <mesh ref={a} />
    </>
  );
};

export default BuildingGround;
