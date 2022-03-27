/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { PerspectiveCamera, useAnimations, useFBX, useGLTF } from "@react-three/drei";
import useCharacterMovement from "@Hook/Three/useMovement";
import { useSphere } from "@react-three/cannon";
import { useRef } from "react";
import useGetAnimations from "@Hook/Three/useGetAnimations";
import { animationSrcs } from "@Constant/Three";

const TestCharacter = ({ src }: { src: string }) => {
  const groupRef = useRef(null);
  const temp = useFBX(src);

  const actions = useGetAnimations({ animationSrcs, groupRef });

  const [ref, api] = useSphere(() => ({
    mass: 100,
    args: [0.1],
    position: [13, 3.65, 21],
    type: "Dynamic",
  }));

  useCharacterMovement({ ref, api, actions });

  return (
    <PerspectiveCamera>
      <group ref={groupRef}>
        <primitive scale={0.002} object={temp} ref={ref} />
      </group>
    </PerspectiveCamera>
  );
};

export default TestCharacter;
