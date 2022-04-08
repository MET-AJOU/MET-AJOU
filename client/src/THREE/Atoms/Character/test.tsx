/* eslint-disable prefer-const */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useFBX, useGLTF } from "@react-three/drei";
import { useSphere } from "@react-three/cannon";
import React, { Suspense, useEffect, useRef } from "react";
import useGetAnimations from "@Hook/Three/useGetAnimations";
import { animationSrcs } from "@Constant/Three";
import { CharacterType } from "@Type/Three";
import { Vector3 } from "three";

const TestCharacter = ({ src, characterState, characterRefs, actions, apis, idx }: { src: string; characterState: CharacterType; characterRefs: any; idx: number; actions: any; apis: any }) => {
  if (!characterState) return null;
  console.log(characterState);

  const {
    position: { x, y, z },
  } = characterState;
  const groupRef = useRef(null);
  const { nodes } = useGLTF(src) as any;
  const { geometry: geometry1, material: material1 } = nodes.mesh_0;

  const { geometry: geometry2, material: material2 } = nodes.mesh_0_1;
  // let model = useFBX(src);
  // let modelClone = model.clone();
  // console.log(modelClone);

  const [ref, api] = useSphere(() => ({
    mass: 100,
    args: [0.1],
    position: [x, y, z],
    type: "Dynamic",
  }));

  useEffect(() => {
    characterRefs.current[idx] = ref;
    apis.current[idx] = api;
    // actions.crreunt[idx] = useGetAnimations({ animationSrcs, groupRef });
  }, [api, ref]);
  return (
    <group ref={ref} scale={0.02}>
      <mesh geometry={geometry1} material={material1} />
      <mesh geometry={geometry2} material={material2} />
    </group>
  );

  // return (
  //   <Suspense fallback={null}>
  //     <mesh scale={0.002} ref={ref} material-reflectivity={1}>
  //       <primitive scale={0.000002} object={modelClone} dispose={null} />;
  //     </mesh>
  //   </Suspense>
  // );
  // // return (
  //   <mesh castShadow ref={ref}>
  //     <boxBufferGeometry attach="geometry" args={[0.1, 0.1, 0.1]} />
  //     <meshStandardMaterial color="white" />
  //   </mesh>
  // );
};

// function propsCompareFn(prev: any, next: any): boolean {
//   // const {
//   //   src: prevSrc,
//   //   characterState: { characterId: prevCharacterId, keyState, position, userId },
//   // } = prev;
//   // const {
//   //   src,
//   //   characterState: { characterId, keyState, position, userId },
//   // } = prev;
//   console.log(prev);
//   console.log(next);
//   return true;
// }
export default TestCharacter;
// export default React.memo(TestCharacter);
// export default React.memo(TestCharacter, propsCompareFn);
