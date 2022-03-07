import { useBox, BoxProps } from "@react-three/cannon";

const Box = ({ args = [5, 2.3, 2], position = [0, 0, 0], rotation = [0, -0.09, 0] }: BoxProps) => {
  const [ref] = useBox(() => ({ mass: 100, type: "Static", args, position, rotation }), undefined, [args, position, rotation]);

  // 아래는 테스트용 절대 지우지 마셈
  return (
    <mesh castShadow visible={false} position={position} ref={ref}>
      <boxBufferGeometry attach="geometry" args={args} />
      <meshStandardMaterial color="black" />
    </mesh>
  );
};

export default Box;
