/* eslint-disable @typescript-eslint/no-unused-vars */
import { BoxProps, useConvexPolyhedron } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
import { ShapeOptions, ShapeType, threeToCannon } from "three-to-cannon";

interface Props {
  src: string;
}

const makeVertices = (vertices: any[]): any => vertices?.map((vertice: any) => [vertice.x, vertice.y, vertice.z]);

const Ground = ({ src, args, position = [0, 0, 0], rotation = [0, -0.09, 0] }: BoxProps & Props) => {
  const { nodes } = useGLTF(src);
  const { geometry, material } = nodes.out_ground.children[0] as any;

  const CannonOption: ShapeOptions = {
    type: ShapeType.HULL,
  };
  const { shape } = threeToCannon(nodes.out_ground.children[0] as any, CannonOption) as any;
  const { _, offset } = threeToCannon(nodes.out_ground.children[0] as any) as any;
  const { vertices, faces, faceNormals: normals, uniqueEdges: axes, boundingSphereRadius } = shape;

  const { shape: testShape } = threeToCannon(nodes.out_ground.children[0] as any) as any;
  const { vertices: testVertices, faces: testFaces, faceNormals: testNormals, uniqueEdges: testAxes, boundingSphereRadius: testRadius } = testShape.convexPolyhedronRepresentation;
  console.log(testShape);
  // console.log(shape);
  console.log("new : ", [makeVertices(vertices), faces, makeVertices(normals), makeVertices(axes), boundingSphereRadius]);
  console.log("old : ", [makeVertices(testVertices), testFaces, makeVertices(testNormals), makeVertices(testAxes), testRadius]);
  console.log("offset : ", offset);
  const test = () => console.log("hit");
  // const [a] = useConvexPolyhedron(() => ({ type: "Static", position: [offset.x, offset.y + 1.2, offset.z], args: [makeVertices(vertices), faces, makeVertices(normals), makeVertices(axes), boundingSphereRadius], mass: 100, onCollide: test }), undefined, [makeVertices(vertices), position, rotation]);
  const [a] = useConvexPolyhedron(() => ({ type: "Static", position: [offset.x, offset.y + 1.2, offset.z], args: [makeVertices(vertices), faces, makeVertices(normals), makeVertices(axes), boundingSphereRadius], mass: 100, onCollide: test }), undefined, [makeVertices(vertices), position, rotation]);

  return (
    <>
      <mesh castShadow position={position} receiveShadow geometry={geometry} material={material} />
      <mesh ref={a} />
    </>
  );
};

export default Ground;
