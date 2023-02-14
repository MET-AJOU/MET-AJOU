/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-nested-ternary */
import { Vector3 } from "three";

import type { keyBoardStateType } from "@Type/Three";
import type { GetCharacterDirectionProps, GetMoveDirectionProps, SetCameraPositionProps, ThreeCamera } from "./Characters.type";
import { CAMERA_DISTANCE, CAMERA_HEIGHT, MOVE_ROTATE } from "./Characters.const";

export const setCameraPosition = ({ characterRefs, myUserIdx, setMyPosition, camera }: SetCameraPositionProps) => {
  if (!characterRefs.current[Number(myUserIdx)]?.current) return;

  const characterPosition = new Vector3();
  const cameraDirection = new Vector3();

  characterRefs.current[Number(myUserIdx)]!.current.getWorldPosition(characterPosition);
  camera.getWorldDirection(cameraDirection);
  cameraDirection.normalize().multiplyScalar(CAMERA_DISTANCE);
  const { x, y, z } = characterPosition;

  setMyPosition({ x, y, z });
  camera.position.set(characterPosition.x + cameraDirection.x, characterPosition.y + cameraDirection.y + CAMERA_HEIGHT, characterPosition.z + cameraDirection.z);
};

export const getDirections = ({ forward, left, right, backward, space, boost, camera }: keyBoardStateType & { camera: ThreeCamera }) => {
  const cameraDirection = new Vector3();
  camera.getWorldDirection(cameraDirection);

  const cameraDirectionToXZ = new Vector3(cameraDirection.x, 0, cameraDirection.z).normalize();
  const characterDirection = getCharacterDirection({ forward, left, right, backward, cameraDirection2D: cameraDirectionToXZ });
  const moveDirection = getMoveDirection({ cameraDirection2D: cameraDirectionToXZ, forward, left, backward, right });
  const upwardSpeed = space ? 1 : -0.5;
  const boostSpeed = boost ? 2 : 1;
  //   dir.multiplyScalar(SPEED * boostSpeed);

  return {
    moveDirection,
    upwardSpeed,
    characterDirection,
  };
};

const getCharacterDirection = ({ forward, backward, left, right, cameraDirection2D }: GetCharacterDirectionProps) => {
  const moveRotate = forward || left || right ? (forward ? (left || right ? (left ? (Math.PI * 1) / 4 : (Math.PI * 7) / 4) : 0) : backward ? (left || right ? (left ? (3 * Math.PI) / 4 : (5 * Math.PI) / 4) : Math.PI) : left ? Math.PI / 2 : (3 * Math.PI) / 2) : Math.PI;
  const cameraDirectionAngleToZ = cameraDirection2D.angleTo(new Vector3(0, 0, 1));
  const characterDirection = moveRotate + (cameraDirection2D.x < 0 ? 2 * Math.PI - cameraDirectionAngleToZ : cameraDirectionAngleToZ);
  return characterDirection;
};

const getMoveDirection = ({ cameraDirection2D, forward, left, right, backward }: GetMoveDirectionProps): Vector3 => {
  if (forward && left) return rotateVector(cameraDirection2D, MOVE_ROTATE.FORWARD_LEFT);
  if (forward && right) return rotateVector(cameraDirection2D, MOVE_ROTATE.FORWARD_RIGHT);
  if (backward && left) return rotateVector(cameraDirection2D, MOVE_ROTATE.BACK_LEFT);
  if (backward && right) return rotateVector(cameraDirection2D, MOVE_ROTATE.BACK_RIGHT);
  if (left) return rotateVector(cameraDirection2D, MOVE_ROTATE.LEFT);
  if (right) return rotateVector(cameraDirection2D, MOVE_ROTATE.RIGHT);
  if (backward) return rotateVector(cameraDirection2D, MOVE_ROTATE.BACK);
  if (forward) return cameraDirection2D;
  return new Vector3(0, 0, 0);
};

const rotateVector = (vector: Vector3, degree: number) => {
  const x = vector.x * Math.cos(degree) - vector.z * Math.sin(degree);
  const z = vector.x * Math.sin(degree) + vector.z * Math.cos(degree);
  return new Vector3(x, 0, z).normalize();
};
