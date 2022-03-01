import { usePlane } from "@react-three/cannon";

const BasicPlane = ({ ...props }) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
  return (
    <mesh receiveShadow ref={ref}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="black" />
    </mesh>
  );
};

export default BasicPlane;
