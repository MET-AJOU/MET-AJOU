/* eslint-disable @typescript-eslint/no-unused-vars */
import { useBox } from "@react-three/cannon";

const Cube = (props: any) => {
  const [ref] = useBox(() => ({ mass: 1, position: [-5, 2, 0], args: [2, 1, 2] }));
  return (
    <mesh ref={ref}>
      <boxGeometry />
    </mesh>
  );
};
export default Cube;
