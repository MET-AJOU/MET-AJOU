/* eslint-disable @typescript-eslint/no-unused-vars */
import { BoxProps, useConvexPolyhedron } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
import { ShapeOptions, ShapeType, threeToCannon } from "three-to-cannon";

interface Props {
  src: string;
}
const makeVertices = (vertices: any[]): any => vertices.map((vertice: any) => [vertice.x, vertice.y, vertice.z]);

const BuildingGround = ({ src, args, position = [0, 0, 0], rotation = [0, -0.09, 0] }: BoxProps & Props) => {
  const { nodes } = useGLTF(src);

  const CannonOption: ShapeOptions = {
    type: ShapeType.HULL,
  };
  const { shape } = threeToCannon(nodes.building_ground as any, CannonOption) as any;
  const { _, offset } = threeToCannon(nodes.building_ground as any) as any;
  const { vertices, faces, faceNormals: normals, uniqueEdges: axes, boundingSphereRadius } = shape;

  // console.log(shape);
  // console.log(offset);

  const test = () => console.log("hit");

  const [a] = useConvexPolyhedron(() => ({ type: "Static", position: [offset.x, offset.y + 1.2, offset.z], args: [makeVertices(vertices), faces, makeVertices(normals), makeVertices(axes), boundingSphereRadius], mass: 100, onCollide: test }), undefined, [makeVertices(vertices), position, rotation]);

  const { geometry, material } = nodes.building_ground.children[0] as any;

  return (
    <>
      <mesh castShadow position={position} receiveShadow geometry={geometry} material={material} />
      <mesh ref={a} />
    </>
  );
};

export default BuildingGround;
