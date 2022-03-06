/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useBox, useRaycastAll, useRaycastVehicle, useSphere } from "@react-three/cannon";
import { PerspectiveCamera } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { keyBoardStateAtom, positionAtom } from "@Recoils/.";
import { PositionType } from "@Type/.";
import { keyBoardStateType } from "@Type/Three";
import { useEffect, useLayoutEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Vector3 } from "three";

const TestCharacter = (props: any) => {
  // const [ref] = useRaycastVehicle();

  const [ref, api] = useSphere(() => ({ args: [0.1], mass: 100, position: [0, 1, 2], type: "Dynamic" }));

  const { forward, backward, left, right, boost } = useRecoilValue<keyBoardStateType>(keyBoardStateAtom);

  const { camera } = useThree();

  const fowardVector = new Vector3();
  const sideVector = new Vector3();
  const direction = new Vector3();
  const characterPosition = new Vector3();
  let fowardSpeed = 0;
  let sideSpeed = 0;

  useEffect(() => {
    camera.position.set(0, 5, 5);
    camera.lookAt(ref.current!.position);
  }, [camera]);

  useFrame((state, delta) => {
    fowardSpeed = forward || backward ? -0.1 * (forward && !backward ? (boost ? 1.5 : 1) : boost ? -1.5 : -1) : 0;
    fowardVector.set(0, 0, fowardSpeed);
    sideSpeed = left || right ? -0.1 * (right ? 1 : -1) : 0;
    sideVector.set(sideSpeed, 0, 0);
    direction.subVectors(fowardVector, sideVector).normalize().multiplyScalar(1);
    api.velocity.set(direction.x, 0, direction.z);
    ref.current!.getWorldPosition(characterPosition);
    camera.lookAt(characterPosition);
    // camera.position.lerp(characterPosition, delta);
    console.log(characterPosition);
  });

  // eslint-disable-next-line react/destructuring-assignment
  return (
    <PerspectiveCamera>
      <mesh castShadow ref={ref}>
        <boxBufferGeometry attach="geometry" args={[0.1, 0.1, 0.1]} />
        <meshStandardMaterial color="green" />
      </mesh>
    </PerspectiveCamera>
  );
};

export default TestCharacter;
