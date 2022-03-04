/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useBox, useRaycastAll, useRaycastVehicle } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import { keyBoardStateAtom, positionAtom } from "@Recoils/.";
import { PositionType } from "@Type/.";
import { keyBoardStateType } from "@Type/Three";
import { useEffect, useLayoutEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Vector3 } from "three";

const TestCharacter = (props: any) => {
  // const [ref] = useRaycastVehicle();
  const { forward, backward, left, right, boost } = useRecoilValue<keyBoardStateType>(keyBoardStateAtom);

  const { camera } = useThree();

  let speed = 0;
  const vector = new Vector3();

  useEffect(() => {
    camera.position.set(0, 10, 10);
    camera.lookAt(ref.current!.position);
  }, [camera]);

  useFrame((state, delta) => {
    speed = forward || backward ? 0.1 * (forward && !backward ? (boost ? 1.5 : 1) : boost ? -1.5 : -1) : 0;
    vector.set(0, speed, 0);
    camera.posi;
  });

  // eslint-disable-next-line react/destructuring-assignment
  return (
    <mesh castShadow ref={ref}>
      <boxBufferGeometry attach="geometry" args={[0.1, 0.1, 0.1]} />
      <meshStandardMaterial color="ref" />
    </mesh>
  );
};

export default TestCharacter;
