/* eslint-disable @typescript-eslint/no-unused-vars */
import { useBox, BoxProps } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";

interface Props {
  src: string;
  color: string;
}
const Building = ({ color = "white", src, args, position = [0, 0, 0], rotation = [0, -0.09, 0] }: BoxProps & Props) => {
  const { nodes } = useGLTF(src) as any;

  const [ref] = useBox(() => ({ mass: 100, type: "Static", args, position, rotation }), undefined, [args, position, rotation]);

  const { geometry, material } = nodes.road.children[0] as any;

  return <mesh ref={ref} castShadow receiveShadow geometry={geometry} material={material} />;
  // 아래는 테스트용 절대 지우지 마셈
  // return (
  //   <mesh castShadow position={position} ref={ref}>
  //     <boxBufferGeometry attach="geometry" args={args} />
  //     <meshStandardMaterial color={color} />
  //   </mesh>
  // );
};

export default Building;
