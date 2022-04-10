/* eslint-disable no-debugger */
/* eslint-disable prefer-const */
/* eslint-disable no-useless-return */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-nested-ternary */
import { PublicApi } from "@react-three/cannon";
import { useThree, useFrame } from "@react-three/fiber";
import { keyBoardStateAtom } from "@Recoils/.";
import { myUserIdAtom } from "@Recoils/Characters";
import { CharacterType, keyBoardStateType } from "@Type/Three";
import { getDxDy } from "@Util/.";
import { initAnimation } from "@Util/animation";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { Vector3 } from "three";

const SPEED = -1;

const useCharacterMovement = ({ apis, characterRefs, actions, characters }: { apis: any; characterRefs: any; actions: any; characters: CharacterType[] | null }) => {
  const myUserId = useRecoilValue(myUserIdAtom);
  const myUserIdx = characters?.findIndex(({ userId }) => userId === myUserId);
  const userKeyStates = characters?.map(({ keyState: { forward, backward, left, right, boost, space, dance } }) => ({ forward, backward, left, right, boost, space, dance })) ?? [];

  const { camera } = useThree();

  const fowardVector = new Vector3();
  const sideVector = new Vector3();
  const direction = new Vector3();
  const characterPosition = new Vector3();
  const cameraPosition = new Vector3();
  const temp = new Vector3();
  let fowardSpeed = 0;
  let sideSpeed = 0;
  let upwardSpeed = 0;
  let boostSpeed = 1;
  let characterDir = 0;
  let isSafe = false;

  if (characterRefs.current.length > 0 && apis.current.length > 0) isSafe = true;

  useFrame((state, delta) => {
    if (isSafe) {
      userKeyStates?.forEach(({ forward, backward, left, right, boost, space, dance }, idx) => {
        // initAnimation({ forward, backward, left, right, boost, space, dance, actions: actions[idx].current });
        characterDir = forward || left || right ? (forward ? Math.PI : backward ? Math.PI : left ? (3 * Math.PI) / 2 : Math.PI / 2) : 0;
        fowardSpeed = forward || backward ? (forward && !backward ? 1 : -1) : 0;
        fowardVector.set(0, 0, fowardSpeed);
        sideSpeed = left || right ? (right ? 1 : -1) : 0;
        sideVector.set(sideSpeed, 0, 0);
        upwardSpeed = space ? 3 : -1;
        boostSpeed = boost ? 2 : 1;
        direction
          .subVectors(fowardVector, sideVector)
          .normalize()
          .multiplyScalar(SPEED * boostSpeed);
        initAnimation({ forward, backward, left, right, boost, space, dance, actions: actions.current[idx] });
        if (apis.current[idx]) {
          apis.current[idx].velocity.set(direction.x, upwardSpeed, direction.z);
          apis.current[idx].rotation.set(0, characterDir, 0);
        }
      });

      characterRefs.current[Number(myUserIdx)]!.current.getWorldPosition(characterPosition);
      camera.lookAt(characterPosition);
      cameraPosition.set(characterPosition.x, characterPosition.y + 1, characterPosition.z + 2);
      camera.position.lerp(cameraPosition, delta);
    }
  });
};
export default useCharacterMovement;
