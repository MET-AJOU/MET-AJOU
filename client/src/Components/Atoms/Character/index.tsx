import { SphereProps, useSphere } from "@react-three/cannon";

const Character = ({ position }: SphereProps) => {
  const [ref] = useSphere(() => ({ mass: 10, position }));
  return (
    <mesh castShadow ref={ref}>
      <sphereBufferGeometry attach="geometry" args={[1, 32, 32]} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
};

export default Character;
