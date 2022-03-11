/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useBox } from "@react-three/cannon";
import { PerspectiveCamera, useGLTF } from "@react-three/drei";
import useCharacterMovement from "@Hook/Three/useMovement";

const SPEED = -2;

const TestCharacter = ({ src }: { src: string }) => {
  const { nodes, animations } = useGLTF(src);
  console.log(animations);
  const temp = useGLTF(src);
  const keys = Object.keys(nodes);
  const [ref, api] = useBox(() => ({ args: [0.1, 0.1, 0.1], mass: 10, position: [0, 1, 2], type: "Dynamic" }));

  useCharacterMovement({ ref, api });

  return (
    <PerspectiveCamera>
      <group castShadow receiveShadow ref={ref}>
        {keys.map((key) => (
          <mesh key={key} scale={0.003} geometry={(nodes[key] as any).geometry} material={(nodes[key] as any).material} />
        ))}
      </group>
    </PerspectiveCamera>
  );
};

export default TestCharacter;
