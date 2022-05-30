/* eslint-disable no-debugger */
/* eslint-disable prefer-const */
/* eslint-disable no-useless-return */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-nested-ternary */
import { useThree, useFrame } from "@react-three/fiber";
import { myPositionAtom, myUserIdAtom } from "@Recoils/Characters";
import { CharacterType, keyBoardStateType } from "@Type/Three";
import { initAnimation } from "@Util/animation";
import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Vector3 } from "three";

const SPEED = -1;

const useCharacterMovement = ({ apis, characterRefs, actions, characters }: { apis: any; characterRefs: any; actions: any; characters: CharacterType[] | null }) => {
  const myUserId = useRecoilValue(myUserIdAtom);
  const myUserIdx = characters?.findIndex(({ userId }) => userId === myUserId);
  const userKeyStates = characters?.map(({ keyState: { forward, backward, left, right, boost, space, dance } }) => ({ forward, backward, left, right, boost, space, dance })) ?? [];
  const userPositions = characters?.map(({ position }) => ({ position }));
  const setMyPosition = useSetRecoilState(myPositionAtom);
  const { camera } = useThree();
  const [time, setTime] = useState(0);
  let isSafe = false;
  if (characterRefs.length > 0 && apis.length > 0) isSafe = true;

  useFrame((state, delta) => {
    if (isSafe) {
      userKeyStates?.forEach(({ forward, backward, left, right, boost, space, dance }, idx) => {
        const { direction, upwardSpeed, characterDir } = getDirection({ forward, left, right, backward, space, boost, dance: false });
        if (actions[idx] !== 0) initAnimation({ forward, backward, left, right, boost, space, dance, actions: actions[idx] });
        if (apis[idx] && apis[idx] !== 0) {
          apis[idx].velocity.set(direction.x, upwardSpeed, direction.z);
          apis[idx].rotation.set(0, characterDir, 0);
        }
      });

      setCameraPosition({ characterRefs, myUserIdx, setMyPosition, camera, delta, backward: userKeyStates[myUserIdx as number].backward });

      setTime((prev) => prev + delta);

      if (time > 3) {
        userPositions?.forEach(({ position }, idx) => {
          if (apis[idx] && apis[idx] !== 0) apis[idx].position.set(position.x, position.y, position.z);
        });
        setTime(0);
      }
    }
  });
};
export default useCharacterMovement;

const setCameraPosition = ({ characterRefs, myUserIdx, setMyPosition, camera, delta, backward }: any) => {
  const characterPosition = new Vector3();
  const cameraPosition = new Vector3();

  characterRefs[Number(myUserIdx)]!.current.getWorldPosition(characterPosition);
  const { x, y, z } = characterPosition;
  setMyPosition({ x, y, z });
  camera.lookAt(characterPosition);

  const isPressBackward = backward ? -0.5 : 0.5;
  cameraPosition.set(characterPosition.x, characterPosition.y + 0.25, characterPosition.z + isPressBackward);
  camera.position.lerp(cameraPosition, delta);
};

const getDirection = ({ forward, left, right, backward, space, boost, dance }: keyBoardStateType) => {
  const characterDir = forward || left || right ? (forward ? (left || right ? (left ? (Math.PI * 5) / 4 : (Math.PI * 3) / 4) : Math.PI) : backward ? (left || right ? (left ? (Math.PI * 7) / 4 : Math.PI / 4) : Math.PI) : left ? (3 * Math.PI) / 2 : Math.PI / 2) : 0;
  const fowardSpeed = forward || backward ? (forward && !backward ? 1 : -1) : 0;
  const sideSpeed = left || right ? (right ? 1 : -1) : 0;
  const upwardSpeed = space ? 1 : -0.5;
  const boostSpeed = boost ? 2 : 1;

  const fowardVector = new Vector3();
  const sideVector = new Vector3();
  const direction = new Vector3();

  fowardVector.set(0, 0, fowardSpeed);
  sideVector.set(sideSpeed, 0, 0);

  direction
    .subVectors(fowardVector, sideVector)
    .normalize()
    .multiplyScalar(SPEED * boostSpeed);

  return {
    direction,
    upwardSpeed,
    characterDir,
  };
};
