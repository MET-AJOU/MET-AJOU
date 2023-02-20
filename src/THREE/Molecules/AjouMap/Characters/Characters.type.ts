import type { CharacterAPIRefsType, CharacterRefsType, CharacterType } from "@Type/Three";
import type { Camera, Vector3 } from "three";

export interface UseCharacterMovementProps {
  characterRefs: CharacterRefsType;
  characters: CharacterType[] | null;
  apis: CharacterAPIRefsType;
  actions: any;
}

export type ThreeCamera = Camera & {
  manual?: boolean | undefined;
};

interface MoveDir {
  forward: boolean;
  backward: boolean;
  left: boolean;
  right: boolean;
}
export interface SetCameraPositionProps {
  characterRefs: CharacterRefsType;
  myUserIdx?: number;
  camera: ThreeCamera;
}

export interface GetMoveDirectionProps extends MoveDir {
  cameraDirection2D: Vector3;
}

export interface GetCharacterDirectionProps extends MoveDir {
  cameraDirection2D: Vector3;
}

export interface SyncPositionWithServerProps {
  time: React.MutableRefObject<number>;
  characterStates: { instance: CharacterType[] };
  apis: CharacterAPIRefsType;
  delta: number;
}
