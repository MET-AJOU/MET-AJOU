/* eslint-disable @typescript-eslint/no-unused-vars */
import { useBox, BoxProps } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";

interface Props {
  src: string;
}
const BuildingGround = ({ src, args, position = [0, 0, 0], rotation = [0, -0.09, 0] }: BoxProps & Props) => {
  const { nodes } = useGLTF(src);

  const [ref] = useBox(() => ({ mass: 100, type: "Static", args, position, rotation }), undefined, [args, position, rotation]);
  // console.log(nodes);
  const { geometry, material } = nodes.building_ground.children[0] as any;

  return <mesh ref={ref} castShadow receiveShadow geometry={geometry} material={material} />;
};

export default BuildingGround;
