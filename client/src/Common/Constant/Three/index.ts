import { keyBoardStateType } from "@Type/Three";

export const DefaultKeyboardState: keyBoardStateType = {
  backward: false,
  forward: false,
  left: false,
  right: false,
  boost: false,
  space: false,
  dance: false,
};

export const BuildingsSrc = "models/Building";

export const RoadsSrc = "models/Roads";

export const GroundsSrc = "models/Grounds";

export const BuildingGroundsSrc = "models/BuildingGrounds";

export const RoadsAssetSize = 14;

export const GroundAssetSize = 9;

export const BuildingGroundAssetSize = 22;

export const animationSrcs = {
  walkingSrc: "Character/common_people@walk.FBX",
  runningSrc: "Character/common_people@run.FBX",
  dancingSrc: "Character/common_people@dance.FBX",
  jumpingSrc: "Character/common_people@jump-up.FBX",
};
