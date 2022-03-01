/* eslint-disable @typescript-eslint/no-unused-vars */
import { PlaneProps, usePlane } from "@react-three/cannon";

const Plane = ({ args, position = [0, 0, 0], rotation = [-Math.PI / 2, 0, -0.1] }: PlaneProps) => {
  const [ref] = usePlane(() => ({ mass: 10, position, rotation, type: "Static" }), undefined, [position, rotation]);
  return (
    <mesh ref={ref} castShadow visible>
      <planeGeometry args={args as any} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
};

export default Plane;
