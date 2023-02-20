import type { CharacterAPIRefsType, CharacterRefsType, CharacterType } from "@Type/Three";
import type { Camera, Vector3 } from "three";

export type UseCharacterMovementProps = {
  characterRefs: CharacterRefsType;
  characters: CharacterType[] | null;
  apis: CharacterAPIRefsType;
  actions: any;
};

export type ThreeCamera = Camera & {
  manual?: boolean | undefined;
};

type MoveDir = {
  forward: boolean;
  backward: boolean;
  left: boolean;
  right: boolean;
};
export type SetCameraPositionProps = {
  characterRefs: CharacterRefsType;
  myUserIdx?: number;
  camera: ThreeCamera;
};

export type GetMoveDirectionProps = {
  cameraDirection2D: Vector3;
} & MoveDir;

export type GetCharacterDirectionProps = {
  cameraDirection2D: Vector3;
} & MoveDir;

export type SyncPositionWithServerProps = {
  time: React.MutableRefObject<number>;
  characterStates: { instance: CharacterType[] };
  apis: CharacterAPIRefsType;
  delta: number;
};
