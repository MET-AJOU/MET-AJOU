/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useBox, useRaycastAll, useRaycastVehicle, useSphere } from "@react-three/cannon";
import { PerspectiveCamera, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { keyBoardStateAtom, positionAtom } from "@Recoils/.";
import { PositionType } from "@Type/.";
import { keyBoardStateType } from "@Type/Three";
import { useEffect, useLayoutEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Vector3 } from "three";

const SPEED = 8;

const TestCharacter = ({ src }: { src: string }) => {
  const { nodes, animations } = useGLTF(src);
  console.log(animations);
  const temp = useGLTF(src);
  const keys = Object.keys(nodes);
  const [ref, api] = useBox(() => ({ args: [1, 0, 0], mass: 100, position: [0, 1, 2], type: "Dynamic" }));
  // const [ref, api] = useSphere(() => ({ args: [0.1], mass: 100, position: [0, 1, 2], type: "Dynamic" }));

  const { forward, backward, left, right, boost, space } = useRecoilValue<keyBoardStateType>(keyBoardStateAtom);
  console.log("forward", forward);
  console.log("backward", backward);
  console.log("left", left);
  console.log("right", right);
  console.log("boost", boost);
  console.log("space", space);
  const { camera } = useThree();

  const fowardVector = new Vector3();
  const sideVector = new Vector3();
  const upwardVector = new Vector3();
  const direction = new Vector3();
  const characterPosition = new Vector3();
  const cameraPosition = new Vector3();
  let fowardSpeed = 0;
  let sideSpeed = 0;
  let upwardSpeed = 0;

  useEffect(() => {
    camera.position.set(0, 5, 5);
    camera.lookAt(ref.current!.position);
  }, [camera]);

  useFrame((state, delta) => {
    fowardSpeed = forward || backward ? -SPEED * (forward && !backward ? (boost ? 2.5 : 1) : boost ? -2.5 : -1) : 0;
    console.log(fowardSpeed);
    fowardVector.set(0, 0, fowardSpeed);
    sideSpeed = left || right ? -SPEED * (right ? 1 : -1) : 0;
    sideVector.set(sideSpeed, 0, 0);
    upwardSpeed = space ? 5 : -0.5;
    direction.subVectors(fowardVector, sideVector);
    // direction.subVectors(fowardVector, sideVector).normalize().multiplyScalar(1);
    api.velocity.set(direction.x, upwardSpeed, direction.z);
    ref.current!.getWorldPosition(characterPosition);
    camera.lookAt(characterPosition);
    cameraPosition.set(characterPosition.x, characterPosition.y + 1, characterPosition.z + 1);
    camera.position.lerp(cameraPosition, delta);
  });

  // eslint-disable-next-line react/destructuring-assignment
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
