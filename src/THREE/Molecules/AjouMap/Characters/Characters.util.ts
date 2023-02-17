/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-nested-ternary */
import { Vector3 } from "three";

import type { CharacterAPIRefsType, CharacterRefsType, keyBoardStateType } from "@Type/Three";
import type { GetCharacterDirectionProps, GetMoveDirectionProps, SetCameraPositionProps, SyncPositionWithServerProps, ThreeCamera } from "./Characters.type";
import { CAMERA_DISTANCE, CAMERA_HEIGHT, MOVE_ROTATE } from "./Characters.const";

const characterPosition = new Vector3();
const cameraDirection = new Vector3();
const zVector = new Vector3(0, 0, 1);
const cameraDirectionToXZ = new Vector3();
const moveDirection = new Vector3();

export const setCameraPosition = ({ characterRefs, myUserIdx, setMyPosition, camera }: SetCameraPositionProps) => {
  if (!characterRefs.current[Number(myUserIdx)]?.current) return;

  characterRefs.current[Number(myUserIdx)]!.current.getWorldPosition(characterPosition);
  camera.getWorldDirection(cameraDirection);
  cameraDirection.normalize().multiplyScalar(CAMERA_DISTANCE);
  const { x, y, z } = characterPosition;

  setMyPosition({ x, y, z }); // 없애야 함
  camera.position.set(characterPosition.x + cameraDirection.x, characterPosition.y + cameraDirection.y + CAMERA_HEIGHT, characterPosition.z + cameraDirection.z);
};

export const getDirections = ({ forward, left, right, backward, space, boost, camera }: keyBoardStateType & { camera: ThreeCamera }) => {
  camera.getWorldDirection(cameraDirection);
  cameraDirectionToXZ.set(cameraDirection.x, 0, cameraDirection.z).normalize();

  const characterDirection = getCharacterDirection({ forward, left, right, backward, cameraDirection2D: cameraDirectionToXZ });
  setMoveDirection({ cameraDirection2D: cameraDirectionToXZ, forward, left, backward, right });

  const upwardSpeed = space ? 1 : -0.5;
  const boostSpeed = boost ? 2 : 1;
  //   dir.multiplyScalar(SPEED * boostSpeed);

  return {
    moveDirection,
    upwardSpeed,
    characterDirection,
  };
};

export const syncPositionWithServer = ({ time, userPositions, apis, delta }: SyncPositionWithServerProps) => {
  time.current += delta;
  if (time.current < 3) return;

  userPositions?.forEach(({ position }, idx) => {
    apis.current[idx].position.set(position.x, position.y, position.z);
  });
  time.current = 0;
};

export const isCharacterLoaded = (characterRefs: CharacterRefsType, apis: CharacterAPIRefsType) => characterRefs.current.length > 0 && apis.current.length > 0;

const getCharacterDirection = ({ forward, backward, left, right, cameraDirection2D }: GetCharacterDirectionProps) => {
  const moveRotate = forward || left || right ? (forward ? (left || right ? (left ? (Math.PI * 1) / 4 : (Math.PI * 7) / 4) : 0) : backward ? (left || right ? (left ? (3 * Math.PI) / 4 : (5 * Math.PI) / 4) : Math.PI) : left ? Math.PI / 2 : (3 * Math.PI) / 2) : Math.PI;
  const cameraDirectionAngleToZ = cameraDirection2D.angleTo(zVector);
  const characterDirection = moveRotate + (cameraDirection2D.x < 0 ? 2 * Math.PI - cameraDirectionAngleToZ : cameraDirectionAngleToZ);
  return characterDirection;
};

const setMoveDirection = ({ cameraDirection2D, forward, left, right, backward }: GetMoveDirectionProps): void => {
  if (forward && left) rotateVector(cameraDirection2D, MOVE_ROTATE.FORWARD_LEFT);
  else if (forward && right) rotateVector(cameraDirection2D, MOVE_ROTATE.FORWARD_RIGHT);
  else if (backward && left) rotateVector(cameraDirection2D, MOVE_ROTATE.BACK_LEFT);
  else if (backward && right) rotateVector(cameraDirection2D, MOVE_ROTATE.BACK_RIGHT);
  else if (left) rotateVector(cameraDirection2D, MOVE_ROTATE.LEFT);
  else if (right) rotateVector(cameraDirection2D, MOVE_ROTATE.RIGHT);
  else if (backward) rotateVector(cameraDirection2D, MOVE_ROTATE.BACK);
  else if (forward) rotateVector(cameraDirection2D, MOVE_ROTATE.FOWARD);
  else moveDirection.set(0, 0, 0);
};

const rotateVector = (vector: Vector3, degree: number) => {
  const x = vector.x * Math.cos(degree) - vector.z * Math.sin(degree);
  const z = vector.x * Math.sin(degree) + vector.z * Math.cos(degree);
  moveDirection.set(x, 0, z).normalize();
};
