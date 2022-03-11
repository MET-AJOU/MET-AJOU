/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { PerspectiveCamera, useAnimations, useFBX, useGLTF } from "@react-three/drei";
import useCharacterMovement from "@Hook/Three/useMovement";
import { useBox } from "@react-three/cannon";
import { useRef } from "react";

const SPEED = -2;

const TestCharacter = ({ src }: { src: string }) => {
  const groupRef = useRef(null);
  const temp = useFBX(src);
  const { animations } = temp;
  const { actions } = useAnimations(animations, groupRef);

  // const { nodes, animations } = useGLTF(src);
  // console.log(animations);
  // const temp = useGLTF(src);
  // console.log(temp);
  // const keys = Object.keys(nodes);
  const [ref, api] = useBox(() => ({ args: [0.1, 0.1, 0.1], mass: 10, position: [0, 1, 2], type: "Dynamic" }));

  useCharacterMovement({ ref, api, actions });

  return (
    <PerspectiveCamera>
      <group ref={groupRef}>
        <primitive scale={0.003} object={temp} ref={ref} />
      </group>
      {/* <group castShadow receiveShadow ref={ref}>
        {keys.map((key) => (
          <mesh key={key} scale={0.003} geometry={(nodes[key] as any).geometry} material={(nodes[key] as any).material} />
        ))}
      </group> */}
    </PerspectiveCamera>
  );
};

export default TestCharacter;
