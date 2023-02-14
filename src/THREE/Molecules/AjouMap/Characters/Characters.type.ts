import type { CharacterAPIRefsType, CharacterRefsType, CharacterType, PositionType } from "@Type/Three";
import type { SetterOrUpdater } from "recoil";
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
  setMyPosition: SetterOrUpdater<PositionType>;
  camera: ThreeCamera;
}

export interface GetMoveDirectionProps extends MoveDir {
  cameraDirection2D: Vector3;
}

export interface GetCharacterDirectionProps extends MoveDir {
  cameraDirection2D: Vector3;
}
