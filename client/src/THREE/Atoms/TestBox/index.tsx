import { useBox } from "@react-three/cannon";

const TestBox = (props: any) => {
  const [ref] = useBox(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    mass: 10,
    type: "Dynamic",
    args: [0.1, 0.1, 0.1],
    ...props,
  }));

  return (
    // eslint-disable-next-line react/destructuring-assignment
    <mesh castShadow position={props.position} ref={ref}>
      <boxBufferGeometry attach="geometry" args={[0.1, 0.1, 0.1]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
};

export default TestBox;
