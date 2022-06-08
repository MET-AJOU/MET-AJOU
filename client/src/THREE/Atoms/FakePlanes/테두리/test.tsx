/* eslint-disable @typescript-eslint/no-unused-vars */
import { useBox, BoxProps } from "@react-three/cannon";

const Box = ({ args = [5, 2.3, 2], position = [0, 0, 0], rotation = [0, -0.09, 0], color }: BoxProps & { color: string }) => {
  const [ref] = useBox(
    () => ({
      mass: 100,
      type: "Static",
      args,
      position,
      rotation,
    }),
    undefined,
    [args, position, rotation]
  );

  // 아래는 테스트용 절대 지우지 마셈
  return (
    // <mesh castShadow position={position} ref={ref}>
    <mesh castShadow position={position} visible={false} ref={ref}>
      <boxBufferGeometry attach="geometry" args={args} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Box;
